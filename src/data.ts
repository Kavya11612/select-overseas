export type Destination = {
  name: string;
  tagline: string;
  flag: string;
  image: string;
  highlights: string[];
  popular: boolean;
  href: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type Step = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  name: string;
  university: string;
  country: string;
  quote: string;
  avatar: string;
};

/** Study destinations — matches selectoverseaseducation.com homepage */
export const destinations: Destination[] = [
  {
    name: 'Study In USA',
    tagline:
      'World-class universities, research opportunities, STEM programs, and excellent career prospects.',
    flag: '🇺🇸',
    image:
      'https://images.pexels.com/photos/34424635/pexels-photo-34424635.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: ['Student Visa', 'Visitor/Tourist Visa', 'Business Visa'],
    popular: true,
    href: '/services/study-in-usa',
  },
  {
    name: 'Study In Canada',
    tagline:
      'Affordable education, post-study work permits, and a welcoming multicultural environment.',
    flag: '🇨🇦',
    image:
      'https://images.pexels.com/photos/30245140/pexels-photo-30245140.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: ['Student Visa', 'Permanent Resident Visa', 'Visitor/Tourist Visa', 'Business Visa'],
    popular: true,
    href: '/services/study-in-canada',
  },
  {
    name: 'Study In Australia',
    tagline:
      'Globally recognized institutions with strong industry connections and excellent lifestyle benefits.',
    flag: '🇦🇺',
    image:
      'https://images.pexels.com/photos/33378301/pexels-photo-33378301.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: ['Student Visa', 'Permanent Resident Visa', 'Visitor/Tourist Visa', 'Business Visa'],
    popular: true,
    href: '/services/study-in-australia',
  },
  {
    name: 'Study In UK',
    tagline: 'Shorter degree durations, prestigious universities, and rich academic traditions.',
    flag: '🇬🇧',
    image:
      'https://images.pexels.com/photos/29253512/pexels-photo-29253512.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    highlights: ['Student Visa', 'Visitor/Tourist Visa', 'Business Visa'],
    popular: true,
    href: '/services/study-in-uk',
  },
];

/** How We Work — 4 services from selectoverseaseducation.com */
export const services: Service[] = [
  {
    title: 'Professional Consulting',
    description:
      'One-on-one guidance tailored to your academic background, goals, and budget.',
    icon: 'Compass',
  },
  {
    title: 'Visa Assistance',
    description:
      'Complete support for student visa documentation, applications, and interviews.',
    icon: 'Plane',
  },
  {
    title: 'University Selection',
    description: 'Find the right universities and programs that match your career aspirations.',
    icon: 'GraduationCap',
  },
  {
    title: 'Scholarship Guidance',
    description:
      'Discover scholarships and financial aid opportunities to reduce your education costs.',
    icon: 'Award',
  },
];

export const whyChooseUs = [
  {
    title: 'Global Visa Expertise',
    description:
      'Comprehensive guidance for admissions, documentation, and immigration processes.',
    icon: 'Globe2',
  },
  {
    title: '24/7 Student Support',
    description: 'Dedicated support throughout your study abroad journey.',
    icon: 'Headphones',
  },
  {
    title: 'Personalized Solutions',
    description: 'Customized recommendations based on your academic profile and goals.',
    icon: 'UserCheck',
  },
  {
    title: 'End-to-End Support',
    description: 'From counselling to pre-departure orientation, we manage every stage.',
    icon: 'Route',
  },
  {
    title: 'Trusted Partnerships',
    description: 'Strong relationships with reputed universities across the world.',
    icon: 'Handshake',
  },
  {
    title: 'Ethical Guidance',
    description: "Transparent advice with students' best interests always first.",
    icon: 'ShieldCheck',
  },
];

export const faqs = [
  {
    q: 'What services does Select Overseas Education provide?',
    a: 'We offer career counselling, university admissions, visa assistance, scholarship guidance, SOP/LOR support, and pre-departure services.',
  },
  {
    q: 'Which countries can I apply to?',
    a: 'We help students study in the USA, Canada, UK, Australia, Germany, Ireland, New Zealand, and several European destinations.',
  },
  {
    q: 'Can I get scholarship assistance?',
    a: 'Yes. Our counsellors help identify suitable scholarship opportunities and guide students through the application process.',
  },
  {
    q: 'Do you provide visa interview preparation?',
    a: 'Absolutely. We conduct mock interviews and provide complete support for visa applications.',
  },
  {
    q: 'Is counselling free?',
    a: 'Our initial consultation sessions are completely free.',
  },
];

export const contactInfo = {
  email: 'info@selectoverseaseducation.com',
  phones: ['+91 78935 37375', '+91 70320 37375', '040-66333443'],
  address: '1st Floor, Plot No: 08, Vittal Nagar, Madhapur, Hyderabad - 500081',
  hours: 'Mon–Sat: 8:00 AM – 6:00 PM',
  holiday: 'Holiday: Closed',
};

export const visaTicker = [
  'TOURIST VISA',
  'STUDENT VISA',
  'BUSINESS VISA',
  'PERMANENT RESIDENCY',
];

export const steps: Step[] = [
  {
    number: '01',
    title: 'Register Free',
    description: 'Create a profile and share your academic goals in a few minutes — no commitment required.',
    icon: 'UserPlus',
  },
  {
    number: '02',
    title: 'Profile Evaluation',
    description: 'Our advisors assess your scores, budget and aspirations to chart the best route abroad.',
    icon: 'ClipboardCheck',
  },
  {
    number: '03',
    title: 'Shortlist Universities',
    description: 'Browse programs filtered by country, field, intake and tuition — hand-picked for you.',
    icon: 'Search',
  },
  {
    number: '04',
    title: 'Apply with Support',
    description: 'Submit applications with document checklists, SOP editing and deadline tracking.',
    icon: 'FileText',
  },
  {
    number: '05',
    title: 'Funding & Visa',
    description: 'Find scholarships, education loans and get full visa assistance with mock interviews.',
    icon: 'Landmark',
  },
  {
    number: '06',
    title: 'Fly & Settle',
    description: 'Pre-departure guidance, accommodation help and arrival support for a smooth landing.',
    icon: 'PlaneTakeoff',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Ananya R.',
    university: 'Canada',
    country: 'Canada',
    quote:
      'Select Overseas Education made my dream of studying in Canada possible. Their guidance throughout the visa process was exceptional.',
    avatar:
      'https://images.pexels.com/photos/26871122/pexels-photo-26871122.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  },
  {
    name: 'Rahul K.',
    university: 'Study Abroad',
    country: 'International',
    quote:
      'From university shortlisting to SOP preparation, the team supported me at every step.',
    avatar:
      'https://images.pexels.com/photos/17824828/pexels-photo-17824828.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  },
  {
    name: 'Priya M.',
    university: 'Select Overseas',
    country: 'Hyderabad',
    quote:
      'Professional, transparent, and highly knowledgeable. I strongly recommend Select Overseas Education.',
    avatar:
      'https://images.pexels.com/photos/12414845/pexels-photo-12414845.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
  },
];

export const stats = [
  { value: '20+', label: 'Years Serving', numeric: 20, suffix: '+' },
  { value: '6+', label: 'Countries We Serve', numeric: 6, suffix: '+' },
  { value: '1,000+', label: 'Students Guided', numeric: 1000, suffix: '+' },
  { value: '98%', label: 'Visa Success Rate', numeric: 98, suffix: '%' },
];

export const heroSlides = [
  {
    eyebrow: 'Welcome to Select Overseas Education',
    title: 'Get Visa Solutions the easy way',
    subtitle:
      'Complete immigration & visa services for America, Canada & Australia — for travel and education.',
    image: 'https://images.pexels.com/photos/30052431/pexels-photo-30052431.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  },
  {
    eyebrow: 'Welcome to Select Overseas Education',
    title: 'Simple, Trusted Immigration Support',
    subtitle:
      'Expert guidance from application to arrival — making your global journey effortless and transparent.',
    image: 'https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  },
  {
    eyebrow: 'Welcome to Select Overseas Education',
    title: 'Effortless Global Visa Services',
    subtitle:
      'Study, work and settle abroad with confidence. We handle the paperwork, you focus on the dream.',
    image: 'https://images.pexels.com/photos/7683629/pexels-photo-7683629.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400',
  },
];

export type NavChild = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavChild[];
};

/** Mirrors selectoverseaseducation.com navbar — multi-page routes */
export const navLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'UK Visitor Visa', href: '/services/uk-visitor-visa' },
      { label: 'UK Health care professionals Visa', href: '/services/uk-health-care-professionals-visa' },
      { label: 'UK IT professionals visa consultancy', href: '/services/uk-it-professionals-visa-consultancy' },
      { label: 'Student Visa', href: '/services/student-visa' },
      { label: 'UK Work Visa', href: '/services/uk-work-visa' },
      { label: 'Ireland IT professional work visa', href: '/services/ireland-it-professional-work-visa' },
      { label: 'Ireland Health care work visa', href: '/services/ireland-health-care-work-visa' },
      { label: 'Dependent visa', href: '/services/dependent-visa' },
      { label: 'Business visa', href: '/services/business-visa' },
      { label: 'Job Seeker Visa', href: '/services/job-seeker-visa' },
    ],
  },
  {
    label: 'Study Abroad',
    href: '/study-abroad',
    children: [
      { label: 'Study In USA', href: '/services/study-in-usa' },
      { label: 'Study Visa Ireland', href: '/services/study-visa-ireland' },
      { label: 'Study In UK', href: '/services/study-in-uk' },
      { label: 'Study In Australia', href: '/services/study-in-australia' },
      { label: 'Study In Canada', href: '/services/study-in-canada' },
    ],
  },
  {
    label: 'Skilled Migration',
    href: '/services',
    children: [
      { label: 'UK HealthCare Worker visa', href: '/services/uk-healthcare-worker-visa' },
      { label: 'Netherlands Skilled Worker Visa', href: '/services/netherlands-skilled-worker-visa' },
      { label: 'New Zealand Work Visa', href: '/services/new-zealand-work-visa' },
      { label: 'Australia skilled work visa', href: '/services/australia-skilled-work-visa' },
      { label: 'UK skilled work visa', href: '/services/uk-skilled-work-visa' },
      { label: 'UK tier 2 visa', href: '/services/uk-tier-2-visa' },
      { label: 'UK IT Skilled Work Visa', href: '/services/uk-it-skilled-work-visa' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];
