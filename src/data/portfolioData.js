// ============================================================
// portfolioData.js
// This one file controls ALL the text and links on the website.
// ============================================================

export const personalInfo = {
  name: "Archana Gudugunti",
  firstName: "Archana Gudugunti",
  brandName: "Archana Gudugunti", // shown in the preloader, navbar and footer
  title: "Data Analyst",
  location: "Bengaluru, India",
  phone: "+91 8050182411",
  emails: {
    primary: "arunambannagudugunti1234@gmail.com",
    secondary: "",
  },
  summary: "Electronics and Communication Engineering graduate aspiring to become a Data Analyst with skills in Python, NumPy, and Pandas.",
  resumeUrl: "/archana da resume2.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/archanagudugunti",
  linkedin: "https://www.linkedin.com/in/arun-arun-gudugunti-61b191366",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Archana Gudugunti",
  titleHighlight: "Data Analyst",
  subtitle: "Turning complex raw data into clean datasets, interactive visual dashboards, and actionable business insights.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:arunambannagudugunti1234@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/archana da resume2.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML) — keep it YOUR OWN trusted text.
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Archana Gudugunti</span>, a recent Electronics and Communication Engineering graduate with a strong interest in Data Analytics, currently sharpening my skills through the placement training program at TAP Academy. I have learned Python, NumPy, and Pandas and enjoy working with data, finding patterns, and solving problems. My goal is to become a skilled Data Analyst and continuously improve my technical skills.`,
  techStack: ["Python", "NumPy", "Pandas", "SQL", "Power BI"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured, data-driven approach to solving business problems from raw data to visual insights.",
  cards: [
    { number: "01", title: "Research", text: "Understand the business problem, identify key data sources, and extract raw data using SQL and Python." },
    { number: "02", title: "Design", text: "Clean and transform messy data with Pandas and NumPy, handling missing values, duplicates, and outliers." },
    { number: "03", title: "Develop", text: "Perform exploratory data analysis and statistical modeling to uncover patterns, trends, and correlations." },
    { number: "04", title: "Deploy", text: "Build interactive Power BI dashboards and present clear visual stories with actionable recommendations." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Python" }, { name: "NumPy" }, { name: "Pandas" }],
    },
    {
      title: "Databases & Querying",
      skills: [{ name: "SQL" }, { name: "Data Cleaning" }, { name: "Data Manipulation" }],
    },
    {
      title: "BI & Visualization",
      skills: [{ name: "Power BI" }, { name: "Excel" }, { name: "Data Visualization" }],
    },
    {
      title: "Analytics & Tools",
      skills: [{ name: "Statistics" }, { name: "Git & GitHub" }, { name: "VS Code" }],
    },
  ],
};

export const leadershipList = [];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Data Analytics Intern",
    duration: "5 Months",
    skills: ["Data Analysis", "Data Cleaning", "Data Manipulation", "Data Visualization", "Insight Generation"],
    tech: ["Python", "NumPy", "Pandas", "Excel"],
  },
];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborating smoothly with cross-functional teams to align data insights with business goals." },
  { name: "Problem Solving", icon: "🧩", desc: "Breaking complex business challenges down into structured analytical steps and clear solutions." },
  { name: "Communication", icon: "💬", desc: "Translating intricate data findings and metrics into simple, compelling visual stories for stakeholders." },
  { name: "Adaptability", icon: "⚡", desc: "Quickly learning new analytical tools, workflows, and technologies to deliver optimal project outcomes." },
];

export const projects = [
  {
    id: "project-one",
    number: "01",
    badge: "🚀 Flagship Project", // use null for no badge
    title: "E-commerce Sales Data Analysis",
    description: "Analyzed e-commerce sales data to identify top-selling products, sales trends, category-wise performance, and business insights.",
    techTags: ["Python", "Pandas", "NumPy", "Power BI"],
    links: { github: "https://github.com/archanagudugunti/Ecommerce-sales-analysis", demo: "" }, // demo "" shows "Demo Coming Soon"
    isFlagship: true,
  },
  {
    id: "project-two",
    number: "02",
    badge: null,
    title: "Customer Churn Analysis",
    description: "Analyzed customer data to identify churn patterns, understand customer behavior, and find factors affecting customer retention.",
    techTags: ["Python", "Pandas", "NumPy", "Data Visualization"],
    links: { github: "", demo: "" },
    isFlagship: false,
  },
  {
    id: "project-three",
    number: "03",
    badge: null,
    title: "Bank Customer and Loan Analysis",
    description: "Analyzed bank customer and loan data to understand loan distribution, customer demographics, loan status, and financial trends.",
    techTags: ["Python", "Pandas", "NumPy", "Data Visualization"],
    links: { github: "", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "Data Analytics Placement Training", issuer: "TAP Academy", icon: "🏅" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/arun-arun-gudugunti-61b191366",
};

export const education = {
  degree: "B.E. Electronics and Communication Engineering",
  institution: "PDA College of Engineering Kalburgi",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Data Analyst", "Python · SQL · Power BI", "Transforming Data into Actionable Insights"],
  credential: "B.E. Electronics and Communication Engineering",
  copyright: `© ${new Date().getFullYear()} Archana Gudugunti | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
