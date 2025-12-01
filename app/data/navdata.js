// Filename: app/data/navdata.js

// --- WORK DATA ---
const allProjects = [
  {
    title: "PredictionStrike",
    description: "The world's first athlete stock exchange. +3637% increase in per-user sessions.",
    image: "https://placehold.co/300x200/1e293b/94a3b8?text=PredictionStrike"
  },
  {
    title: "World Wildlife Fund",
    description: "The renowned international conservation org. 30% increase in site-generated purchases.",
    image: "https://placehold.co/300x200/1e293b/94a3b8?text=WWF"
  },
  {
    title: "Kabata",
    description: "An AI-powered dumbbell that's backed by top investors. Sold out its presale in 45 minutes.",
    image: "https://placehold.co/300x200/1e293b/94a3b8?text=Kabata"
  },
  {
    title: "TGS",
    description: "A leader in the energy data and intelligence industry. +425% increase in primary page views.",
    image: "https://placehold.co/300x200/1e293b/94a3b8?text=TGS"
  },
  {
    title: "AngelFire",
    description: "Socially-immersive sports gaming app. 4.8/5 average rating and 1000's of downloads.",
    image: "https://placehold.co/300x200/1e293b/94a3b8?text=AngelFire"
  },
  {
    title: "MedsPal",
    description: "A non-profit medical database partnering with WHO. +250% increase in site engagement.",
    image: "https://placehold.co/300x200/1e293b/94a3b8?text=MedsPal"
  },
];

export const workData = {
  layout: "list",
  sidebar: [
    { id: "case-studies", name: "Case Studies", icon: "FolderOpen" },
  ],
  content: {
    "case-studies": allProjects,
  },
  footer: { text: "Discover 20+ more case studies", linkText: "View all case studies" }
};

// --- SERVICES DATA ---
export const servicesData = {
  layout: "grid",
  sidebar: [
    { id: "strategy", name: "Product Strategy", icon: "Rocket" },
    { id: "design", name: "Design", icon: "Palette" },
    { id: "development", name: "Software Development", icon: "Code" }
  ],
  content: {
    "strategy": [
      { title: "Product Launch Strategy", description: "Launch at the intersection of business & user goals.", icon: "Compass" },
      { title: "Competitor Analysis Services", description: "Boost market positioning by learning from competitors.", icon: "Target" },
      { title: "Product Ideation & Roadmapping", description: "Turn raw ideas into a prioritized, actionable plan.", icon: "Lightbulb" },
      { title: "User Experience Research", description: "Ground your product decisions in real user insights.", icon: "Users" },
    ],
    "design": [
      { title: "UI/UX Design", description: "Beautiful and functional interfaces for any platform.", icon: "Palette" },
      { title: "Interactive Prototyping", description: "Validate ideas with clickable, high-fidelity prototypes.", icon: "Layers" },
      { title: "Brand & Visual Identity", description: "Create a memorable brand that resonates with users.", icon: "Star" },
      { title: "Design Systems", description: "Scalable, consistent design languages for your products.", icon: "Settings" },
    ],
    "development": [
      { title: "Web Application Development", description: "Robust, scalable web apps using modern frameworks.", icon: "Monitor" },
      { title: "Mobile App Development", description: "Native and cross-platform apps for iOS and Android.", icon: "Smartphone" },
      { title: "API & Backend Development", description: "Secure, efficient, and scalable backend systems.", icon: "Database" },
      { title: "Cloud Infrastructure", description: "Deploy and scale on AWS, GCP, or Azure.", icon: "Cloud" },
    ],
  },
  footer: { text: "Explore all our services", linkText: "View all services" }
};

// --- CLIENTS DATA ---
export const clientsData = {
  layout: "grid",
  sidebar: [
    { id: "startups", name: "Startups", icon: "Rocket" },
    { id: "enterprise", name: "Enterprise", icon: "Building2" },
    { id: "nonprofit", name: "Nonprofits", icon: "Heart" },
  ],
  content: {
    "startups": [
      { title: "MVP Development", description: "Launch your minimum viable product in weeks, not months.", icon: "Zap" },
      { title: "Pitch Deck Design", description: "Compelling visual stories for investor presentations.", icon: "TrendingUp" },
      { title: "Product-Market Fit", description: "Validate and refine your product with real users.", icon: "Target" },
      { title: "Growth Engineering", description: "Technical solutions to accelerate user acquisition.", icon: "BarChart3" },
    ],
    "enterprise": [
      { title: "Digital Transformation", description: "Modernize legacy systems and processes.", icon: "Repeat" },
      { title: "Custom Software Solutions", description: "Tailored applications for complex business needs.", icon: "Code" },
      { title: "Data Visualization & Dashboards", description: "Transforming complex data sets into intuitive visuals.", icon: "BarChart3" },
      { title: "Internal Workflow Optimization", description: "Building custom software to improve operational efficiency.", icon: "Gauge" },
    ],
    "nonprofit": [
      { title: "Accessible Design", description: "WCAG-compliant interfaces for all users.", icon: "Users" },
      { title: "Donation Platforms", description: "Seamless giving experiences that increase contributions.", icon: "Heart" },
      { title: "Impact Reporting", description: "Visualize and communicate your organization\"s impact.", icon: "BarChart3" },
      { title: "Volunteer Management", description: "Tools to coordinate and engage your volunteers.", icon: "UserCheck" },
    ],
  },
  footer: { text: "Discover 10+ more industries we've worked with", linkText: "View all" }
};

// --- RESOURCES DATA ---
export const resourcesData = {
  layout: "list",
  sidebar: [
    { id: "blog", name: "Blog", icon: "Newspaper" },
    { id: "guides", name: "Guides & Ebooks", icon: "BookOpen" },
    { id: "templates", name: "Templates & Tools", icon: "FileCode" },
  ],
  content: {
    "blog": [
      { title: "How to Choose the Right AI Software Development Company in 2025", description: "If you choose the wrong AI software development company, it can seriously derail your project...", image: "https://placehold.co/300x150/1e293b/94a3b8?text=AI+Strategy" },
      { title: "App Guru Expands UX and Accessibility Services to Empower Nonprofits", description: "Los Angeles, California – May 28, 2025 – App Guru expands its services...", image: "https://placehold.co/300x150/1e293b/94a3b8?text=UX+Expansion" },
      { title: "The Complete Guide to UX Audits (And Why They Matter More Than Ever)", description: "User experience is make-or-break. Whether you're battling user drop-off...", image: "https://placehold.co/300x150/1e293b/94a3b8?text=UX+Audit" },
    ],
    "guides": [
      { title: "The Ultimate Guide to MVP Development in 2025", description: "A step-by-step playbook for launching your minimum viable product successfully.", image: "https://placehold.co/300x150/1e293b/94a3b8?text=MVP+Guide" },
      { title: "Scaling Your SaaS: Infrastructure Best Practices", description: "Learn how to design and implement a scalable infrastructure for your growing SaaS.", image: "https://placehold.co/300x150/1e293b/94a3b8?text=SaaS+Scaling" },
      { title: "Designing for Accessibility (WCAG 2.1)", description: "Ensure your digital products are inclusive and accessible to all users.", image: "https://placehold.co/300x150/1e293b/94a3b8?text=Accessibility" },
    ],
    "templates": [
      { title: "Free Product Requirements Document (PRD) Template", description: "Kickstart your project with our proven PRD template.", image: "https://placehold.co/300x150/1e293b/94a3b8?text=PRD+Template" },
      { title: "Competitor Analysis Spreadsheet", description: "A structured spreadsheet to analyze your competitors.", image: "https://placehold.co/300x150/1e293b/94a3b8?text=Analysis+Tool" },
      { title: "UX Audit Checklist", description: "A comprehensive checklist to evaluate user experience.", image: "https://placehold.co/300x150/1e293b/94a3b8?text=UX+Checklist" },
    ],
  },
  footer: { text: "Discover 200+ more resources", linkText: "View all resources" }
};

// --- ABOUT DATA ---
export const aboutData = {
  layout: "grid",
  sidebar: [
    { id: "company", name: "Company", icon: "Building2" },
    { id: "locations", name: "Locations", icon: "Globe" },
    { id: "faq", name: "FAQ", icon: "HelpCircle" },
  ],
  content: {
    "company": [
      { title: "About App Guru", description: "For over a decade, we've helped startups, nonprofits, and corporations build impactful products.", icon: "Info" },
      { title: "Careers", description: "Build the career you want with App Guru. Find fulfillment and create impact.", icon: "Briefcase" },
      { title: "Press & Media", description: "Catch up on our latest company news and announcements.", icon: "Newspaper" },
      { title: "Pricing & Engagement Models", description: "Tailored pricing for your needs. Custom-built products to help you scale.", icon: "DollarSign" },
      { title: "Our Process", description: "We leverage product strategy, UX research, UI/UX design, and development seamlessly.", icon: "Repeat" },
    ],
    "locations": [
      { title: "New York (HQ)", description: "123 Tech Avenue, New York, NY 10001. Our main hub for strategy and design.", icon: "MapPin" },
      { title: "San Francisco", description: "456 Innovation Drive, San Francisco, CA 94105. Focused on cutting-edge technology.", icon: "MapPin" },
      { title: "London, UK", description: "789 Digital Lane, London, UK EC1A 1BB. Serving our European clients.", icon: "MapPin" },
      { title: "Remote & Global", description: "We utilize a global talent pool to deliver exceptional results around the clock.", icon: "Globe" },
    ],
    "faq": [
      { title: "How long does it take to build an MVP?", description: "Typically, an MVP takes 3-6 months, depending on complexity and scope.", icon: "Gauge" },
      { title: "What is your typical team structure?", description: "We assign a PM, UX/UI Designer, Tech Lead, and 2-4 Developers.", icon: "Building2" },
      { title: "Do you offer post-launch support?", description: "Yes, we offer various support and maintenance packages.", icon: "ShieldCheck" },
      { title: "What technologies do you specialize in?", description: "We specialize in React, Node.js, Python, Swift, and Kotlin.", icon: "Code" },
    ],
  },
  callouts: {
    "faq": {
      tag: "Still have questions?",
      title: "Talk to a Solutions Architect",
      description: "Get detailed answers regarding your specific project needs.",
      linkText: "Contact Us",
      link: "/contact"
    },
  }
};
