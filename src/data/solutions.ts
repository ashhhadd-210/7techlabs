export type Solution = {
  slug: string;
  title: string;
  oneLine: string;
  benefit: string;
  whatItIs: string;
  whoItsFor: string[];
  whatItSolves: string[];
  howItWorks: string[];
  whatsIncluded: string[];
  outcomes: string[];
  examples: string[];
  related: string[];
};

export const solutions: Solution[] = [
  {
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    oneLine: 'Apps people actually use on their phones — for customers, employees, and field teams.',
    benefit: 'Reach your customers and run your operations from any device.',
    whatItIs:
      'Native and cross-platform apps for iOS and Android, designed to feel familiar on every device and built to scale with your business. We handle the full lifecycle — from interface design to release and ongoing improvement.',
    whoItsFor: [
      'Consumer brands launching a customer app',
      'Operations teams that need a tool in the field',
      'Startups building a mobile-first product',
      'Enterprises rolling out an internal app to thousands of staff'
    ],
    whatItSolves: [
      'Customer reach beyond the website',
      'Slow paper-based processes for field teams',
      'Disconnect between office systems and people on the move',
      'Inconsistent service across regions and branches'
    ],
    howItWorks: [
      'We map the user, the screens, and the moments that matter',
      'We design the interface and validate it with real users',
      'We build for iOS and Android in parallel',
      'We test on real devices and edge-case scenarios',
      'We release to the stores and monitor adoption',
      'We update and improve from day one'
    ],
    whatsIncluded: [
      'Interface design and prototyping',
      'iOS and Android engineering',
      'Backend and APIs',
      'Push notifications and in-app analytics',
      'App store release and review handling',
      'Crash reporting and ongoing support'
    ],
    outcomes: [
      'A presence in your customers’ pockets',
      'Faster work for field and floor teams',
      'Higher repeat usage and retention',
      'Cleaner data flowing back into the business'
    ],
    examples: [
      'Customer apps',
      'Employee apps',
      'Delivery and field apps',
      'Fintech and wallet apps',
      'Internal business apps',
      'Support and service apps'
    ],
    related: ['web-platforms', 'business-systems', 'pos-systems']
  },
  {
    slug: 'web-platforms',
    title: 'Web Platforms',
    oneLine: 'Web products that work as well as desktop software — fast, reliable, and accessible from anywhere.',
    benefit: 'Give customers and teams a single place to do real work.',
    whatItIs:
      'Modern web applications and SaaS platforms built to feel native, load quickly, and scale with your customer base. Built with the engineering discipline that keeps a product working as it grows.',
    whoItsFor: [
      'Companies launching a SaaS product',
      'Organisations replacing legacy desktop tools',
      'Marketplaces and customer portals',
      'Education, healthcare, and service platforms'
    ],
    whatItSolves: [
      'Disconnected tools and shared spreadsheets',
      'Slow, dated interfaces that frustrate users',
      'Inability to access information from anywhere',
      'Customer experiences that don’t compete with global players'
    ],
    howItWorks: [
      'We agree on the product’s purpose and the people it serves',
      'We design the interface and the information model together',
      'We build with modern frameworks and a clear engineering plan',
      'We test, accessibility-check, and load-prove',
      'We deploy on cloud infrastructure with monitoring',
      'We extend and maintain as the product grows'
    ],
    whatsIncluded: [
      'Product design and interaction work',
      'Frontend and backend engineering',
      'Authentication, billing, and admin tooling',
      'Cloud hosting and CI/CD',
      'Performance and accessibility audits',
      'Documentation and team handover'
    ],
    outcomes: [
      'A product people return to',
      'A foundation that scales as you grow',
      'Lower support burden through clearer interfaces',
      'A platform you can extend without rewriting'
    ],
    examples: [
      'Customer portals',
      'SaaS products',
      'Marketplaces',
      'Education and healthcare platforms',
      'Internal web applications'
    ],
    related: ['mobile-apps', 'business-systems', 'internal-tools']
  },
  {
    slug: 'business-systems',
    title: 'Business Systems',
    oneLine: 'Software that runs the day-to-day — orders, approvals, customers, operations, and reporting.',
    benefit: 'Replace spreadsheets and disconnected tools with one system your team can trust.',
    whatItIs:
      'Custom or extended business systems — CRMs, operations dashboards, approval workflows, and admin panels — shaped to the way your team actually works rather than forcing your team into a vendor template.',
    whoItsFor: [
      'Operations and ops-heavy teams',
      'Sales teams running pipelines outside a CRM',
      'Finance and procurement approval chains',
      'Companies outgrowing their current tools'
    ],
    whatItSolves: [
      'Spreadsheets passed between teams',
      'Information lost between departments',
      'Manual approvals taking weeks',
      'Reports built by hand every month'
    ],
    howItWorks: [
      'We shadow the team and map the real workflow',
      'We define the data, the roles, and the decisions',
      'We design a single console for each role',
      'We build, integrate, and migrate from existing tools',
      'We roll out with training and feedback loops',
      'We refine as the operation matures'
    ],
    whatsIncluded: [
      'Workflow and process mapping',
      'Custom CRM, ops, or admin platform',
      'Role-based access and permissions',
      'Reporting and analytics views',
      'Integration with existing systems',
      'User training and documentation'
    ],
    outcomes: [
      'Fewer hours lost to manual work',
      'Cleaner data across the company',
      'Faster decisions and approvals',
      'A system that grows with the team'
    ],
    examples: [
      'CRM and sales tools',
      'Operations dashboards',
      'Approval and workflow systems',
      'Admin and back-office panels',
      'Procurement and HR systems'
    ],
    related: ['internal-tools', 'ai-automation', 'data-analytics']
  },
  {
    slug: 'banking-finance',
    title: 'Banking & Finance Products',
    oneLine: 'Secure, regulated software for banks, fintechs, and finance teams.',
    benefit: 'Software built to the standards finance demands — secure, auditable, and reliable.',
    whatItIs:
      'Customer-facing and internal banking products built to the security, compliance, and reliability standards finance work demands. From customer interfaces to back-office reconciliation, we engineer for trust.',
    whoItsFor: [
      'Banks modernising customer interfaces',
      'Fintech startups building new products',
      'Finance teams inside larger organisations',
      'Lenders, payment companies, and brokers'
    ],
    whatItSolves: [
      'Outdated customer banking experiences',
      'Manual reconciliation and reporting',
      'Compliance gaps and audit difficulty',
      'Slow product launches in regulated environments'
    ],
    howItWorks: [
      'We work alongside risk, compliance, and product from day one',
      'We design interfaces that make complex finance feel simple',
      'We build with security and audit trails by default',
      'We integrate with core banking and payment infrastructure',
      'We test against real-world adversarial scenarios',
      'We support the launch and the regulatory review'
    ],
    whatsIncluded: [
      'Customer banking interfaces and apps',
      'Internal banking and operations tools',
      'Secure transaction and reporting systems',
      'Identity, KYC, and access control',
      'Audit logging and compliance reporting',
      'Integration with core banking and payment rails'
    ],
    outcomes: [
      'Customer experiences that compete with global banks',
      'Lower operating cost through automation',
      'Faster product launches with less risk',
      'Audit-ready evidence at every step'
    ],
    examples: [
      'Customer banking interfaces',
      'Banking dashboards',
      'Internal banking tools',
      'Secure workflow and approval systems',
      'Transaction and reporting systems',
      'KYC and onboarding flows'
    ],
    related: ['business-systems', 'data-analytics', 'custom-software']
  },
  {
    slug: 'data-analytics',
    title: 'Data & Analytics',
    oneLine: 'Turn the data your business already produces into reports, dashboards, and decisions.',
    benefit: 'Stop guessing — see what is happening across your business in real time.',
    whatItIs:
      'End-to-end data work: collecting from every system, cleaning and modelling it, and presenting it through dashboards and reports your team can actually use to make decisions.',
    whoItsFor: [
      'Companies with data trapped in many tools',
      'Teams making decisions on lagging reports',
      'Operations leaders who need real-time visibility',
      'Boards and executives wanting clear weekly numbers'
    ],
    whatItSolves: [
      'Reports rebuilt by hand every month',
      'Conflicting numbers across departments',
      'Data sitting unused in different systems',
      'Dashboards that nobody trusts'
    ],
    howItWorks: [
      'We map every source of data in the business',
      'We build pipelines to collect and clean it',
      'We model it into shapes ready for analysis',
      'We design dashboards for each audience',
      'We monitor data quality and freshness',
      'We extend as new questions emerge'
    ],
    whatsIncluded: [
      'Data pipelines and integration',
      'Centralised data warehouse',
      'Quality and freshness monitoring',
      'Dashboards for each role',
      'Reporting automation',
      'Documentation and team training'
    ],
    outcomes: [
      'A single source of truth across the business',
      'Faster, better-informed decisions',
      'Hours saved every week on manual reports',
      'Trustworthy numbers in every meeting'
    ],
    examples: [
      'Operations dashboards',
      'Sales and revenue analytics',
      'Customer behaviour insights',
      'Executive reporting suites',
      'Real-time monitoring boards'
    ],
    related: ['business-systems', 'ai-automation', 'internal-tools']
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    oneLine: 'AI assistants and automated workflows that take repetitive work off your team’s plate.',
    benefit: 'Let your team focus on the work that only humans can do.',
    whatItIs:
      'AI products and automation systems that handle conversation, document work, screening, and repetitive operations — built to integrate with your existing tools rather than replace them.',
    whoItsFor: [
      'Customer support teams drowning in volume',
      'Operations teams doing repetitive document work',
      'Sales and HR teams handling high-volume screening',
      'Finance teams processing invoices and claims'
    ],
    whatItSolves: [
      'Hours lost to repetitive copy-paste work',
      'Inconsistent quality across team members',
      'Slow response times to customers',
      'Manual document review and data entry'
    ],
    howItWorks: [
      'We map the work that is actually repetitive',
      'We separate what AI should do from what humans must do',
      'We design the assistant or workflow with the team',
      'We integrate with the tools they already use',
      'We measure quality and response time from day one',
      'We refine as the work evolves'
    ],
    whatsIncluded: [
      'Conversational AI and assistants',
      'Document understanding and extraction',
      'Screening and triage systems',
      'Workflow automation across tools',
      'Quality monitoring and feedback loops',
      'Human-in-the-loop controls'
    ],
    outcomes: [
      'Hours per week returned to your team',
      'Faster, more consistent customer responses',
      'Lower error rates on repetitive work',
      'Decisions and audit trails you can defend'
    ],
    examples: [
      'Customer support assistants',
      'Internal AI assistants',
      'Sales chat automation',
      'Document processing systems',
      'Approval and screening workflows'
    ],
    related: ['business-systems', 'data-analytics', 'internal-tools']
  },
  {
    slug: 'internal-tools',
    title: 'Internal Tools & Dashboards',
    oneLine: 'Purpose-built tools for the people running operations, support, finance, and HR.',
    benefit: 'One screen for the work, not ten browser tabs.',
    whatItIs:
      'Web-based tools designed around the way a specific role actually works — replacing five tabs and three spreadsheets with a single, focused console.',
    whoItsFor: [
      'Operations and support teams',
      'Finance and back-office staff',
      'HR and people teams',
      'Field and on-site managers'
    ],
    whatItSolves: [
      'Switching between five different systems all day',
      'Spreadsheets that nobody trusts but everyone uses',
      'Reports rebuilt by hand each week',
      'New hires taking months to learn the workflow'
    ],
    howItWorks: [
      'We sit with the team and watch the actual workflow',
      'We identify the decisions and data each role depends on',
      'We design a single console around those decisions',
      'We connect to the underlying systems and data',
      'We ship with the team and iterate weekly',
      'We instrument usage to keep improving'
    ],
    whatsIncluded: [
      'Custom internal interfaces',
      'Connectors to existing systems',
      'Permissions and approvals',
      'Embedded reporting and analytics',
      'Action logging and audit',
      'Usage analytics and feedback'
    ],
    outcomes: [
      'Less time switching between tools',
      'New hires productive in days, not months',
      'Cleaner data because the right field is in front of the right person',
      'Operational decisions that don’t wait for a report'
    ],
    examples: [
      'Operations consoles',
      'Support agent workspaces',
      'Finance back-office tools',
      'HR and onboarding portals',
      'Field manager dashboards'
    ],
    related: ['business-systems', 'data-analytics', 'ai-automation']
  },
  {
    slug: 'custom-software',
    title: 'Custom Software',
    oneLine: 'Software built to fit your business — not the other way around.',
    benefit: 'When off-the-shelf software almost works but never quite fits.',
    whatItIs:
      'End-to-end software engineering for problems that don’t have an off-the-shelf answer. We design, build, and operate the system as a long-term partner, not a one-off vendor.',
    whoItsFor: [
      'Companies whose process doesn’t fit a vendor template',
      'Industries with regulatory or operational constraints',
      'Teams replacing aging legacy systems',
      'Organisations building proprietary advantage'
    ],
    whatItSolves: [
      'Forcing your business into someone else’s product shape',
      'Paying for features you don’t use',
      'Hitting walls when you need to change a workflow',
      'Vendor lock-in that gets worse over time'
    ],
    howItWorks: [
      'We listen to the actual problem before suggesting a solution',
      'We design the smallest first version that earns its keep',
      'We build with modern engineering practices from day one',
      'We deliver in increments your team can use right away',
      'We document and train so you own the result',
      'We support, extend, and evolve as the business changes'
    ],
    whatsIncluded: [
      'Discovery and product definition',
      'Architecture and engineering',
      'Cloud infrastructure and deployment',
      'Security and compliance considerations',
      'Documentation and team handover',
      'Ongoing support and partnership'
    ],
    outcomes: [
      'Software that fits your business exactly',
      'A clear path to extend it as you grow',
      'Independence from any single vendor',
      'An engineering partner you can trust long-term'
    ],
    examples: [
      'Industry-specific platforms',
      'Operational systems',
      'Customer-facing products',
      'Replacement for legacy software',
      'Regulated and compliance-heavy systems'
    ],
    related: ['web-platforms', 'business-systems', 'banking-finance']
  },
  {
    slug: 'pos-systems',
    title: 'POS Systems',
    oneLine: 'Point-of-sale software for retail, restaurants, services, and everything in between.',
    benefit: 'One system for sales, inventory, staff, and reporting — built for the way you trade.',
    whatItIs:
      'Modern point-of-sale systems for businesses of every size — from a single counter to a chain of branches. Built to work on tablets, terminals, and mobile, with everything from inventory to multi-branch reporting included.',
    whoItsFor: [
      'Retail stores and chains',
      'Restaurants, cafés, and food businesses',
      'Service businesses with bookings and walk-ins',
      'Wholesalers and distributors',
      'Pharmacies and specialised retail'
    ],
    whatItSolves: [
      'Slow checkouts and lost sales at peak times',
      'Inventory that never matches what is on the shelf',
      'No visibility across multiple branches',
      'Reports built by hand at the end of each day'
    ],
    howItWorks: [
      'We map your sales, inventory, and reporting needs',
      'We configure the POS to your products and services',
      'We integrate with payments, accounting, and inventory',
      'We deploy across counters, branches, and devices',
      'We train the staff who actually use it',
      'We support and refine as the business grows'
    ],
    whatsIncluded: [
      'Counter and tablet POS interfaces',
      'Inventory and stock management',
      'Multi-branch and multi-currency support',
      'Payment integration',
      'Sales and staff reporting',
      'Hardware setup and ongoing support'
    ],
    outcomes: [
      'Faster checkouts and shorter queues',
      'Inventory you can trust',
      'Real visibility across branches',
      'Reports ready the moment you close the day'
    ],
    examples: [
      'Retail POS for shops and chains',
      'Restaurant and café POS with kitchen integration',
      'Service business POS with bookings',
      'Wholesale and B2B POS',
      'Pharmacy and specialised retail POS'
    ],
    related: ['mobile-apps', 'business-systems', 'data-analytics']
  }
];

export const audiences = [
  { title: 'Startups', body: 'Founders shipping a first product or a serious second one.' },
  { title: 'Enterprises', body: 'Large organisations modernising or extending their software.' },
  { title: 'Banks & financial institutions', body: 'Regulated, secure work for finance teams.' },
  { title: 'Public & institutional', body: 'Software for organisations that serve at scale.' },
  { title: 'Internal teams', body: 'Tools that make your operations faster and clearer.' },
  { title: 'Business units', body: 'Departments that need focused systems of their own.' }
];

export const industries = [
  { title: 'Retail & Hospitality', body: 'POS, inventory, and customer apps for shops, restaurants, and chains.' },
  { title: 'Banking & Finance', body: 'Customer banking, internal tools, and compliant reporting.' },
  { title: 'Healthcare', body: 'Patient portals, scheduling, and back-office systems.' },
  { title: 'Logistics & Transport', body: 'Driver apps, dispatch, tracking, and routing.' },
  { title: 'Education', body: 'Student platforms, faculty tools, and admin systems.' },
  { title: 'Public & Institutional', body: 'Workflow, reporting, and secure tools for institutions.' }
];

export const processSteps = [
  { title: 'Understand', body: 'We sit with the people closest to the problem and map what matters.' },
  { title: 'Design', body: 'We shape the system on paper before we touch code.' },
  { title: 'Build', body: 'We engineer in increments your team can use right away.' },
  { title: 'Test', body: 'We test against real-world behaviour, not happy paths.' },
  { title: 'Launch & support', body: 'We stay with the system once it goes live.' }
];

export const engagementArchetypes = [
  {
    title: 'Modernise legacy software',
    body: 'Replace aging desktop tools and inherited systems with software people actually want to use — without losing the years of process they captured.'
  },
  {
    title: 'Launch a new digital product',
    body: 'Take a product from concept to a polished, scalable launch — with the engineering discipline to support it through growth.'
  },
  {
    title: 'Build internal operations tooling',
    body: 'Replace spreadsheets and shadow IT with focused consoles for the teams that run the business day-to-day.'
  },
  {
    title: 'Add AI to existing workflows',
    body: 'Introduce AI in ways that earn trust — automating the repetitive parts and supporting humans on the rest.'
  },
  {
    title: 'Set up the data foundation',
    body: 'Bring data from every corner of the business into one trusted place, with dashboards and reporting on top.'
  },
  {
    title: 'Open a new POS or banking channel',
    body: 'Stand up a new sales channel or customer-facing product with the regulatory and operational rigour it needs from day one.'
  }
];

export const whyStatements = [
  {
    title: 'Built in Pakistan, ready for the world',
    body: 'Our engineering bench operates from Lahore. Our systems operate everywhere our clients do.'
  },
  {
    title: 'Serious about quality',
    body: 'Tests, reviews, and observability are built in from day one — not bolted on after launch.'
  },
  {
    title: 'Capable of complex work',
    body: 'Regulated, multi-region, multi-team — we are comfortable with software that has to behave under load.'
  },
  {
    title: 'Focused on long-term systems',
    body: 'We stay with the systems we build. Most of our work continues to evolve years after the first release.'
  }
];
