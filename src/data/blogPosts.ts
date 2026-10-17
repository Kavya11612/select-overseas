export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  sourceUrl: string;
  sections: BlogSection[];
};

/** Content aligned with selectoverseaseducation.com/blog */
export const blogPosts: BlogPost[] = [
  {
    slug: 'new-zealand-aewv',
    title: 'Your Pathway to New Zealand Accredited Employer Work Visa (AEWV)',
    date: 'Feb 10, 2026',
    category: 'Skilled Migration',
    excerpt:
      'Learn how the New Zealand Accredited Employer Work Visa (AEWV) works — job offer requirements, sectors, dependents, and how Select Overseas supports your application from Hyderabad.',
    sourceUrl: 'https://selectoverseaseducation.com/new-zealand-work-visa-consultancy-in-hyd/',
    sections: [
      {
        paragraphs: [
          'New Zealand is one of the most preferred destinations for professionals looking to build a stable career abroad. Known for its high quality of life, strong worker protections, and growing job market, the country offers excellent opportunities for skilled and semi-skilled workers.',
          'One of the most reliable ways to enter the New Zealand job market is through the Accredited Employer Work Visa (AEWV) — a pathway designed to connect genuine employers with international talent.',
        ],
      },
      {
        heading: 'What is the AEWV?',
        paragraphs: [
          'The AEWV allows foreign nationals to live and work in New Zealand for an employer officially accredited by the New Zealand government. Applicants must have a confirmed job offer from an accredited employer before applying.',
        ],
        bullets: [
          'Process time: around 90 days',
          'Dependents allowed: Yes',
          'Visa validity: up to 5 years',
          'IELTS not required in many cases',
          'Job offer from an accredited employer is mandatory',
        ],
      },
      {
        heading: 'Sectors & how Select helps',
        paragraphs: [
          'Opportunities span IT, construction, warehouse and labour roles. Select Overseas Education supports profile evaluation, documentation, visa filing and end-to-end guidance so you avoid common delays and rejections.',
        ],
      },
    ],
  },
  {
    slug: 'uk-study-visa-requirements-2026',
    title: 'UK Study Visa Requirements 2026: Updated Checklist for International Students',
    date: 'Feb 2, 2026',
    category: 'Study Abroad',
    excerpt:
      'A clear 2026 checklist for the UK Student Route — CAS, funds, English tests, TB, IHS, biometrics — plus how Select Overseas guides Hyderabad students.',
    sourceUrl: 'https://selectoverseaseducation.com/uk-study-visa-consultancy-in-hyd/',
    sections: [
      {
        paragraphs: [
          'Planning to study in the UK in 2026? With evolving immigration policies and stricter documentation checks, understanding UK Study Visa requirements is crucial. Being well-prepared can significantly improve your visa success rate.',
          'At Select Overseas Education, we guide students through every step of the UK study visa process with the latest updates and expert support.',
        ],
      },
      {
        heading: 'Key documents checklist',
        paragraphs: ['Your application typically needs:'],
        bullets: [
          'Confirmation of Acceptance for Studies (CAS)',
          'Valid passport for your full stay',
          'Proof of funds (tuition + living costs, held 28 consecutive days)',
          'English proficiency (IELTS / TOEFL / PTE — as required)',
          'Academic transcripts and certificates',
          'TB test certificate (where applicable)',
          'Immigration Health Surcharge (IHS) payment',
          'Online application, fee payment and biometrics',
        ],
      },
      {
        heading: '2026 updates to watch',
        paragraphs: [
          'Expect increased focus on financial credibility, stricter verification of academic progression, clearer dependant rules, and continued Graduate Route options for eligible students. Select Overseas helps with university shortlisting, CAS/finance guidance and mock interviews.',
        ],
      },
    ],
  },
  {
    slug: 'hyderabad-students-choosing-europe',
    title: 'Why More Hyderabad Students Are Choosing Europe Over Other Countries',
    date: 'Jan 21, 2026',
    category: 'Study Abroad',
    excerpt:
      'Affordable tuition, English-taught programs, strong visa processes and post-study work — why Europe is becoming a first choice for Hyderabad families.',
    sourceUrl: 'https://selectoverseaseducation.com/europe-study-visa-consultancy-in-hyderabad/',
    sections: [
      {
        paragraphs: [
          'While the USA, UK, Canada and Australia remain popular, Europe is rapidly emerging as a top choice for Hyderabad students — from affordable tuition to strong post-study opportunities.',
        ],
      },
      {
        heading: 'Why Europe stands out',
        paragraphs: [],
        bullets: [
          'Low or zero tuition at many public universities',
          'Lower living costs in countries like Germany, Poland, Hungary and the Baltics',
          'Thousands of English-taught programs in engineering, AI, business and more',
          'Transparent visa processes and competitive approval rates',
          '1–3 year post-study stay-back options in many countries',
          'Easy travel across Europe for culture and networking',
        ],
      },
      {
        heading: 'How Select Overseas helps',
        paragraphs: [
          'Select Overseas Education supports country and course selection, university shortlisting, applications, visa compliance and end-to-end counselling from admission to departure — so Europe becomes a confident primary choice, not a last resort.',
        ],
      },
    ],
  },
  {
    slug: 'canada-study-visa-mistakes',
    title: 'Avoid These Common Mistakes: Advice from Canada Study Visa Consultants in Hyderabad',
    date: 'Jan 16, 2026',
    category: 'Study Abroad',
    excerpt:
      'Incomplete files, wrong courses, weak SOPs and outdated rules cause most refusals — here’s how Select Overseas helps you avoid them.',
    sourceUrl: 'https://selectoverseaseducation.com/canada-study-visa-consultancy-in-hyderabad/',
    sections: [
      {
        paragraphs: [
          'Most Canada study visa refusals happen not because students are unqualified, but because the process is handled incorrectly. Guidance from an experienced consultancy in Hyderabad matters from day one.',
        ],
      },
      {
        heading: 'Mistakes to avoid',
        paragraphs: [],
        bullets: [
          'Submitting incomplete or poorly arranged documents',
          'Choosing a course that doesn’t match your academic path',
          'Copied or unclear Statements of Purpose',
          'Weak financial planning or unexplained funding sources',
          'Relying on outdated visa rules and SDS requirements',
          'DIY applications without professional checks',
        ],
      },
      {
        heading: 'Why students choose Select Overseas',
        paragraphs: [
          'Select Overseas focuses on profile-based counselling — university selection, SOP drafting, end-to-end documentation, GIC/financial guidance and application tracking — with transparent, honest assessments and updated Canadian immigration knowledge.',
        ],
      },
    ],
  },
  {
    slug: 'why-select-overseas-trusted',
    title:
      'Why Select Overseas Education is the Trusted Consultancy for Studying in the UK, USA, Australia, and Ireland',
    date: 'Dec 18, 2025',
    category: 'About Select',
    excerpt:
      'Transparent counselling, strong university partnerships and high visa success — why families in Hyderabad trust Select Overseas for major study destinations.',
    sourceUrl: 'https://selectoverseaseducation.com/best-work-visa-consultancy-in-hyd/',
    sections: [
      {
        paragraphs: [
          'Select Overseas Education has built trust in Madhapur, Hyderabad by putting students first — ethical advice, clear timelines and support from counselling through pre-departure.',
          'Whether your goal is the UK, USA, Australia or Ireland, our advisors help with university shortlisting, admissions, scholarships, visa documentation and interview preparation.',
        ],
      },
      {
        heading: 'What you can expect',
        paragraphs: [],
        bullets: [
          'Certified overseas education experts',
          'University partnerships across multiple countries',
          'High visa success with transparent processes',
          'Student-centric guidance — no one-size-fits-all advice',
        ],
      },
    ],
  },
  {
    slug: 'ireland-work-visa-from-hyderabad',
    title: 'Cost, Processing Time & Tips: Applying for Ireland Work Visa from Hyderabad',
    date: 'Dec 11, 2025',
    category: 'Skilled Migration',
    excerpt:
      'A practical overview of Ireland work visa costs, timelines and tips for IT and healthcare professionals applying from Hyderabad with Select Overseas.',
    sourceUrl: 'https://selectoverseaseducation.com/ireland-work-visa-consultancy-in-hyd/',
    sections: [
      {
        paragraphs: [
          'Ireland continues to attract skilled professionals from Hyderabad — especially in IT and healthcare — through employment permits and related work visas.',
          'Understanding typical costs, processing times and documentation early helps you plan a smoother move. Select Overseas guides Critical Skills and other permit pathways with job-offer readiness and full filing support.',
        ],
      },
      {
        heading: 'Practical tips',
        paragraphs: [],
        bullets: [
          'Confirm the right permit type for your role',
          'Prepare a complete, consistent document pack',
          'Plan finances for fees, travel and settling costs',
          'Use expert review before submission to avoid delays',
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
