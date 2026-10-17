export type ServicePage = {
  slug: string;
  title: string;
  category: 'Services' | 'Study Abroad' | 'Skilled Migration';
  eyebrow: string;
  summary: string;
  points: string[];
  cta: string;
};

export const servicePages: ServicePage[] = [
  // Services
  {
    slug: 'uk-visitor-visa',
    title: 'UK Visitor Visa',
    category: 'Services',
    eyebrow: 'Tourist & short-stay',
    summary:
      'United kingdom is very famous and visited by many all year round for various purposes like study, work, immigration, etc. While some are long term visas others are short term visas.',
    points: [
      'Visitor / tourist visa for short UK trips',
      'Financial resources for stay in the UK',
      'Visa centre appointment with document checklist',
      'No work rights while on a visitor visa',
    ],
    cta: 'Talk to a UK visitor visa advisor',
  },
  {
    slug: 'uk-health-care-professionals-visa',
    title: 'UK Health care professionals Visa',
    category: 'Services',
    eyebrow: 'NHS & clinical careers',
    summary:
      'The United Kingdom’s healthcare sector offers tremendous opportunities for skilled professionals from around the world. Our UK Healthcare Work Visa Consultancy assists healthcare professionals in securing visas to work in the UK.',
    points: [
      'Visa eligibility assessment',
      'Visa category guidance (Health and Care / Tier 2)',
      'Document preparation and application support',
      'Post-visa relocation guidance',
    ],
    cta: 'Start your UK healthcare visa plan',
  },
  {
    slug: 'uk-it-professionals-visa-consultancy',
    title: 'UK IT professionals visa consultancy',
    category: 'Services',
    eyebrow: 'Tech & digital roles',
    summary:
      'Are you an IT professional looking to work in the United Kingdom? Select Overseas Education specializes in assisting IT professionals with their work visa applications.',
    points: [
      'Visa consultation and eligibility assessment',
      'Application and document preparation',
      'Sponsorship guidance',
      'Ongoing support through to settlement',
    ],
    cta: 'Book IT visa consultation',
  },
  {
    slug: 'student-visa',
    title: 'Student Visa',
    category: 'Services',
    eyebrow: 'Study worldwide',
    summary:
      'A student visa is an endorsement by the immigration authorities on your passport. It indicates that you are allowed to enter and stay to study for a specified period. Apply for student visa at select overseas education.',
    points: [
      'Academic profile assessment',
      'University & course selection',
      'Student visa assistance',
      'Scholarship & education loan guidance',
    ],
    cta: 'Get free student visa counselling',
  },
  {
    slug: 'uk-work-visa',
    title: 'UK Work Visa',
    category: 'Services',
    eyebrow: 'Employment routes',
    summary:
      'The UK is a very popular destination for people wanting to live and work in a new country. However, the UK’s immigration system is complex. We help you navigate points-based work visa options from Hyderabad.',
    points: [
      'Skilled Worker and related pathways',
      'Eligibility assessment',
      'Document preparation and filing',
      'Employer & sponsorship guidance',
    ],
    cta: 'Discuss your UK work visa',
  },
  {
    slug: 'ireland-it-professional-work-visa',
    title: 'Ireland IT professional work visa',
    category: 'Services',
    eyebrow: 'Critical Skills & tech',
    summary:
      'Are you an IT professional dreaming of a career in Ireland? Select Overseas Education specializes in providing expert guidance throughout the Ireland work visa application process.',
    points: [
      'Critical Skills & General Employment Permits',
      'Documentation support',
      'Job and career guidance for IT roles',
      'Family opportunities under immigration rules',
    ],
    cta: 'Explore Ireland IT visas',
  },
  {
    slug: 'ireland-health-care-work-visa',
    title: 'Ireland Health care work visa',
    category: 'Services',
    eyebrow: 'Medical & nursing careers',
    summary:
      'Welcome to Select Overseas Education, Your Gateway to Healthcare Opportunities in Ireland! We specialize in providing expert guidance for healthcare work visas.',
    points: [
      'Career consultation for healthcare roles',
      'Work visa / employment permit assistance',
      'Job placement and documentation support',
      'Relocation guidance for Ireland',
    ],
    cta: 'Speak to an Ireland healthcare advisor',
  },
  {
    slug: 'dependent-visa',
    title: 'Dependent visa',
    category: 'Services',
    eyebrow: 'Family reunification',
    summary:
      'Select Overseas Education is one of the leading Dependent Visa Consultants. We process visa applications for dependents so they can work, study or start a business based on the primary applicant’s visa status.',
    points: [
      'Spouse / partner and children pathways',
      'Student and skilled worker dependents',
      'Documentation and application support',
      'Post-visa relocation guidance',
    ],
    cta: 'Plan your dependant visa',
  },
  {
    slug: 'business-visa',
    title: 'Business visa',
    category: 'Services',
    eyebrow: 'Meetings & trade travel',
    summary:
      'A Business visa permits you to stay in the country for the required period and to cross the border several times — suitable for meetings, negotiations, partnerships and contracts. Plan your trip with Select Overseas in Hyderabad.',
    points: [
      'Business meetings, trade fairs and negotiations',
      'Single, double or multiple entry options',
      'Documentation and application support',
      'Schengen and other destination guidance',
    ],
    cta: 'Apply for a business visa',
  },
  {
    slug: 'job-seeker-visa',
    title: 'Job Seeker Visa',
    category: 'Services',
    eyebrow: 'Search abroad legally',
    summary:
      'Germany Job Seeker Visa consultants in Hyderabad. Those seeking to work or live in Germany may enjoy strong employment opportunities across automotive, telecom, IT and more.',
    points: [
      'Up to 6 months to find a job in Germany',
      'Recognized degree and experience requirements',
      'Financial proof and medical insurance',
      'End-to-end visa application support',
    ],
    cta: 'Ask about job-seeker visas',
  },

  // Study Abroad — brief summaries; full overview lives in studyAbroadPages.ts
  {
    slug: 'study-in-usa',
    title: 'Study In USA',
    category: 'Study Abroad',
    eyebrow: 'USA Study visa consultants in Hyderabad',
    summary:
      'Are you dreaming of studying in the United States? Select Overseas Education specializes in helping students turn their aspirations into reality with comprehensive guidance throughout your USA study journey.',
    points: [
      'University & program shortlisting',
      'GRE / IELTS / TOEFL guidance',
      'F-1 visa, DS-160 and mock interviews',
      'Scholarships, loans and post-arrival tips',
    ],
    cta: 'Start your USA study plan',
  },
  {
    slug: 'study-visa-ireland',
    title: 'Study Visa Ireland',
    category: 'Study Abroad',
    eyebrow: 'Ireland Student Visa consultants in Hyderabad',
    summary:
      'Aspiring to study in Ireland? Our expert consultants offer personalized guidance and comprehensive support throughout your visa application journey for a smooth, successful process.',
    points: [
      'University shortlisting in Ireland',
      'Admission and offer-letter support',
      'Study visa documentation & filing',
      'Accommodation and pre-departure help',
    ],
    cta: 'Explore Ireland study options',
  },
  {
    slug: 'study-in-uk',
    title: 'Study In UK',
    category: 'Study Abroad',
    eyebrow: 'UK Study visa consultants in Hyderabad',
    summary:
      'UK offers world-class academics, shorter degrees and a versatile education system — ideal for Indian students. Select Overseas simplifies admissions, CAS and Student Route visas from Madhapur.',
    points: [
      'UK university & course matching',
      'CAS and financial evidence guidance',
      'Student Route visa filing & interview prep',
      'Scholarship and pre-departure support',
    ],
    cta: 'Plan your UK education',
  },
  {
    slug: 'study-in-australia',
    title: 'Study In Australia',
    category: 'Study Abroad',
    eyebrow: 'Australia Study Visa consultants in Hyderabad',
    summary:
      'We simplify studying at your dream university in Australia — admissions, GTE, Subclass 500 visas, scholarships and settling support from Hyderabad.',
    points: [
      'Course and university shortlisting',
      'Admission and GTE guidance',
      'Student visa documentation',
      'Scholarship and pre-departure support',
    ],
    cta: 'Begin Australia counselling',
  },
  {
    slug: 'study-in-canada',
    title: 'Study In Canada',
    category: 'Study Abroad',
    eyebrow: 'Canada study & visa guidance in Hyderabad',
    summary:
      'Affordable education, post-study work permits, and a welcoming multicultural environment. Select Overseas guides Hyderabad students through Canadian admissions and study permits.',
    points: [
      'University shortlisting in Canada',
      'Study permit & SDS guidance',
      'SOP and document support',
      'Scholarship and pre-departure help',
    ],
    cta: 'Start Canada counselling',
  },

  // Skilled Migration
  {
    slug: 'uk-healthcare-worker-visa',
    title: 'UK HealthCare Worker visa',
    category: 'Skilled Migration',
    eyebrow: 'Health & Care Worker route',
    summary:
      'The Health and Care visa was created to provide a fast-track for overseas nationals with medical and care skills to come to the UK to work in an eligible role with the NHS, an NHS supplier, or in the adult care sector.',
    points: [
      'Eligibility criteria and CoS guidance',
      'Approved Health and Care occupations',
      'Language, financial & support requirements',
      'Reduced fees and faster processing',
    ],
    cta: 'Check healthcare worker eligibility',
  },
  {
    slug: 'netherlands-skilled-worker-visa',
    title: 'Netherlands Skilled Worker Visa',
    category: 'Skilled Migration',
    eyebrow: 'Europe skilled migration',
    summary:
      'The Netherlands Skilled Work Visa offers an excellent opportunity for qualified individuals seeking a stable, rewarding career in Europe. Select Overseas guides skilled professionals through every step.',
    points: [
      'Highly Skilled Migrant pathways',
      'In-demand jobs across IT, engineering and healthcare',
      'Eligibility and salary thresholds',
      'Job assistance and family visa support',
    ],
    cta: 'Explore Netherlands skilled visas',
  },
  {
    slug: 'new-zealand-work-visa',
    title: 'New Zealand Work Visa',
    category: 'Skilled Migration',
    eyebrow: 'Work pathways',
    summary:
      'Are you seeking new horizons and exciting career opportunities? To work legally in New Zealand, you’ll need a New Zealand work visa. We walk you through the process, requirements, and benefits.',
    points: [
      'Essential Skills, Skilled Migrant and Work to Residence',
      'General requirements and documentation',
      '5-step application guidance',
      'Pathway to residency options',
    ],
    cta: 'Discuss NZ work visas',
  },
  {
    slug: 'australia-skilled-work-visa',
    title: 'Australia skilled work visa',
    category: 'Skilled Migration',
    eyebrow: 'SID 482 / employer routes',
    summary:
      'Australia is actively hiring experienced IT professionals through the Temporary Skill Shortage (TSS) Subclass 482 Visa, aligned with the Skills in Demand (SID) list.',
    points: [
      'IT occupations on the Skills in Demand list',
      'Employer sponsorship guidance',
      'Eligibility for tech professionals',
      'PR pathway planning',
    ],
    cta: 'Evaluate Australia skilled options',
  },
  {
    slug: 'uk-skilled-work-visa',
    title: 'UK skilled work visa',
    category: 'Skilled Migration',
    eyebrow: 'Skilled Worker route',
    summary:
      'The UK Skilled Worker visa is designed for individuals who have a job offer from a UK-based employer and possess a specific skill set and qualifications. This visa allows individuals to work and live in the UK for up to five years.',
    points: [
      '70-point eligibility system',
      'Certificate of Sponsorship process',
      'Shortage occupation advantages',
      'Dependants and settlement pathway',
    ],
    cta: 'Start UK skilled worker counselling',
  },
  {
    slug: 'uk-tier-2-visa',
    title: 'UK tier 2 visa',
    category: 'Skilled Migration',
    eyebrow: 'Sponsored work programme',
    summary:
      'Getting sponsored (Getting sponsor is our responsibility). You need to be employed by a licensed sponsor to apply to live in the UK. Your sponsor assigns a certificate of sponsorship to prove this.',
    points: [
      'Access to UK employers',
      'Visa sponsorship prospects',
      'IT job search and interview support',
      'Qualification recognition and apostille help',
    ],
    cta: 'Get Tier 2 / Skilled Worker advice',
  },
  {
    slug: 'uk-it-skilled-work-visa',
    title: 'UK IT Skilled Work Visa',
    category: 'Skilled Migration',
    eyebrow: 'Tech skilled migration',
    summary:
      'Are you an experienced IT professional looking to expand your career on a global scale? Through our UK Job Search Program, you can connect with UK employers who are offering visa sponsorship opportunities.',
    points: [
      'UK job search support',
      'Visa sponsorship guidance',
      'Roles across software, cloud, data and security',
      'Interview, CV and visa process coaching',
    ],
    cta: 'Book UK IT skilled visa consult',
  },
];

export function getServicePage(slug: string): ServicePage | undefined {
  return servicePages.find((p) => p.slug === slug);
}

export function slugifyLabel(label: string): string {
  const map: Record<string, string> = {
    'UK Visitor Visa': 'uk-visitor-visa',
    'UK Health care professionals Visa': 'uk-health-care-professionals-visa',
    'UK IT professionals visa consultancy': 'uk-it-professionals-visa-consultancy',
    'Student Visa': 'student-visa',
    'UK Work Visa': 'uk-work-visa',
    'Ireland IT professional work visa': 'ireland-it-professional-work-visa',
    'Ireland Health care work visa': 'ireland-health-care-work-visa',
    'Dependent visa': 'dependent-visa',
    'Business visa': 'business-visa',
    'Job Seeker Visa': 'job-seeker-visa',
    'Study In USA': 'study-in-usa',
    'Study Visa Ireland': 'study-visa-ireland',
    'Study In UK': 'study-in-uk',
    'Study In Australia': 'study-in-australia',
    'Study In Canada': 'study-in-canada',
    'UK HealthCare Worker visa': 'uk-healthcare-worker-visa',
    'Netherlands Skilled Worker Visa': 'netherlands-skilled-worker-visa',
    'New Zealand Work Visa': 'new-zealand-work-visa',
    'Australia skilled work visa': 'australia-skilled-work-visa',
    'UK skilled work visa': 'uk-skilled-work-visa',
    'UK tier 2 visa': 'uk-tier-2-visa',
    'UK IT Skilled Work Visa': 'uk-it-skilled-work-visa',
  };
  return map[label] ?? label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}
