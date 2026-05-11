export type Podcast = {
  slug: string;
  level: string;
  tag: string;
  duration: string;
  title: string;
  description: string;
  image: string;
  series?: string;
  episode?: number;
  views: number;
  rating: number;
};

export const podcasts: Podcast[] = [
  // Cold Calling Masterclass — 3 eps
  { slug: "cold-calling-anatomy",    level: "Basic",        tag: "Cold Calling",   duration: "18m", title: "The Perfect Recruiter Cold Call Script",               description: "Break down the anatomy of a cold call that books meetings every time. Learn the opening, pitch, and close.", image: "/thumb-1.png",       series: "Cold Calling Masterclass", episode: 1, views: 342, rating: 4.7 },
  { slug: "cold-calling-objections", level: "Intermediate", tag: "Cold Calling",   duration: "22m", title: "Handling Cold Call Objections Like a Pro",              description: "Turn 'not interested' into a booked meeting. Master the objection handling framework top billers use daily.", image: "/thumb-2.png",       series: "Cold Calling Masterclass", episode: 2, views: 218, rating: 4.5 },
  { slug: "cold-calling-follow-up",  level: "Intermediate", tag: "Cold Calling",   duration: "15m", title: "The Follow-Up Formula After Cold Calls",               description: "Most deals are won in the follow-up. Learn the cadence and messaging that keeps you top of mind.", image: "/thumb-1%20(1).png", series: "Cold Calling Masterclass", episode: 3, views: 187, rating: 4.3 },

  // Negotiation Playbook — 4 eps
  { slug: "salary-negotiation-framework", level: "Intermediate", tag: "Negotiation", duration: "22m", title: "How to Handle Salary Negotiation Without Losing the Deal", description: "Real negotiation frameworks used by top billers in the UK market. Stop leaving money on the table.",               image: "/thumb-2%20(1).png", series: "Negotiation Playbook", episode: 1, views: 289, rating: 4.6 },
  { slug: "fee-negotiation-secrets",      level: "Advanced",     tag: "Negotiation", duration: "26m", title: "Fee Negotiation: Getting What You're Worth",               description: "How to defend your margin under pressure and justify your fee with confidence and data.",                       image: "/thumb-1.png",       series: "Negotiation Playbook", episode: 2, views: 156, rating: 4.4 },
  { slug: "offer-management-close",       level: "Intermediate", tag: "Negotiation", duration: "19m", title: "Offer Management: Getting to Yes",                         description: "Navigate the critical offer stage — managing expectations, counter offers, and closing confidently.",          image: "/thumb-2.png",       series: "Negotiation Playbook", episode: 3, views: 201, rating: 4.5 },
  { slug: "negotiation-mindset",          level: "Basic",        tag: "Negotiation", duration: "17m", title: "The Negotiation Mindset Shift",                            description: "Why most recruiters lose before the negotiation starts — and the mindset fix that changes everything.",       image: "/thumb-1%20(1).png", series: "Negotiation Playbook", episode: 4, views: 143, rating: 4.2 },

  // Leadership Blueprint — 4 eps
  { slug: "leader-mindset-shift",          level: "Intermediate", tag: "Leadership", duration: "25m", title: "The Mindset Shift from Biller to Leader",        description: "What changes when you step into a leadership role and how to make the transition without losing your billing.", image: "/thumb-2%20(1).png", series: "Leadership Blueprint", episode: 1, views: 178, rating: 4.6 },
  { slug: "building-high-performance-team",level: "Advanced",     tag: "Leadership", duration: "28m", title: "Building a High-Performance Recruitment Team",    description: "Systems, culture, and coaching frameworks to build a team that hits target consistently.",                    image: "/thumb-1.png",       series: "Leadership Blueprint", episode: 2, views: 134, rating: 4.7 },
  { slug: "delegation-systems-leaders",    level: "Advanced",     tag: "Leadership", duration: "23m", title: "Delegation Systems That Actually Work",           description: "Stop being the bottleneck. Learn how to delegate effectively without sacrificing quality or control.",          image: "/thumb-2.png",       series: "Leadership Blueprint", episode: 3, views: 97,  rating: 4.3 },
  { slug: "billing-desk-without-you",      level: "Advanced",     tag: "Leadership", duration: "30m", title: "Building a Billing Desk That Runs Without You",   description: "Systems and delegation strategies for senior consultants stepping into leadership roles.",                     image: "/thumb-1%20(1).png", series: "Leadership Blueprint", episode: 4, views: 89,  rating: 4.5 },

  // Standalone
  { slug: "linkedin-sourcing-2025",      level: "Basic",        tag: "Sourcing",       duration: "15m", title: "LinkedIn Sourcing Strategies That Still Work in 2025", description: "Cut through the noise with search and outreach tactics that get responses from passive candidates.",                      image: "/thumb-2%20(1).png", views: 412, rating: 4.8 },
  { slug: "counter-offer-playbook",      level: "Intermediate", tag: "Candidate Mgmt", duration: "20m", title: "Managing Counter Offers: A Recruiter's Playbook",       description: "How to prepare candidates before they resign so your placement survives the counter offer.",                              image: "/thumb-1.png",       views: 334, rating: 4.6 },
  { slug: "retained-desk-secrets",       level: "Advanced",     tag: "BD",             duration: "25m", title: "Turning a Cold Client Into a Retained Partner",          description: "Step-by-step on converting contingency relationships into retained agreements that guarantee revenue.",                  image: "/thumb-2.png",       views: 267, rating: 4.7 },
  { slug: "client-relationship-secrets", level: "Basic",        tag: "Client Success", duration: "18m", title: "The Secret to Long-Term Client Relationships",           description: "What separates transactional recruiters from trusted advisors — and how to make the shift.",                          image: "/thumb-1%20(1).png", views: 298, rating: 4.5 },
  { slug: "data-driven-decisions",       level: "Intermediate", tag: "Core Skills",    duration: "21m", title: "Using Data to Make Better Recruitment Decisions",        description: "Which metrics actually matter and how to use them to improve your billings and forecast accuracy.",                   image: "/thumb-2%20(1).png", views: 189, rating: 4.4 },
  { slug: "candidate-experience-edge",   level: "Basic",        tag: "Candidate Mgmt", duration: "16m", title: "Why Candidate Experience Is Your Competitive Edge",      description: "How the way you treat candidates directly impacts your reputation, referrals, and repeat business.",                  image: "/thumb-1.png",       views: 223, rating: 4.3 },
  { slug: "recruiter-mindset-reset",     level: "Basic",        tag: "Core Skills",    duration: "19m", title: "The Recruiter Mindset Reset",                            description: "Break through limiting beliefs and build the mental resilience needed to thrive in high-pressure recruitment.", image: "/thumb-2.png",       views: 356, rating: 4.7 },
];

export function getPodcastBySlug(slug: string): Podcast | undefined {
  return podcasts.find((p) => p.slug === slug);
}

export function getSeriesPodcasts(series: string): Podcast[] {
  return podcasts.filter((p) => p.series === series).sort((a, b) => (a.episode ?? 0) - (b.episode ?? 0));
}

export function getRelatedPodcasts(podcast: Podcast, limit = 4): Podcast[] {
  return podcasts
    .filter((p) => p.slug !== podcast.slug && p.tag === podcast.tag)
    .slice(0, limit);
}
