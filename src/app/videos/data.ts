export type Video = {
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

export const videos: Video[] = [
  { slug: "overcome-fear-objections",          level: "Intermediate", tag: "Contract/Freelance", duration: "6m",    title: "How can someone overcome fear in real life from objections", description: "Learn practical techniques to manage fear when facing real-world objections in recruitment and sales environments. Build confidence and resilience through proven strategies.", image: "/thumb-1.png",       series: "Handling Objections", episode: 1, views: 142, rating: 4.5 },
  { slug: "overcoming-objections-candidate",   level: "Intermediate", tag: "Client Success",     duration: "11m",   title: "How to Overcome Objections When Selling a Candidate",        description: "Master the art of responding to client objections during the candidate submission stage. Learn how to position candidates effectively and handle pushback with confidence.", image: "/thumb-2%20(1).png", series: "Handling Objections", episode: 2, views: 98,  rating: 4.2 },
  { slug: "turning-no-into-yes",               level: "Basic",        tag: "Client Success",     duration: "5.06",  title: "Turning No into Yes",                                        description: "Learn how to transform objections and rejections into opportunities by using persuasive communication, active listening, and creative problem-solving techniques.", image: "/thumb-1%20(1).png", series: "Handling Objections", episode: 3, views: 76,  rating: 4.0 },
  { slug: "nihil-id-optio-saep",               level: "Advanced",     tag: "Leadership",         duration: "10m",   title: "Nihil id optio saep",                                        description: "Advanced leadership concepts for senior recruiters looking to elevate their team performance.",                                                                         image: "/thumb-2.png",       series: "Leadership Mastery",  episode: 1, views: 54,  rating: 3.8 },
  { slug: "coaching-developing-recruitment",   level: "Intermediate", tag: "Leadership",         duration: "5.12",  title: "Coaching & Developing Recruitment",                          description: "Unlock the potential of your recruitment team through structured coaching, continuous skill development, and targeted feedback frameworks.",                            image: "/thumb-2%20(1).png", series: "Leadership Mastery",  episode: 2, views: 89,  rating: 4.3 },
  { slug: "effective-communication-leaders",   level: "Intermediate", tag: "Leadership",         duration: "5.21",  title: "Effective Communication for Recruitment Leaders",            description: "Master the art of clear, confident, and strategic communication to lead teams, manage clients, and align stakeholders around hiring goals.",                           image: "/thumb-1.png",       series: "Leadership Mastery",  episode: 3, views: 112, rating: 4.6 },
  { slug: "duel-role-leadership-billing",      level: "Basic",        tag: "Leadership",         duration: "6.21",  title: "The Duel Role- Balancing Leadership & Billing",              description: "Learn the challenges and strategies of managing both leadership responsibilities and personal billing targets simultaneously.",                                          image: "/thumb-2.png",       series: "Leadership Mastery",  episode: 4, views: 67,  rating: 4.1 },
  { slug: "power-of-role-plays",               level: "Intermediate", tag: "Leadership",         duration: "6.52",  title: "The Power of Role Plays- Developing a Winning Team",         description: "Learn how structured role plays can strengthen recruiter skills, boost confidence, and prepare teams for real-world client and candidate interactions.",                image: "/thumb-1%20(1).png", series: "Leadership Mastery",  episode: 5, views: 45,  rating: 3.9 },
  { slug: "shift-from-billing-to-leader",      level: "Intermediate", tag: "Leadership",         duration: "6.52",  title: "The Shift from Billing to Leader",                           description: "Explore how recruiters transition from individual billing success to becoming effective team leaders and the mindset changes required.",                               image: "/thumb-2%20(1).png", series: "Leadership Mastery",  episode: 6, views: 88,  rating: 4.4 },
  { slug: "test-title-1",                      level: "Intermediate", tag: "Permanent",          duration: "10m",   title: "Test Title1",                                                description: "An introduction to permanent recruitment strategies and best practices for placing long-term candidates.",                                                              image: "/thumb-1%20(1).png", views: 33,  rating: 3.5 },
  { slug: "handling-difficult-clients",        level: "Basic",        tag: "Client Success",     duration: "4.52",  title: "Handling Difficult Clients",                                 description: "Learn how to navigate challenging client interactions with professionalism and confidence. This includes setting boundaries and managing expectations.",                image: "/thumb-1.png",       views: 201, rating: 4.7 },
  { slug: "account-management-recruiters",     level: "Basic",        tag: "Client Success",     duration: "6.35",  title: "Account Management For Recruiters",                          description: "Understand how effective account management helps recruiters build long-term client relationships, maintain consistent communication, and grow accounts sustainably.",    image: "/thumb-2.png",       views: 156, rating: 4.3 },
  { slug: "time-management-productivity",      level: "Basic",        tag: "Core Skills",        duration: "6.57",  title: "Time Management & Productivity for Recruiters",              description: "Master essential time management techniques and productivity hacks tailored for recruiters to maximise output without burning out.",                                    image: "/thumb-1.png",       views: 189, rating: 4.5 },
  { slug: "why-data-matters",                  level: "Basic",        tag: "Core Skills",        duration: "5.11",  title: "Why Data Matters",                                           description: "Understand how leveraging recruitment data can improve decision-making, track performance, and identify trends before your competition does.",                         image: "/thumb-2.png",       views: 97,  rating: 4.0 },
  { slug: "data-secret-weapon",                level: "Basic",        tag: "Core Skills",        duration: "5.33",  title: "Why Data is Your Secret Weapon",                             description: "Discover how data empowers recruiters to gain a competitive edge by enhancing decision-making and improving forecast accuracy.",                                       image: "/thumb-1%20(1).png", views: 74,  rating: 3.9 },
  { slug: "winning-developing-clients",        level: "Advanced",     tag: "BD",                 duration: "12m",   title: "Winning & Developing Clients",                               description: "Proven techniques to win new clients and grow existing accounts sustainably through strategic business development.",                                                   image: "/thumb-2%20(1).png", views: 223, rating: 4.8 },
  { slug: "data-driven-recruitment",           level: "Intermediate", tag: "Sourcing",           duration: "8m",    title: "Data Driven Recruitment & Market Intelligence",              description: "Use data and market insight to find and attract the right candidates faster while reducing time-to-fill.",                                                             image: "/thumb-1.png",       views: 134, rating: 4.4 },
  { slug: "building-recruitment-desk",         level: "Advanced",     tag: "Client Success",     duration: "15m",   title: "Building a Successful Recruitment Desk",                     description: "Learn how to build a high-performing Recruitment Desk that drives consistent hiring success and revenue growth.",                                                       image: "/thumb-2.png",       views: 178, rating: 4.6 },
];

export function getVideoBySlug(slug: string): Video | undefined {
  return videos.find((v) => v.slug === slug);
}

export function getSeriesVideos(series: string): Video[] {
  return videos.filter((v) => v.series === series).sort((a, b) => (a.episode ?? 0) - (b.episode ?? 0));
}

export function getRelatedVideos(video: Video, limit = 4): Video[] {
  return videos
    .filter((v) => v.slug !== video.slug && v.tag === video.tag)
    .slice(0, limit);
}
