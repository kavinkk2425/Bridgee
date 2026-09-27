import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// Initialize Google GenAI client if key exists
const apiKey = process.env.GEMINI_API_KEY || '';
let aiClient: GoogleGenAI | null = null;
if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  aiClient = new GoogleGenAI({ apiKey });
}

// Memory stores for RSVPs and Mentor submissions
const rsvpStore: Array<{
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  year: string;
  interest: string;
  timestamp: string;
}> = [];

// API Endpoint: RSVP Inauguration Pass
app.post('/api/rsvp', (req, res) => {
  const { name, email, role, department, year, interest } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const passId = `BC-2026-${Math.floor(100000 + Math.random() * 900000)}`;
  const passRecord = {
    id: passId,
    name,
    email,
    role: role || 'Student',
    department: department || 'General',
    year: year || 'N/A',
    interest: interest || 'General Career Guidance',
    timestamp: new Date().toISOString()
  };

  rsvpStore.push(passRecord);
  return res.json({ success: true, pass: passRecord });
});

// API Endpoint: AI Career Assistant (Mentorship outreach, Mock questions, Roadmaps)
app.post('/api/ai-assistant', async (req, res) => {
  const { type, promptPayload } = req.body;

  let systemInstruction = "You are Bridge Club's AI Career Assistant, dedicated to empowering students through alumni mentorship, mock interviews, resume feedback, and career direction.";
  let userPrompt = "";

  if (type === 'draft-outreach') {
    const { mentorName, mentorRole, mentorCompany, studentGoal, studentBackground } = promptPayload;
    userPrompt = `Draft a polite, professional, concise 3-paragraph email/LinkedIn message from a student named (${studentBackground.name || 'Student'}, studying ${studentBackground.major || 'Engineering'}) to an alumni mentor (${mentorName}, ${mentorRole} at ${mentorCompany}). Goal: Seeking advice on ${studentGoal}. Include a warm greeting, clear request, and respectful sign-off.`;
  } else if (type === 'mock-questions') {
    const { targetRole, company, topic } = promptPayload;
    userPrompt = `Generate 5 realistic, high-impact interview questions (3 Technical/Problem-Solving, 2 Behavioral) for a ${targetRole} role at ${company || 'top companies'}, focusing on ${topic || 'general tech'}. For each question, provide 2 bullet points on "What the interviewer is looking for" and "Key answer tips". Format cleanly with markdown headings.`;
  } else if (type === 'career-roadmap') {
    const { currentYear, currentMajor, targetGoal } = promptPayload;
    userPrompt = `Create an actionable, quarter-by-quarter 12-month career roadmap for a ${currentYear} year ${currentMajor} student aspiring to achieve: "${targetGoal}". Divide into Phase 1 (Foundation & Skills), Phase 2 (Projects & Networking/Resumes), Phase 3 (Applications & Mock Interviews), and Phase 4 (Closing & Mentorship). Keep it encouraging and practical.`;
  } else {
    userPrompt = promptPayload.message || "Provide mentorship guidance for a college student.";
  }

  try {
    if (aiClient) {
      const response = await aiClient.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `${systemInstruction}\n\nUser request: ${userPrompt}`
      });
      return res.json({ result: response.text });
    } else {
      // Smart Fallback Response Generator if API Key is not set
      let fallbackText = "";
      if (type === 'draft-outreach') {
        fallbackText = `Subject: Bridge Club Mentorship Request - Guidance on ${promptPayload.studentGoal || 'Career Path'}\n\nDear ${promptPayload.mentorName || 'Mentor'},\n\nHope this message finds you well! I am a student at Bridge Institute pursuing ${promptPayload.studentBackground?.major || 'Engineering'}, and I recently discovered your profile through the Bridge Club Alumni Directory.\n\nI am deeply interested in ${promptPayload.studentGoal || 'building a career in your industry'}. Knowing your experience as ${promptPayload.mentorRole || 'a leader'} at ${promptPayload.mentorCompany || 'your company'}, I would be immensely grateful for 15-20 minutes of your guidance.\n\nThank you for your time and for giving back to the Bridge Club community!\n\nWarm regards,\n${promptPayload.studentBackground?.name || 'Bridge Student'}`;
      } else if (type === 'mock-questions') {
        fallbackText = `### Mock Interview Questions for ${promptPayload.targetRole || 'Software / Industry Role'}\n\n1. **Technical Foundation**: Walk me through a challenging project you built. What architectural trade-offs did you make?\n   * *Looking for*: Deep technical understanding, clarity of design.\n   * *Tip*: Use the STAR method (Situation, Task, Action, Result).\n\n2. **Problem Solving**: How do you approach debugging an intermittent error in production or a complex assignment?\n   * *Looking for*: Systematic troubleshooting process.\n   * *Tip*: Explain your hypothesis-testing mindset.\n\n3. **Behavioral**: Tell me about a time you had a difference of opinion with a team member on a project.\n   * *Looking for*: Soft skills, empathy, and constructive collaboration.\n   * *Tip*: Highlight the resolution and learning outcome.`;
      } else {
        fallbackText = `### Your 12-Month Career Roadmap\n\n* **Phase 1 (Months 1-3)**: Core Skill Mastery & Fundamentals\n* **Phase 2 (Months 4-6)**: Build 2 High-Impact Projects & Get Resume Reviewed via Bridge Club Clinic\n* **Phase 3 (Months 7-9)**: Conduct 3 Mock Interviews with Alumni Mentors & Begin Targeted Applications\n* **Phase 4 (Months 10-12)**: Referral Outreach & Final Round Interviews`;
      }
      return res.json({ result: fallbackText });
    }
  } catch (err: any) {
    console.error("AI Generation error:", err);
    return res.status(500).json({ error: "Failed to generate AI response.", details: err.message });
  }
});

// Configure Vite or Static server
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: process.env.DISABLE_HMR !== 'true' },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Bridge Club server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
