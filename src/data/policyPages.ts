export type PolicySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type PolicyPage = {
  slug: string;
  title: string;
  effectiveDate?: string;
  intro: string[];
  sections: PolicySection[];
};

export const policyPages: PolicyPage[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    effectiveDate: '14 July 2026',
    intro: [
      'At Select Overseas, we value your trust and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, share, and protect your personal information when you visit our website, communicate with us, or use our overseas education, immigration, recruitment, visa, and global mobility services.',
      'By accessing our website or using our services, you agree to the practices described in this Privacy Policy.',
    ],
    sections: [
      {
        heading: '1. Information We Collect',
        paragraphs: [
          'Depending on the services you request, we may collect personal information such as address, email address, identity proof, and financial information (where required for visa or immigration purposes).',
          'When you visit our website, we may automatically collect IP address, operating system, website usage statistics, pages visited, and date and time of access.',
        ],
      },
      {
        heading: '2. How We Collect Information',
        bullets: [
          'Fill out enquiry or application forms',
          'Contact us by phone, email, WhatsApp, or social media',
          'Register for seminars, webinars, or events',
          'Apply for recruitment opportunities',
          'Request immigration, visa, or education services',
          'Visit and interact with our website',
        ],
      },
      {
        heading: '3. How We Use Your Information',
        bullets: [
          'Provide immigration, education, recruitment, visa, and consultancy services',
          'Assess eligibility and prepare applications',
          'Communicate regarding enquiries or applications',
          'Verify identity and documentation',
          'Improve services and prevent fraud',
          'Send service updates and, with consent, promotional communications',
        ],
      },
      {
        heading: '4. Sharing of Information',
        paragraphs: [
          'We may share your information only where necessary with government authorities, embassies and consulates, immigration departments, educational institutions, employers and recruitment partners, background verification agencies, third-party service providers, and legal or regulatory authorities where required by law.',
          'We do not sell or rent your personal information to third parties for marketing purposes.',
        ],
      },
      {
        heading: '5. Data Security',
        paragraphs: [
          'Select Overseas implements appropriate administrative, technical, and physical safeguards to protect your personal information. While we take reasonable measures, no method of internet transmission or electronic storage is completely secure.',
        ],
      },
      {
        heading: '6. Cookies & Third-Party Links',
        paragraphs: [
          'Our website may use cookies and similar technologies to improve website performance.',
          'Our website may contain links to third-party websites. Select Overseas is not responsible for the privacy practices, content, or security of external websites.',
        ],
      },
      {
        heading: '7. Your Rights & Data Retention',
        paragraphs: [
          'Subject to applicable laws, you may have the right to access your personal information and request correction of inaccurate information.',
          'We retain personal information only as long as necessary to deliver services, comply with legal requirements, resolve disputes, and maintain business records. When no longer required, information is securely deleted or anonymized where appropriate.',
        ],
      },
      {
        heading: '8. Children’s Privacy & Policy Updates',
        paragraphs: [
          'Our services are not intended for children under 18 without parent or guardian involvement. We do not knowingly collect personal information from minors except where necessary with appropriate authorization.',
          'Select Overseas may update this Privacy Policy from time to time. The revised version will be published on our website with an updated Effective Date.',
        ],
      },
      {
        heading: '9. Contact Us',
        paragraphs: [
          'Phone: +91 7032037375 | +91 7893537375',
          'Email: info@selectoverseaseducation.com',
          'Office: 1 St Floor, Plot No: 08, Vittal Nagar, Madhapur, Hyderabad -500081',
        ],
      },
    ],
  },
  {
    slug: 'terms-conditions',
    title: 'Terms & Conditions',
    intro: [
      'Welcome to Select Overseas. These Terms & Conditions govern your access to and use of our website and the services offered by Select Overseas. By accessing our website or using any of our services, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of our website and services.',
    ],
    sections: [
      {
        heading: '1. About Us',
        paragraphs: [
          'Select Overseas provides professional consultancy services relating to overseas education, documentation and compliance assistance, immigration, recruitment, visa, and related global mobility support.',
          'The information on this website is for general informational purposes only and should not be interpreted as legal, immigration, or financial advice.',
        ],
      },
      {
        heading: '2. Acceptance of Terms',
        bullets: [
          'You are at least 18 years of age or using the website under parent/guardian supervision',
          'You agree to comply with these Terms & Conditions and all applicable laws',
        ],
      },
      {
        heading: '3. Website Content',
        paragraphs: [
          'Website content is provided for general information only. While we make reasonable efforts to keep information accurate, we do not warrant that all information is complete, error-free, or always current, or that government policies and visa rules will remain unchanged.',
        ],
      },
      {
        heading: '4. Professional Services',
        paragraphs: [
          'Select Overseas provides consultancy and support services only. Final decisions regarding visas, admissions, employment, or citizenship are made solely by government authorities, embassies, educational institutions, employers, or regulatory bodies. We cannot guarantee any specific outcome.',
        ],
      },
      {
        heading: '5. Client Responsibilities',
        bullets: [
          'Provide accurate, truthful, and complete information',
          'Submit genuine documents',
          'Respond promptly to requests and attend required appointments',
          'Inform us of any material changes affecting your application',
        ],
        paragraphs: [
          'Providing false or misleading information may result in cancellation of services without refund and may expose the client to legal consequences.',
        ],
      },
      {
        heading: '6. Fees and Payments',
        paragraphs: [
          'Professional fees cover only the services specifically agreed upon. Unless stated otherwise, our fees do not include government application fees, embassy fees, visa charges, medical exams, PCC, translation, courier, insurance, or other third-party charges.',
        ],
      },
      {
        heading: '7. Refunds and Cancellations',
        paragraphs: [
          'Refunds and cancellations are governed by the applicable Service Agreement and the Return, Refund & Cancellation Policy published on our website.',
        ],
      },
      {
        heading: '8. Intellectual Property & Liability',
        paragraphs: [
          'All website content, branding, and design are the intellectual property of Select Overseas or its licensors and may not be copied without written permission.',
          'To the fullest extent permitted by law, Select Overseas shall not be liable for damages arising from website use, reliance on published information, processing delays, policy changes, authority decisions, or third-party actions beyond our control.',
        ],
      },
      {
        heading: '9. Governing Law',
        paragraphs: [
          'These Terms & Conditions are governed by the laws of the Republic of India. Disputes are subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana, India.',
        ],
      },
      {
        heading: '10. Contact Us',
        paragraphs: [
          'Phone: +91 7032037375 | +91 7893537375',
          'Email: info@selectoverseaseducation.com',
          'Office: 1 St Floor, Plot No: 08, Vittal Nagar, Madhapur, Hyderabad -500081',
        ],
      },
    ],
  },
  {
    slug: 'anti-fraud-policy',
    title: 'Anti-Fraud Policy',
    intro: [
      'Fraud, misrepresentation, and unethical practices can cause significant financial, legal, and reputational damage. Select Overseas is committed to conducting its business with the highest standards of integrity, transparency, honesty, and ethical conduct while providing genuine overseas education, immigration, recruitment, visa, and global mobility services.',
      'This Anti-Fraud Policy establishes the principles, responsibilities, and procedures for preventing, detecting, reporting, and addressing fraudulent activities.',
    ],
    sections: [
      {
        heading: '1. Purpose',
        bullets: [
          'Promote an ethical and transparent work culture',
          'Prevent fraud, corruption, and dishonest practices',
          'Protect clients, employees, partners, and the company',
          'Establish clear reporting and investigation procedures',
          'Ensure appropriate disciplinary and legal action against fraud',
        ],
      },
      {
        heading: '2. Scope',
        paragraphs: [
          'This policy applies to directors, management, employees, consultants, agents, recruitment and education partners, vendors, clients, and any individual or organization conducting business with Select Overseas.',
        ],
      },
      {
        heading: '3. Definition & Types of Fraud',
        paragraphs: [
          'Fraud refers to any intentional act of deception, misrepresentation, concealment of facts, forgery, falsification, misuse of authority, or dishonest practice to obtain an unlawful benefit or cause loss to another party.',
        ],
        bullets: [
          'Forged educational or employment documents',
          'False information during counselling or visa processing',
          'Misrepresentation of qualifications, experience, or finances',
          'Misuse of company funds or confidential information',
          'Fake invoices, receipts, or unauthorized commissions',
          'Cyber fraud, phishing, or unauthorized system access',
        ],
      },
      {
        heading: '4. Responsibilities & Compliance',
        paragraphs: [
          'Every employee and stakeholder must act honestly, follow company policies and laws, protect assets and confidential information, report suspected fraud immediately, and cooperate during investigations.',
          'Violation may result in termination of employment or contract, recovery of financial losses, and criminal prosecution where applicable. Failure to report known fraud or making false malicious allegations may also result in disciplinary action.',
        ],
      },
      {
        heading: '5. Fraud Prevention & Reporting',
        paragraphs: [
          'Select Overseas minimizes fraud through background verification, partner due diligence, document checks, segregation of financial duties, internal audits, secure records, staff training, and compliance monitoring.',
          'Suspected fraud should be reported immediately to an Immediate Reporting Manager or Senior Management with available information and evidence. All reports are treated seriously and investigated promptly.',
        ],
      },
      {
        heading: '6. Whistleblower Protection',
        paragraphs: [
          'Select Overseas encourages reporting genuine concerns without fear of retaliation. We maintain confidentiality where possible, protect whistleblower identity, prohibit retaliation for good-faith reports, and investigate fairly.',
        ],
      },
      {
        heading: '7. Online Reputation',
        paragraphs: [
          'We value honest feedback. However, deliberately publishing false, defamatory, or malicious information intended to damage the company’s reputation may result in legal action. This does not restrict genuine reviews or legitimate complaints made in good faith.',
        ],
      },
      {
        heading: '8. Contact Us',
        paragraphs: [
          'Phone: +91 7032037375 | +91 7893537375',
          'Email: info@selectoverseaseducation.com',
          'Office: 1 St Floor, Plot No: 08, Vittal Nagar, Madhapur, Hyderabad -500081',
        ],
      },
    ],
  },
  {
    slug: 'refund-returns',
    title: 'Return, Refund & Cancellation Policy',
    intro: [
      'At Select Overseas, we are committed to providing professional, transparent, and high-quality overseas education, immigration, recruitment, visa, and global mobility services.',
      'This policy outlines the terms governing cancellations, refunds, and service-related concerns. By making a payment to Select Overseas, the client acknowledges that they have read, understood, and agreed to this policy.',
    ],
    sections: [
      {
        heading: '1. Service Fees',
        paragraphs: [
          'Our professional service charges cover consultancy, documentation assistance, application preparation, process management, and other services specifically agreed upon with the client.',
          'Unless explicitly mentioned in writing, our fees do not include government/immigration fees, embassy fees, visa charges, biometrics, medical exams, PCC, translation, attestation, courier, travel, insurance, or other third-party costs.',
        ],
      },
      {
        heading: '2. Cancellation Policy',
        paragraphs: [
          'A client may request cancellation by submitting a written request via email. Requests are evaluated based on the stage of the application, work already completed, payments made to authorities or third parties, and contractual obligations.',
          'Cancellation becomes effective only after written confirmation from Select Overseas.',
        ],
      },
      {
        heading: '3. Refund Policy',
        paragraphs: [
          'Refund requests are reviewed individually by the Compliance Team based on the signed service agreement and case stage. Refunds may be considered only where the request complies with the agreement, services have not been substantially delivered, and the client is otherwise eligible.',
          'Where approved, eligible refunds are processed using the original payment method within a reasonable period.',
        ],
      },
      {
        heading: '4. Non-Refundable Situations',
        bullets: [
          'Visa, permit, or immigration applications refused by authorities',
          'Client fails to meet eligibility requirements',
          'Incorrect, incomplete, misleading, or fraudulent information provided',
          'Documents not submitted within timelines',
          'Missed interviews, biometrics, medicals, or mandatory appointments',
          'Voluntary withdrawal after substantial work is completed',
          'Delays or refusals due to law/policy changes beyond our control',
        ],
        paragraphs: [
          'Select Overseas cannot guarantee visa approval, admission, work permits, or immigration outcomes, as final decisions are made solely by the respective authorities or institutions.',
        ],
      },
      {
        heading: '5. Client Complaints',
        paragraphs: [
          'Clients dissatisfied with any aspect of our services may submit a written complaint through official channels. Each complaint will be acknowledged promptly, reviewed fairly, investigated, and resolved within a reasonable timeframe wherever possible.',
        ],
      },
      {
        heading: '6. Contact Us',
        paragraphs: [
          'For cancellation requests, refund inquiries, or complaints:',
          'Phone: +91 7032037375 | +91 7893537375',
          'Email: info@selectoverseaseducation.com',
          'Office: 1 St Floor, Plot No: 08, Vittal Nagar, Madhapur, Hyderabad -500081',
        ],
      },
    ],
  },
];

export function getPolicyPage(slug: string): PolicyPage | undefined {
  return policyPages.find((p) => p.slug === slug);
}
