import officialClubLogo from '../assets/images/official_club_logo.jpg';
import officialEventPoster from '../assets/images/official_event_poster.png';

export interface SurveyOption {
  id: string;
  title: string;
  shortTitle: string;
  votes: number;
  percentage: number;
  description: string;
  actionableProgram: string;
  iconName: string;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  batch: string;
  degree: string;
  location: string;
  avatar: string;
  bio: string;
  expertise: string[];
  slotsAvailable: number;
  featured?: boolean;
  linkedin: string;
}

export interface ChiefGuest {
  id: string;
  name: string;
  title: string;
  organization: string;
  batch: string;
  image: string;
  bio: string;
  keynoteTopic: string;
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  speaker: string;
  venue: string;
  category: 'Ceremony' | 'Keynote' | 'Unveiling' | 'Panel' | 'Networking';
  description: string;
}

export interface Coordinator {
  id: string;
  name: string;
  role: string;
  category: 'Faculty Patron' | 'Student Lead' | 'Alumni Liaison';
  department: string;
  avatar: string;
  email: string;
  linkedin?: string;
  responsibilities: string[];
}

export interface RoleResponsibility {
  roleGroup: string;
  iconName: string;
  title: string;
  summary: string;
  points: string[];
}

export const OFFICIAL_POSTER_INFO = {
  institution: 'Government College of Engineering, Erode',
  tagline: 'LEARN | GROW | BUILD TOGETHER',
  association: "IRTT Alumni Association — Synergize · Support · Serve · Let's Connect...",
  clubName: 'THE Bridge Club',
  motto: 'Knowledge Today, Success Tomorrow',
  subMotto: 'Together We Learn · Together We Grow',
  mission: 'A student-led club that connects students, staff and alumni to accelerate learning, careers and opportunities.',
  logoImage: officialClubLogo,
  posterImage: officialEventPoster,
  eventDate: '28th Sep (Monday)',
  eventTime: '9.30 AM – 12.30 PM',
  eventVenue: 'AUDITORIUM Government College of Engineering - Erode',
  triRoles: {
    students: 'Students lead',
    staff: 'Staff support',
    alumni: 'Alumni open doors'
  },
  whyThisClub: [
    {
      title: 'Student-Led',
      description: 'Real needs. Real voices. Real change.',
      icon: 'Users'
    },
    {
      title: 'Collaboration',
      description: 'Students, staff and alumni working together.',
      icon: 'Handshake'
    },
    {
      title: 'Career Focused',
      description: 'Guidance, mentorship and opportunities for a brighter future.',
      icon: 'TrendingUp'
    },
    {
      title: 'A Stronger Network',
      description: 'Build relationships, share knowledge, create opportunities.',
      icon: 'Network'
    }
  ],
  howItWorks: [
    {
      step: 1,
      title: 'Identify & Express Need',
      description: 'Students log career goals, technical queries, or interview practice requests through the club portal.'
    },
    {
      step: 2,
      title: 'Committee & Faculty Review',
      description: 'Student coordinators and faculty advisors categorize needs into structured 1:1 mentorship cohorts.'
    },
    {
      step: 3,
      title: 'Alumni Mentor Matching',
      description: 'Students are matched with alumni working in top tech, product, and core engineering firms.'
    },
    {
      step: 4,
      title: '1:1 Session & Feedback',
      description: '45-minute mock interviews, resume teardowns, or roadmap sessions with written assessment rubrics.'
    },
    {
      step: 5,
      title: 'Placement & Referrals',
      description: 'Top-performing students receive direct company referrals and recommendation letters from alumni.'
    }
  ]
};

export const CLUB_COORDINATORS: Coordinator[] = [
  {
    id: 'coord-1',
    name: 'Prof. K. V. Ramanathan',
    role: 'Principal & Chief Patron',
    category: 'Faculty Patron',
    department: 'Institutional Governance, GCE Erode',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    email: 'principal@gceerode.ac.in',
    responsibilities: [
      'Overall institutional leadership and vision',
      'Strategic alignment between college administration and alumni network',
      'Patronizing flagship annual student-alumni conventions'
    ]
  },
  {
    id: 'coord-2',
    name: 'Dr. S. Meenakshi',
    role: 'Faculty Staff Coordinator',
    category: 'Faculty Patron',
    department: 'Department of Computer Science & Student Affairs',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    email: 'meenakshi.s@gceerode.ac.in',
    responsibilities: [
      'Faculty oversight and academic alignment',
      'Coordinating campus auditoriums, labs, and workshop venues',
      'Facilitating official student executive elections and governance'
    ]
  },
  {
    id: 'coord-3',
    name: 'Er. M. Karthik',
    role: 'Alumni Association Liaison Officer',
    category: 'Alumni Liaison',
    department: 'IRTT Alumni Association Executive Board',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    email: 'alumni.liaison@gceerode.ac.in',
    responsibilities: [
      'Connecting global alumni chapters with student leads',
      'Verifying alumni mentor profiles and industry credentials',
      'Managing corporate job referral pipelines'
    ]
  },
  {
    id: 'coord-4',
    name: 'Kavin Kumar',
    role: 'Student President & Lead Coordinator',
    category: 'Student Lead',
    department: 'Final Year, Computer Science & Engineering',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    email: 'kavinkumar@gceerode.ac.in',
    linkedin: 'https://linkedin.com',
    responsibilities: [
      'Overall management of student core committee and operations',
      'Conducting weekly executive syncs with faculty patrons',
      'Monitoring mentorship slot bookings and student feedback'
    ]
  },
  {
    id: 'coord-5',
    name: 'Archana R.',
    role: 'Vice President & Mentorship Operations Lead',
    category: 'Student Lead',
    department: 'Final Year, Electronics & Communication',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    email: 'archana.r@gceerode.ac.in',
    linkedin: 'https://linkedin.com',
    responsibilities: [
      'Coordinating 1:1 mock interview bookings and mentor schedules',
      'Publishing post-session feedback scorecards',
      'Managing student helpdesk and query resolutions'
    ]
  },
  {
    id: 'coord-6',
    name: 'Dinesh V.',
    role: 'Technical & Innovation Tracks Lead',
    category: 'Student Lead',
    department: 'Third Year, Information Technology',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    email: 'dinesh.v@gceerode.ac.in',
    linkedin: 'https://linkedin.com',
    responsibilities: [
      'Organizing coding hackathons, technical roadmaps & skill workshops',
      'Managing student project teardowns and portfolio reviews',
      'Curating ATS-friendly resume templates'
    ]
  }
];

export const CLUB_ROLES_RESPONSIBILITIES: RoleResponsibility[] = [
  {
    roleGroup: 'Student Executive Council',
    iconName: 'Users',
    title: 'Student Leaders & Operations Committee',
    summary: 'Elected student officers responsible for day-to-day club management, survey logistics, and mentorship scheduling.',
    points: [
      'Survey & Needs Discovery: Continuously gather student career feedback and skill gap data.',
      'Mentorship Scheduling: Pair students with verified alumni mentors for 1:1 sessions.',
      'Workshop Management: Organize AMA sessions, resume clinics, and technical hackathons.',
      'Student Support: Guide junior members on how to maximize alumni interactions.'
    ]
  },
  {
    roleGroup: 'Faculty Patrons & Staff Advisors',
    iconName: 'GraduationCap',
    title: 'Institutional Faculty Advisors',
    summary: 'Department professors and institutional patrons providing academic oversight, campus facilities, and official governance.',
    points: [
      'Academic Integration: Align mentorship workshops with semester curriculum goals.',
      'Campus Approvals: Facilitate auditoriums, computer labs, and official permissions.',
      'Quality Standards: Ensure professional conduct and ethical guidelines during 1:1 interactions.',
      'Institutional Support: Connect student leads with institute administration.'
    ]
  },
  {
    roleGroup: 'Alumni Mentors & Industry Advisors',
    iconName: 'Award',
    title: 'Verified Global Alumni Mentors',
    summary: 'IRTT / GCE Erode graduates working at top global tech firms, core industries, and research labs.',
    points: [
      '1:1 Practice Rounds: Conduct technical, behavioral, and system design mock interviews.',
      'Resume & Portfolio Reviews: Provide actionable feedback to pass ATS screening.',
      'Direct Referrals: Recommend top-performing students for job openings at their companies.',
      'Higher Ed Guidance: Review SOPs, GRE/TOEFL preparation, and university applications.'
    ]
  },
  {
    roleGroup: 'Student Members',
    iconName: 'Compass',
    title: 'Undergraduate Student Body',
    summary: 'Students across all engineering branches benefiting from structured mentorship cohorts.',
    points: [
      'Active Engagement: Prepare diligently for 1:1 mentorship sessions.',
      'Skill Mastery: Work on mentor recommendations and complete career milestone roadmaps.',
      'Peer Learning: Share mock interview takeaways and study resources with classmates.',
      'Future Mentorship: Transition to mentor roles upon graduating and entering the industry.'
    ]
  }
];

export const INAUGURATION_SCHEDULE: ScheduleItem[] = [
  {
    id: 's1',
    time: '09:30 AM - 10:00 AM',
    title: 'Delegate Registration & Welcome Networking',
    speaker: 'Bridge Club Student Executive Team',
    venue: 'Auditorium Foyer, GCE Erode',
    category: 'Ceremony',
    description: 'Arrival of dignitaries, alumni mentors, faculty, and student attendees.'
  },
  {
    id: 's2',
    time: '10:00 AM - 10:20 AM',
    title: 'Grand Inaugural Lamp Lighting & Official Emblem Launch',
    speaker: 'College Principal, Staff & Alumni Leaders',
    venue: 'GCE Erode Auditorium',
    category: 'Ceremony',
    description: 'Ceremonial lamp lighting and unveiling of the official Bridge Club emblem.'
  }
];

export const SURVEY_DATA: SurveyOption[] = [
  {
    id: 'career-direction',
    title: 'Clearing my confusion / Career direction',
    shortTitle: 'Career Direction & Clarity',
    votes: 286,
    percentage: 51.5,
    description: 'Over half of all students seek clarity on selecting career paths, domain specialization, and long-term goal setting.',
    actionableProgram: '1-on-1 Career Direction Sessions & Quarterly Mentorship Cohorts',
    iconName: 'Compass'
  },
  {
    id: 'mock-interviews',
    title: '1:1 Mock Interviews & Real-time Feedback',
    shortTitle: '1:1 Mock Interviews',
    votes: 230,
    percentage: 41.4,
    description: 'Students want realistic technical and behavioral interview preparation with experienced industry professionals.',
    actionableProgram: 'Weekly Industry Mock Interview Slots with Detailed Assessment Scorecard',
    iconName: 'Video'
  },
  {
    id: 'referrals',
    title: 'Referrals or Guidance for Job search',
    shortTitle: 'Job Referrals & Placement',
    votes: 228,
    percentage: 41.1,
    description: 'Navigating job boards can be tough. Direct alumni referrals and strategic application advice significantly boost response rates.',
    actionableProgram: 'Bridge Referral Portal & Verified Alumni Job Directory',
    iconName: 'Briefcase'
  },
  {
    id: 'resume-rebuild',
    title: 'Rebuilding my Resume / Portfolio Critique',
    shortTitle: 'Resume & Portfolio Revamp',
    votes: 198,
    percentage: 35.7,
    description: 'Crafting ATS-friendly resumes and high-impact project showcases that stand out to talent acquisition teams.',
    actionableProgram: 'Resume Clinic & Monthly Portfolio Teardown Sessions',
    iconName: 'FileText'
  },
  {
    id: 'higher-ed',
    title: 'Guidance and higher education / future path',
    shortTitle: 'Higher Ed & Abroad Track',
    votes: 194,
    percentage: 35.0,
    description: 'Advice regarding MS/PhD admissions, GRE/TOEFL preparation, SOP reviews, and university selection from alumni abroad.',
    actionableProgram: 'Global Admissions Cell & SOP Review Circle',
    iconName: 'GraduationCap'
  },
  {
    id: 'ama-sessions',
    title: '"Ask Me Anything" (AMA) Fireside Circles',
    shortTitle: 'Alumni AMA Circles',
    votes: 115,
    percentage: 20.7,
    description: 'Open interaction panels discussing work-life balance, transitioning across fields, startup culture, and early career hurdles.',
    actionableProgram: 'Bi-weekly AMA Webinars & Interactive Q&A Forums',
    iconName: 'MessageSquare'
  },
  {
    id: 'specialized-tracks',
    title: 'Specialized Niche Guidance (Roadmaps, Govt Exams, Entrance)',
    shortTitle: 'Specialized Career Tracks',
    votes: 15,
    percentage: 2.7,
    description: 'Targeted support for government service exams, technical roadmaps, time management, and competitive entrance preparation.',
    actionableProgram: 'Interest-Based Micro-Groups & Special Study Circles',
    iconName: 'Target'
  }
];

export const CHIEF_GUESTS: ChiefGuest[] = [
  {
    id: 'guest-1',
    name: 'Dr. Rajesh Sundaram',
    title: 'Senior Principal Engineer',
    organization: 'Google Research (IRTT Alumnus)',
    batch: 'Class of 2012',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    bio: 'Distinguished alumnus with 14+ years in scalable computing systems. Lead contributor to distributed software frameworks.',
    keynoteTopic: 'Bridging Classroom Foundations with Next-Gen Industry Realities'
  },
  {
    id: 'guest-2',
    name: 'Ananya Sharma',
    title: 'Director of Product',
    organization: 'FinTech Global (IRTT Alumna)',
    batch: 'Class of 2015',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Pioneered core payment rails serving 40M+ users. Passionate advocate for youth mentorship and diversity in tech.',
    keynoteTopic: 'Navigating Career Pivots and Building Unshakeable Professional Confidence'
  },
  {
    id: 'guest-3',
    name: 'Prof. K. V. Ramanathan',
    title: 'Principal & Faculty Patron',
    organization: 'Government College of Engineering, Erode',
    batch: 'Faculty Advisor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Veteran academic leader dedicated to fostering strong alumni-student relationships and experiential learning.',
    keynoteTopic: 'Inaugural Address & The Vision of Bridge Club 2026'
  }
];

export const MENTORS_LIST: Mentor[] = [
  {
    id: 'mentor-1',
    name: 'Vikram Sethi',
    role: 'Senior Staff Engineer',
    company: 'Microsoft (IRTT Alumnus)',
    batch: '2016',
    degree: 'B.E. Computer Science, GCE Erode',
    location: 'Bengaluru / Hybrid',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Passionate about system architecture and cloud computing. Has conducted 80+ mock interviews for students.',
    expertise: ['1:1 Mock Interviews', 'System Design', 'Job Referrals', 'Career Direction'],
    slotsAvailable: 4,
    featured: true,
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'mentor-2',
    name: 'Priya Nambiar',
    role: 'Product Manager II',
    company: 'Amazon (IRTT Alumna)',
    batch: '2018',
    degree: 'B.E. ECE, GCE Erode',
    location: 'Hyderabad / Online',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Help engineering students pivot to Product Management, master product teardowns, and refine PM resumes.',
    expertise: ['Resume Rebuilding', 'Career Direction', 'AMA Circles', 'Product Case Studies'],
    slotsAvailable: 3,
    featured: true,
    linkedin: 'https://linkedin.com'
  },
  {
    id: 'mentor-3',
    name: 'Arjun Mehta',
    role: 'Research Scientist',
    company: 'Meta (IRTT Alumnus)',
    batch: '2019',
    degree: 'B.E. IT, GCE Erode',
    location: 'San Francisco, USA',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    bio: 'Guided 25+ students into top US/European MS/PhD programs. Expert in Statement of Purpose (SOP) crafting.',
    expertise: ['Higher Education', 'SOP Review', 'Research Papers', 'Career Direction'],
    slotsAvailable: 2,
    featured: true,
    linkedin: 'https://linkedin.com'
  }
];

export const INAUGURATION_DETAILS = {
  clubName: 'THE Bridge Club',
  tagline: 'Students · Staff · Alumni',
  eventDate: 'Monday, September 28, 2026',
  time: '9:30 AM – 12:30 PM',
  venue: 'AUDITORIUM, Government College of Engineering - Erode',
  expectedAttendees: '600+ Students, Alumni Mentors & Faculty',
  surveyResponseCount: 555,
  contactEmail: 'bridgeclub@gceerode.ac.in',
  socials: {
    linkedin: 'https://linkedin.com/company/bridge-club-gce-erode',
    instagram: 'https://instagram.com/bridgeclub_gceerode',
    twitter: 'https://twitter.com/bridgeclub_gce'
  }
};
