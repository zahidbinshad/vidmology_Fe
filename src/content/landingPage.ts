/**
 * Central copy and structured data for the marketing landing page.
 * Aligned to the design reference: nav, headings, grids, and CTAs.
 */

/** Learn nav mega-menu: two columns; default white, mint tint on hover */
export const learnDropdownPanels = [
  {
    title: "Videos",
    href: "/videos",
    descriptionLines: [
      "Learn with 12 categories of bite videos and podcast",
    ] as const,
  },
  {
    title: "Podcast",
    href: "/podcasts",
    /** Two display lines under the Podcast title */
    descriptionLines: [
      "Your 24/7 AI powered coach to help you with quiz,",
      "role play & more.",
    ] as const,
  },
] as const;

export const mainNavLinks = [
  { label: "Ai Coach", href: "#features" },
  { label: "White label", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
] as const;

export const hero = {
  badge: "Built from 35+ years of real recruitment expertise",
  /** H1: only `performance,` uses accent green in the UI */
  titleBefore: "If training doesn't improve ",
  titleHighlight: "performance,",
  titleAfter: " it's a waste of time.",
  sublines: [
    "Fast learning. Deep skill-building. Measurable performance.",
    "AI-powered development that drives real recruiter performance",
  ],
  cta: "Sign up for Free →",
} as const;

/** "Turn your data…" feature band */
export const dataLearningSectionMeta = {
  title: "Your complete recruiter learning stack.",
  subtitle: "Multiple ways to learn. One system to improve performance.",
} as const;

export const dataLearningCards = [
  {
    icon: "video",
    title: "Bite-sized video training",
    description: "150+ structured videos across every area of recruitment.",
    bullets: [
      "Real situations.",
      "Real conversations.",
      "Real techniques that improve performance.",
    ],
  },
  {
    icon: "headphones",
    title: "Podcast (Audio Learning)",
    description:
      "Structured audio learning designed for recruiters who learn best through conversation and repetition.",
    bullets: [
      "Practical recruitment training.",
      "No filler.",
      "No generic business content.",
    ],
  },
  {
    icon: "sparkle",
    title: "AI Coaching",
    description:
      "Recruiter-first AI coaching designed to improve call confidence through practice and feedback.",
    bullets: [
      "Real role-plays.",
      "Instant feedback.",
      "No generic coaching.",
    ],
  },
] as const;

const t1 = "/thumb-1.png";
const t2 = "/thumb-2.png";
const t3 = "/thumb-1%20(1).png";
const t4 = "/thumb-2%20(1).png";

export const latestOfferings = [
  { level: "Advance",      tag: "Client Success",  duration: "10 Min", lessons: 8,  title: "Building a successful Recruitment Desk.",          description: "Learn how to build a high-performing Recruitment Desk that drives hiring success.",          image: t1 },
  { level: "Beginner",     tag: "Sourcing",        duration: "8 Min",  lessons: 6,  title: "Data Driven Recruitment & Market Intelligence.",    description: "Use data and market insight to find and attract the right candidates faster.",             image: t2 },
  { level: "Intermediate", tag: "BD",              duration: "12 Min", lessons: 10, title: "Winning & Developing Clients.",                    description: "Proven techniques to win new clients and grow existing accounts sustainably.",               image: t3 },
  { level: "Advance",      tag: "Leadership",      duration: "15 Min", lessons: 12, title: "Managing & Motivating a Recruitment Team.",        description: "Build a high-performing team culture with clear accountability and coaching.",               image: t4 },
  { level: "Beginner",     tag: "Candidate Mgmt",  duration: "6 Min",  lessons: 5,  title: "Align Expectations for Successful Hires.",         description: "Set clear expectations with candidates and clients to improve placement retention.",          image: t1 },
  { level: "Intermediate", tag: "Billing",         duration: "10 Min", lessons: 9,  title: "Mastering the Recruitment Sales Cycle.",           description: "From first call to placement — a complete guide to running a full billing desk.",            image: t2 },
] as const;

export const latestPodcasts = [
  { level: "Beginner",     tag: "Cold Calling",   duration: "18 Min", lessons: 1, title: "The Perfect Recruiter Cold Call Script.",                description: "Break down the anatomy of a cold call that books meetings every time.",                         image: t3 },
  { level: "Intermediate", tag: "Negotiation",    duration: "22 Min", lessons: 1, title: "How to Handle Salary Negotiation Without Losing the Deal.", description: "Real negotiation frameworks used by top billers in the UK market.",                            image: t4 },
  { level: "Advance",      tag: "BD",             duration: "25 Min", lessons: 1, title: "Turning a Cold Client Into a Retained Partner.",           description: "Step-by-step on converting contingency relationships into retained agreements.",                 image: t1 },
  { level: "Beginner",     tag: "Sourcing",       duration: "15 Min", lessons: 1, title: "LinkedIn Sourcing Strategies That Still Work in 2025.",    description: "Cut through the noise with search and outreach tactics that get responses.",                    image: t2 },
  { level: "Intermediate", tag: "Candidate Mgmt", duration: "20 Min", lessons: 1, title: "Managing Counter Offers: A Recruiter's Playbook.",         description: "How to prepare candidates before they resign and protect your placement.",                      image: t3 },
  { level: "Advance",      tag: "Leadership",     duration: "28 Min", lessons: 1, title: "Building a Billing Desk That Runs Without You.",           description: "Systems and delegation strategies for senior consultants moving into leadership.",               image: t4 },
] as const;

export const recruitmentCoach = {
  titleLine1: "Your personal",
  titleLine2: "recruitment coach",
  subtitle: "The   Elden+ BOT",
  body: "Elden represents decades of recruitment experience — from trainee to CEO. The \"+\" reflects the collective knowledge of top performers, mentors, and industry leaders - now built into an AI coach",
  tags: ["Sales", "Negotiation", "Sourcing", "Communication"],
  image: "https://www.figma.com/api/mcp/asset/7edc8740-9f1d-461c-a7ff-e35ed48f61d2",
  imageOverlay: "https://www.figma.com/api/mcp/asset/a768bf55-15d2-469d-85b0-1622b676eec9",
};

export const aiCoachSectionMeta = {
  title: "Vidmology AI Coach",
  subtitle: "Your 24/7 AI coach trained on 35 years of recruitment expertise.\nTrains you, role plays with you, scores your performance, and makes you better every day.",
  cta: "Start Coaching",
} as const;

export const aiCoachFeatures = [
  {
    icon: "chat",
    title: "Live Role Play Training",
    description: "Practice tough scenarios: salary negotiations, objection handling, difficult candidates. AI responds like a real person. Practice unlimited times until you master it.",
  },
  {
    icon: "quiz",
    title: "Adaptive Quizzes",
    description: "AI-generated quizzes that adapt to your skill level. Test your knowledge, identify gaps, track mastery across all recruitment topics.",
  },
  {
    icon: "phone",
    title: "Call Scoring & Analysis",
    description: "AI listens to your actual calls (or role plays), scores your technique, identifies what worked and what didn't. Like having a manager on every conversation.",
  },
  {
    icon: "chart",
    title: "Performance Assessment",
    description: "Detailed scorecards on rapport building, questioning technique, objection handling, and closing. Know exactly what to improve.",
  },
  {
    icon: "target",
    title: "Personalized Suggestions",
    description: "AI analyzes patterns across all your interactions and gives you specific, actionable suggestions on what to work on next.",
  },
  {
    icon: "clock",
    title: "Available 24/7",
    description: "No scheduling. No waiting for manager time. Get expert coaching, practice role plays, and instant feedback whenever you need it.",
  },
] as const;

export const levelUpCta = {
  title: "Level up your skills in just 20 minutes a day",
  subtitle: "That's our sweet spot — enough time to practice, get feedback, and actually improve.\nSet your goals and let The Elden Plus guide your learning journey.",
  filters: ["Career Goals", "Sales Goals", "Sourcing Goals"],
  goals: {
    "Career Goals": [
      "Hit your targets consistently",
      "Become a top biller",
      "Get promoted to senior consultant",
      "Build a strong personal brand",
      "Develop leadership skills",
    ],
    "Sales Goals": [
      "Master objection handling",
      "Improve call-to-meeting conversion",
      "Win more retainers",
      "Negotiate fees with confidence",
      "Build a consistent BD pipeline",
    ],
    "Sourcing Goals": [
      "Find passive candidates faster",
      "Write compelling outreach messages",
      "Master Boolean search",
      "Build talent pipelines",
      "Improve candidate response rates",
    ],
  },
};

export const howItWorksSectionMeta = {
  subtitle: "Turn everyday situations into practice sessions—then get feedback you can apply immediately.",
} as const;

export const howItWorks = [
  {
    icon: "comment",
    title: "Start a conversation",
    body: "Ask questions, request roleplay scenarios, or get feedback on real situations.",
  },
  {
    icon: "user",
    title: "Practice with voice",
    body: "Roleplay tough conversations with AI that responds like a real candidate or client.",
  },
  {
    icon: "phone",
    title: "Get scored & improve",
    body: "Receive detailed feedback and track your progress over time.",
  },
] as const;

export const practiceScenariosSectionMeta = {
  title: "Practice real scenarios without real risk.",
  subtitle: "Roleplay tough conversations with AI that responds like a real candidate or client.",
} as const;

export const practiceScenarios = [
  {
    category: "POPULAR • NEGOTIATION",
    difficulty: "Medium" as const,
    title: "Salary Negotiation",
    description: "Candidate wants 20% more than the budget",
    duration: "5 - 10 Minute",
  },
  {
    category: "POPULAR • SALES",
    difficulty: "Hard" as const,
    title: "Client Fee Pushback",
    description: "Client says your fees are too high",
    duration: "5 - 10 Minute",
  },
  {
    category: "RETENTION",
    difficulty: "Hard" as const,
    title: "Handling a Counter Offer",
    description: "Candidate's current employer made a counter",
    duration: "5 - 10 Minute",
  },
  {
    category: "POPULAR • BUSINESS DEV",
    difficulty: "Medium" as const,
    title: "First Client Cold Call",
    description: "Introduce your services to a new prospect",
    duration: "5 - 10 Minute",
  },
  {
    category: "COMMUNICATION",
    difficulty: "Medium" as const,
    title: "Candidate Rejection",
    description: "Deliver the news that they didn't get the job.",
    duration: "5 - 10 Minute",
  },
  {
    category: "CLOSING",
    difficulty: "Medium" as const,
    title: "Closing the Offer",
    description: "Candidate wants 20% more than the budget",
    duration: "5 - 10 Minute",
  },
] as const;

export const builtDifferentlySectionMeta = {
  title: "Built Differently",
  subtitle: "Vidmology combines industry-leading recruitment expertise with advanced AI technology built by leading AI specialists. The result is a platform that delivers both world-class recruitment knowledge and the most advanced AI capability available today.",
} as const;

export const builtDifferentlyCards = [
  {
    title: "The Elden Plus AI",
    bodyParagraphs: [
      "Built on 35+ years of real recruitment experience. Gary Elden began as a trainee recruiter and progressed to CEO of a FTSE 250 recruitment plc.",
      '"Elden Plus" represents not just one career, but insight gathered from colleagues, leaders and high-performing recruiters developed over decades.',
    ],
    bullets: [] as string[],
  },
  {
    title: "Built by AI veterans",
    bodyParagraphs: [
      "The underlying AI technology is developed by specialists with deep experience across enterprise AI and advanced machine learning systems.",
    ],
    bullets: [
      "PhDs in Artificial Intelligence",
      "Leading global technology companies",
      "10+ years building enterprise AI",
    ],
  },
  {
    title: "Proprietary technology",
    bodyParagraphs: [
      "Intelligent multi-modal system that combines multiple AI models for accuracy and reliability.",
    ],
    bullets: [
      "Hot-swappable AI models",
      "Always benefit from latest advancements",
      "True multi-modal capability",
    ],
  },
];

export const builtToStayAhead = {
  title: "Built to stay ahead",
  subtitle: "AI is evolving rapidly. Vidmology is designed to evolve with it — ensuring your team always has access to the most advanced recruitment coaching and development tools available.",
  tagline: "This is not a static training platform.",
  taglineBold: "It is a continuously improving performance system.",
} as const;

export const manageWithClarity = {
  title: "Manage with clarity, not guesswork",
  subtitle: "Managing recruitment teams is challenging. When performance is unclear, decisions often become subjective or emotional. After years of leading recruitment businesses, it became clear that having real visibility across a team changes how you manage completely.",
  taglineBold: "Vidmology gives managers that clarity in one place.",
  left: {
    tag: "Managers can see",
    icon: "eye",
    items: [
      "What each recruiter is watching and learning",
      "What they're listening to",
      "Quiz results and knowledge gaps",
      "Role play performance and scores",
      "Call scoring and communication feedback",
      "Where individuals are improving",
      "Where support is needed",
    ],
  },
  right: {
    tag: "The Result",
    icon: "briefcase",
    items: [
      "Better decision making",
      "Clear expectations",
      "More consistent management",
      "Improved results",
      "Accountability without friction",
      "Clarity for employees",
      "Where support is needed",
    ],
  },
} as const;

export const whiteLabelSection = {
  badge: "White Label",
  title: "Want This Under Your Brand?",
  subtitle: "White Label solution available — fully branded with your company identity. Give your team world-class recruitment training under your own banner.",
  cta: "Explore White Label",
  features: [
    {
      title: "Complete Branding Control",
      description: "Your logo, your colors, your domain. The platform becomes an extension of your company identity.",
    },
    {
      title: "SSO & Security",
      description: "Single sign-on integration with your existing systems. Enterprise-grade security and compliance.",
    },
    {
      title: "Full Analytics Dashboard",
      description: "Track usage, performance improvements, and ROI. Detailed reporting for management.",
    },
    {
      title: "API Access",
      description: "Integrate with your existing LMS, HR systems, and workflows. Full API documentation included.",
    },
    {
      title: "Dedicated Support",
      description: "White glove onboarding and ongoing support. Your own customer success manager.",
    },
    {
      title: "Custom Content",
      description: "Add your own training materials alongside Vidmology content. Create bespoke learning paths.",
    },
  ],
} as const;

/** "Team power" link columns (reference) */
export const teamPowerColumns = [
  {
    title: "Company",
    links: ["About us", "Careers", "Press", "Partners", "Contact sales"],
  },
  {
    title: "Resources",
    links: ["Blog", "Events", "Help center", "API docs", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies", "DPA"],
  },
] as const;

export const faqItems = [
  {
    question: "Do you support podcast learning as well as video?",
    answer: "Yes. Key topics can be available in podcast format so learning continues during commutes or between calls.",
  },
  {
    question: "Is role-play scored?",
    answer: "Yes. Every role-play session is scored by AI across multiple dimensions including tone, objection handling, and closing technique. You receive detailed feedback immediately after each session.",
  },
  {
    question: "Is Coach a human?",
    answer: "No. The Elden+ Coach is an AI trained on decades of recruitment expertise. It is available 24/7, never judges, and gives consistent feedback every time.",
  },
  {
    question: "Can managers track progress and readiness?",
    answer: "Yes. The manager dashboard shows individual and team learning activity, quiz scores, role-play performance, and skill progression — all in one place.",
  },
  {
    question: "Can we use our internal content and brand the platform?",
    answer: "Yes. The White Label option allows full branding with your logo, colors, and domain. You can also upload your own training content alongside Vidmology's library.",
  },
] as const;

export const finalCta = {
  badge: "Upgrade anytime for full access.",
  title: "Ready to make\nyour team more efficient & faster?",
  subtitle: "Explore the platform with a guided taster.",
  benefits: [
    "Preview videos & podcasts (1 minute each)",
    "Ask text questions",
    "Try quizzes",
    "5 minutes voice role play",
  ],
  cta: "Start Free Trial",
} as const;
