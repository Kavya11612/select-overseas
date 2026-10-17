export type OverviewItem = { title: string; text: string };
export type OverviewSection = {
  heading: string;
  intro?: string;
  items: OverviewItem[];
  notes?: string[];
};

export type StudyAbroadPage = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  points: string[];
  cta: string;
  sections: OverviewSection[];
};

/** Full overview content aligned with selectoverseaseducation.com study pages */
export const studyAbroadPages: StudyAbroadPage[] = [
  {
    slug: 'study-in-usa',
    title: 'Study In USA',
    eyebrow: 'USA Study visa consultants in Hyderabad',
    summary:
      'Are you dreaming of studying in the United States? At Select Overseas Education, we specialize in helping students turn their aspirations into reality. Our dedicated team provides comprehensive guidance and support throughout your journey to studying in the USA.',
    points: [
      'University & program shortlisting',
      'GRE / IELTS / TOEFL guidance',
      'F-1 visa, DS-160 and mock interviews',
      'Scholarships, loans and post-arrival tips',
    ],
    cta: 'Start your USA study plan',
    sections: [
      {
        heading: 'Why Choose USA Study Visa Experts?',
        intro:
          'At Select Overseas Education, we provide expert guidance, personalized counseling, and complete support to help students successfully pursue higher education in the United States. From choosing the right university to settling in the USA, we are with you at every stage.',
        items: [
          {
            title: 'Expert Guidance',
            text: 'Our experienced consultants have in-depth knowledge of the US education system, university admissions, and F1 visa requirements. We stay updated with the latest immigration policies to provide accurate advice.',
          },
          {
            title: 'Personalized Support',
            text: 'Every student has unique goals. We offer one-to-one counseling and customized guidance based on your academic profile, career aspirations, and preferred universities.',
          },
          {
            title: 'Comprehensive Services',
            text: 'From university selection and application processing to visa filing, pre-departure assistance, and post-arrival guidance, we manage every step of your study abroad journey.',
          },
          {
            title: 'Proven Success',
            text: 'With a strong visa success rate and hundreds of successful student admissions, we have helped aspiring students achieve their dream of studying in the USA.',
          },
        ],
      },
      {
        heading: 'Complete USA Study Abroad Services',
        intro:
          'We provide end-to-end assistance for students planning to study in the USA, ensuring a smooth admission and visa process from Hyderabad to your dream university.',
        items: [
          {
            title: 'University Selection',
            text: 'We help you shortlist the best US universities and programs based on your academic profile, career goals, budget, and preferred location.',
          },
          {
            title: 'Visa Application Assistance',
            text: 'Our experts guide you through the complete F1 visa process, document verification, DS-160 form filling, and interview preparation for maximum success.',
          },
          {
            title: 'Pre-Departure Briefing',
            text: 'Receive practical guidance on accommodation, healthcare, transportation, student life, cultural expectations, and travel preparation before you fly.',
          },
          {
            title: 'Post-Arrival Support',
            text: 'Even after you reach the USA, we assist with settling in, student accommodation guidance, part-time work information, and adapting to your new environment.',
          },
        ],
      },
      {
        heading: 'Study in USA with the Best Abroad Visa Consultants in Hyderabad',
        intro:
          "Select Overseas Education is one of Hyderabad's trusted USA education consultants, offering complete support for students planning Bachelor's, Master's, or PhD programs in leading American universities.",
        items: [
          {
            title: 'University Admissions',
            text: "Expert guidance for Bachelor's, Master's, and PhD admissions at leading US universities with personalized course and university selection.",
          },
          {
            title: 'Test Preparation',
            text: 'Comprehensive support for GRE, IELTS, and TOEFL preparation along with SOP, LOR, and application documentation.',
          },
          {
            title: 'Visa & Documentation',
            text: 'Complete assistance with DS-160 form submission, F1 visa filing, document verification, and mock visa interviews.',
          },
          {
            title: 'Financial Assistance',
            text: 'Guidance for USA education loans, scholarship opportunities, financial documentation, and tuition planning.',
          },
          {
            title: 'Student Support',
            text: 'Assistance with accommodation, health insurance, travel planning, and dependent visa guidance for eligible applicants.',
          },
          {
            title: 'Top University Placements',
            text: 'We help students secure admissions in reputed US universities and ensure a smooth transition from Hyderabad to the United States.',
          },
        ],
      },
    ],
  },
  {
    slug: 'study-in-uk',
    title: 'Study In UK',
    eyebrow: 'UK Study visa consultants in Hyderabad',
    summary:
      'UK has vast experience of hundreds of years of education, excellent world-class academic facilities, and is a popular destination for Indian students. The combo of world-ranked universities and a versatile education system is ideal for youths to reach their career dreams.',
    points: [
      'UK university & course matching',
      'CAS and financial evidence guidance',
      'Student Route visa filing & interview prep',
      'Scholarship and pre-departure support',
    ],
    cta: 'Plan your UK education',
    sections: [
      {
        heading: 'Why Study in the UK?',
        intro:
          "The United Kingdom is one of the world's most popular study destinations, offering globally recognized universities, shorter degree programs, excellent career opportunities, and a multicultural learning environment.",
        items: [
          {
            title: 'World-Class Education',
            text: 'Study at internationally renowned universities with globally recognized degrees and industry-focused academic programs.',
          },
          {
            title: 'Shorter Course Duration',
            text: 'Complete undergraduate and postgraduate degrees faster, helping you save both time and tuition costs.',
          },
          {
            title: 'Easy Admission Process',
            text: 'Simplified admission and student visa procedures with guidance from experienced overseas education consultants.',
          },
          {
            title: 'Part-Time Work Opportunities',
            text: 'Eligible students can work while studying, helping gain valuable experience and support living expenses.',
          },
          {
            title: 'Scholarships Available',
            text: 'Many universities offer scholarships, bursaries, and financial aid to deserving international students.',
          },
          {
            title: 'Multicultural Lifestyle',
            text: 'Experience diverse cultures, world-class healthcare, and excellent career opportunities after graduation.',
          },
        ],
      },
      {
        heading: 'Types of UK Student Visas',
        intro:
          'The UK offers different student visa options depending on your course duration and study objectives. Our experts guide you in choosing the right visa category.',
        items: [
          {
            title: 'Short-Term Study Visa',
            text: 'Suitable for English language and short-term courses lasting up to 6 or 11 months. Applicants must provide proof of admission, financial support, and a valid passport.',
          },
          {
            title: 'Student Visa (Former Tier 4)',
            text: 'Designed for students pursuing courses longer than six months. It allows eligible students to work part-time while studying and offers extension opportunities where applicable.',
          },
          {
            title: 'Required Documents',
            text: 'Passport, Confirmation of Acceptance for Studies (CAS), proof of funds, English language proficiency, medical documents (if required), and supporting financial documents.',
          },
          {
            title: 'Visa Application Support',
            text: 'We assist with document verification, application submission, biometric appointments, interview preparation, and complete visa guidance.',
          },
        ],
      },
      {
        heading: 'UK Student Visa Application Process',
        intro: 'Our structured process ensures your UK student visa application is completed accurately and submitted on time.',
        items: [
          {
            title: '01 · Eligibility Check',
            text: 'Evaluate your academic qualifications, financial readiness, and university admission requirements.',
          },
          {
            title: '02 · Document Preparation',
            text: 'Prepare passports, CAS letter, financial documents, English test scores, and supporting paperwork.',
          },
          {
            title: '03 · Visa Application',
            text: 'Complete the online application and submit all required documents accurately.',
          },
          {
            title: '04 · Fee & Biometrics',
            text: 'Pay the visa application fee and attend your biometric appointment at the Visa Application Centre.',
          },
          {
            title: 'Visa Decision',
            text: 'Receive your student visa approval and prepare for your exciting academic journey in the UK.',
          },
        ],
      },
      {
        heading: 'Education System in the UK',
        intro:
          'The UK education system is internationally respected for its academic excellence and flexible learning pathways.',
        items: [
          {
            title: 'Undergraduate Programs',
            text: "Bachelor's degrees generally take three years, with practical and research-oriented learning.",
          },
          {
            title: 'Postgraduate Programs',
            text: "Master's degrees usually take one year, making the UK one of the fastest destinations for higher education.",
          },
          {
            title: 'Globally Recognized Qualifications',
            text: 'Degrees awarded by UK universities are respected worldwide and open doors to international career opportunities.',
          },
        ],
      },
      {
        heading: 'UK University Intakes',
        intro:
          'UK universities generally offer three admission intakes every year, providing flexibility for international students.',
        items: [
          {
            title: 'September / October Intake',
            text: 'The primary intake with the largest number of universities and course options.',
          },
          {
            title: 'January / February Intake',
            text: 'A popular secondary intake available at many universities.',
          },
          {
            title: 'May / June Intake',
            text: 'Available only for selected universities and specific academic programs.',
          },
        ],
      },
    ],
  },
  {
    slug: 'study-in-australia',
    title: 'Study In Australia',
    eyebrow: 'Australia Study Visa consultants in Hyderabad',
    summary:
      'We simplify studying at your dream university in Australia. Select Overseas Education helps with admissions, GTE, Subclass 500 student visas, scholarships, and settling support from Hyderabad.',
    points: [
      'Course and university shortlisting',
      'Admission and GTE guidance',
      'Student visa documentation',
      'Scholarship and pre-departure support',
    ],
    cta: 'Begin Australia counselling',
    sections: [
      {
        heading: 'Why Study in Australia?',
        intro:
          "Australia is one of the world's most preferred study destinations, offering internationally recognized qualifications, excellent career opportunities, and a high standard of living.",
        items: [
          {
            title: 'World-Class Education',
            text: 'Study at globally ranked universities with internationally recognized qualifications and industry-focused programs.',
          },
          {
            title: 'High Visa Success Rate',
            text: "Australia's streamlined student visa process provides excellent opportunities for eligible international students.",
          },
          {
            title: 'Fast Visa Processing',
            text: 'Enjoy a simplified and efficient student visa application process with proper documentation and expert guidance.',
          },
          {
            title: 'Post-Study Work Opportunities',
            text: 'Eligible graduates can gain valuable international work experience through post-study work visa options.',
          },
          {
            title: 'Pathway to Permanent Residency',
            text: 'Many graduates may become eligible for long-term migration pathways depending on occupation and government policies.',
          },
          {
            title: 'Excellent Student Lifestyle',
            text: 'Experience multicultural communities, modern cities, safe campuses, and outstanding quality of life while studying.',
          },
        ],
      },
      {
        heading: 'Australia Education System',
        intro:
          "Australia's education system is internationally respected for its quality, flexibility, and globally recognized qualifications under the Australian Qualifications Framework (AQF).",
        items: [
          {
            title: 'School Education',
            text: 'Primary School (Kindergarten–Grade 6/7), Secondary School (Grade 7/8–10), and Senior Secondary (Grades 11–12).',
          },
          {
            title: 'Vocational Education (VET)',
            text: 'Industry-focused Certificate, Diploma, and Advanced Diploma programs designed to develop practical skills for employment.',
          },
          {
            title: 'Higher Education',
            text: "Universities offer Bachelor's, Honours, Master's, and Doctoral programs that are recognized worldwide.",
          },
        ],
      },
      {
        heading: 'Complete Australia Study Visa Services',
        intro:
          'Select Overseas Education offers complete guidance for students planning higher education in Australia, from university admissions to visa approval.',
        items: [
          {
            title: 'University & Course Selection',
            text: 'Personalized counseling to shortlist the best Australian universities and programs based on your academic profile.',
          },
          {
            title: 'Test Preparation',
            text: 'Professional coaching and guidance for IELTS, PTE, and TOEFL examinations.',
          },
          {
            title: 'SOP & GTE Guidance',
            text: 'Expert assistance with Statement of Purpose (SOP) writing and Genuine Temporary Entrant (GTE) documentation.',
          },
          {
            title: 'Visa Documentation',
            text: 'Complete Australia Subclass 500 student visa documentation, application filing, and mock interview support.',
          },
          {
            title: 'Scholarships & Education Loans',
            text: 'Guidance on scholarships, financial planning, and education loan assistance for overseas studies.',
          },
          {
            title: 'Accommodation & Student Support',
            text: 'Support with student housing, health insurance, pre-departure guidance, and post-arrival assistance in Australia.',
          },
        ],
      },
    ],
  },
  {
    slug: 'study-visa-ireland',
    title: 'Study Visa Ireland',
    eyebrow: 'Ireland Student Visa consultants in Hyderabad',
    summary:
      'Aspiring to study in Ireland? Select Overseas Education offers personalized guidance and comprehensive support throughout your visa application journey, ensuring a smooth and successful process.',
    points: [
      'University shortlisting in Ireland',
      'Admission and offer-letter support',
      'Study visa documentation & filing',
      'Accommodation and pre-departure help',
    ],
    cta: 'Explore Ireland study options',
    sections: [
      {
        heading: 'Why Choose Ireland Student Visa Experts?',
        intro:
          'We help students achieve their dream of studying in Ireland through expert counseling, personalized guidance, and complete visa assistance — from university selection to settling in Ireland.',
        items: [
          {
            title: 'Expert Guidance',
            text: 'Our experienced consultants have extensive knowledge of the Irish education system, admission requirements, and student visa regulations.',
          },
          {
            title: 'Personalized Support',
            text: 'We provide one-on-one counseling tailored to your academic profile, career plans, and preferred universities.',
          },
          {
            title: 'Comprehensive Services',
            text: 'From selecting the right university and course to visa filing, documentation, and post-arrival guidance, we offer complete end-to-end support.',
          },
          {
            title: 'Proven Success',
            text: 'Our strong visa success rate and student satisfaction reflect our commitment to helping students successfully begin their education journey in Ireland.',
          },
        ],
      },
      {
        heading: 'Complete Ireland Study Visa Services',
        intro:
          'We provide comprehensive support throughout your study abroad journey, ensuring a smooth admission and visa process for Ireland.',
        items: [
          {
            title: 'University Selection',
            text: 'We help you choose the best Irish universities and courses that match your academic background, career objectives, and future aspirations.',
          },
          {
            title: 'Visa Application Assistance',
            text: 'Our experts guide you through every stage of the Ireland student visa process, ensuring your application is complete, accurate, and submitted on time.',
          },
          {
            title: 'Pre-Departure Briefing',
            text: 'Receive practical guidance on accommodation, transportation, student life, healthcare, and cultural expectations before you travel to Ireland.',
          },
          {
            title: 'Post-Arrival Support',
            text: 'We continue supporting you after your arrival by helping you settle into your new environment and adapt to student life in Ireland.',
          },
        ],
      },
      {
        heading: 'Your Trusted Ireland Education Consultants',
        intro:
          'Our mission is to help students achieve their academic ambitions by providing professional guidance and dedicated support throughout every stage of their study abroad journey.',
        items: [
          {
            title: 'Experienced Counselors',
            text: 'Our knowledgeable consultants provide personalized advice to help students confidently choose the right university, course, and career pathway.',
          },
          {
            title: 'Student-Focused Approach',
            text: 'We believe every student deserves individual attention, offering customized solutions that align with their academic goals and future ambitions.',
          },
          {
            title: 'End-to-End Support',
            text: 'From your first consultation to your arrival in Ireland, our dedicated team ensures your transition is smooth, stress-free, and successful.',
          },
        ],
      },
    ],
  },
  {
    slug: 'study-in-canada',
    title: 'Study In Canada',
    eyebrow: 'Canada study & visa guidance in Hyderabad',
    summary:
      'Affordable education, post-study work permits, and a welcoming multicultural environment. Select Overseas guides Hyderabad students through Canadian university admissions and study permits.',
    points: [
      'University shortlisting in Canada',
      'Study permit & SDS guidance',
      'SOP and document support',
      'Scholarship and pre-departure help',
    ],
    cta: 'Start Canada counselling',
    sections: [
      {
        heading: 'Why Study in Canada?',
        intro:
          'Canada offers quality education, post-study work permits, and clear pathways for international students — making it one of the top choices for Hyderabad families.',
        items: [
          {
            title: 'Affordable Quality Education',
            text: 'World-class universities with relatively affordable tuition compared to many other English-speaking destinations.',
          },
          {
            title: 'Post-Study Work Permit',
            text: 'Eligible graduates can gain Canadian work experience after studies, supporting career growth and PR pathways.',
          },
          {
            title: 'Multicultural Environment',
            text: 'A safe, welcoming society with strong student support services across provinces.',
          },
          {
            title: 'Visa Options We Support',
            text: 'Student Visa, Permanent Resident pathways, Visitor/Tourist Visa, and Business Visa guidance as needed.',
          },
        ],
      },
      {
        heading: 'How Select Overseas Helps',
        intro: 'End-to-end support from Madhapur for your Canada education journey.',
        items: [
          {
            title: 'Admissions Support',
            text: 'Course matching, university shortlisting, and application documentation.',
          },
          {
            title: 'Study Permit Filing',
            text: 'Document checklist, SDS/non-SDS guidance, and interview preparation where required.',
          },
          {
            title: 'Funding Guidance',
            text: 'Scholarship options, education loan documentation, and financial planning tips.',
          },
          {
            title: 'Pre-Departure',
            text: 'Accommodation, insurance, travel, and settling tips before you fly to Canada.',
          },
        ],
      },
    ],
  },
];

export function getStudyAbroadPage(slug: string): StudyAbroadPage | undefined {
  return studyAbroadPages.find((p) => p.slug === slug);
}
