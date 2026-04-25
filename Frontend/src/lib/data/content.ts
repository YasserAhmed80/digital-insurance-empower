import type { LucideIcon } from "lucide-react";
import {
  Award,
  BadgeCheck,
  Banknote,
  BarChart3,
  Bot,
  Brain,
  Briefcase,
  Building2,
  ClipboardList,
  Cloud,
  Compass,
  Cpu,
  Database,
  FileSearch,
  Gauge,
  Heart,
  HeartPulse,
  Home,
  LineChart,
  MessagesSquare,
  Plug,
  Receipt,
  RefreshCw,
  Rocket,
  Settings2,
  Shield,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  Users,
  Workflow,
} from "lucide-react";

export type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type FeatureCard = IconCard & {
  bullets: string[];
};

export const certifications: IconCard[] = [
  {
    title: "FLMI",
    description:
      "Fellow, Life Management Institute – deep insurance domain expertise.",
    icon: Award,
  },
  {
    title: "PMP",
    description:
      "Project Management Professional – rigorous project planning & execution.",
    icon: ClipboardList,
  },
  {
    title: "TOGAF",
    description:
      "Enterprise Architecture – strategic architecture design and governance.",
    icon: Compass,
  },
  {
    title: "ITIL",
    description:
      "Information Technology Infrastructure Library – service management excellence.",
    icon: Settings2,
  },
  {
    title: "LSSGB",
    description:
      "Lean Six Sigma Green Belt – process optimization & operational efficiency.",
    icon: Gauge,
  },
  {
    title: "AWS Certified",
    description:
      "Amazon Web Services – cloud-native, scalable solution delivery.",
    icon: Cloud,
  },
];

export const functionalExpertise: IconCard[] = [
  { title: "Lead Management", description: "End-to-end lead capture & nurture flows.", icon: Target },
  { title: "Underwriting", description: "Risk assessment and decisioning workflows.", icon: FileSearch },
  { title: "Policy Admin", description: "Issuance, endorsements, renewals at scale.", icon: ClipboardList },
  { title: "Billing & Collection", description: "Premium calculation, invoicing, collections.", icon: Receipt },
  { title: "Claims", description: "FNOL through settlement automation.", icon: Shield },
  { title: "Customer Service", description: "Omnichannel servicing & self-service portals.", icon: Users },
  { title: "Reinsurance", description: "Treaty & facultative cession management.", icon: RefreshCw },
  { title: "Investments", description: "Unit-linked investment, manage funds and calculate unit prices.", icon: LineChart },
];

export const productExpertise: IconCard[] = [
  { title: "Protection Life", description: "Term, whole life, and endowment products.", icon: Heart },
  { title: "Unit-Linked Insurance", description: "Investment-linked protection for individuals.", icon: TrendingUp },
  { title: "Group Life Insurance", description: "Protection insurance for corporate employees.", icon: Users },
  { title: "Group Pension", description: "Saving plans for corporate employees.", icon: Briefcase },
  { title: "Group Consumer Products", description: "Loan and credit insurance solutions.", icon: Banknote },
  { title: "MicroInsurance", description: "Micro finance insurance products.", icon: Sparkles },
  { title: "P&C Insurance", description: "Property & casualty, motor, and marine lines.", icon: Home },
  { title: "Medical Insurance", description: "Health products for retail and corporate clients.", icon: Stethoscope },
];

export type ServiceCard = {
  title: string;
  description: string;
  tag: string;
  icon: LucideIcon;
};

export const services: ServiceCard[] = [
  {
    title: "Digital Transformation Consulting",
    description:
      "Strategic roadmaps and implementation plans to guide your organization's digital transformation in insurance journey.",
    tag: "Digital Transformation in Insurance",
    icon: Rocket,
  },
  {
    title: "Core Insurance System Development",
    description:
      "Custom-built policy, claims, and billing systems designed for your specific business needs with modern architecture.",
    tag: "Core Insurance System",
    icon: Cpu,
  },
  {
    title: "Legacy System Modernization",
    description:
      "Seamless migration from outdated systems to modern, flexible insurance technology platforms.",
    tag: "Legacy System Modernization",
    icon: RefreshCw,
  },
  {
    title: "CRM & Workflow Automation",
    description:
      "Streamline customer interactions and internal processes with intelligent CRM for insurance companies and automation.",
    tag: "CRM for Insurance Companies",
    icon: Workflow,
  },
  {
    title: "Insurance Data Analytics",
    description:
      "Transform raw data into actionable insights with our advanced data platform for insurance analytics solutions.",
    tag: "Insurance Data Analytics",
    icon: BarChart3,
  },
  {
    title: "Insurance Integration Services",
    description:
      "Connect systems, platforms, and partners with secure, reliable insurance integration services.",
    tag: "Insurance Integration Services",
    icon: Plug,
  },
];

export const aiCapabilities: FeatureCard[] = [
  {
    title: "RAG Knowledge Systems",
    description:
      "Retrieval-augmented generation for insurance knowledge management and policy administration enhancement.",
    icon: Database,
    bullets: [
      "Automated document understanding",
      "Intelligent policy interpretation",
      "Knowledge extraction from legacy docs",
    ],
  },
  {
    title: "AI Chatbots for Insurance",
    description:
      "AI-powered conversation systems for customer and agent support to enhance customer experience.",
    icon: Bot,
    bullets: [
      "24/7 customer service automation",
      "Policy and claims guidance",
      "Seamless human handoff",
    ],
  },
  {
    title: "Predictive Analytics",
    description:
      "Advanced analytics for sales optimization, risk assessment, and customer retention.",
    icon: LineChart,
    bullets: [
      "Conversion probability prediction",
      "Churn risk identification",
      "Cross-sell opportunity detection",
    ],
  },
  {
    title: "AI for Underwriting",
    description:
      "Advanced risk assessment and automated underwriting workflows for insurance process optimization.",
    icon: Brain,
    bullets: [
      "Risk factor identification",
      "Automated decision support",
      "Fraud pattern detection",
    ],
  },
];

export type ProcessStep = { step: number; title: string; description: string };

export const aiProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Assessment & Strategy",
    description:
      "We analyze your current processes and identify high-value AI in insurance opportunities.",
  },
  {
    step: 2,
    title: "Proof of Concept",
    description:
      "Develop a focused AI solution to validate the approach and demonstrate value.",
  },
  {
    step: 3,
    title: "Integration & Scaling",
    description:
      "Seamlessly integrate AI capabilities with your existing core insurance system and workflows.",
  },
  {
    step: 4,
    title: "Monitoring & Optimization",
    description:
      "Continuous insurance process optimization through performance tracking and model refinement.",
  },
];

export const reasons: IconCard[] = [
  {
    title: "Deep Domain + Technical Know-how",
    description:
      "We combine insurance expertise with cutting-edge technical capabilities to deliver software that truly addresses industry needs.",
    icon: Brain,
  },
  {
    title: "Proven Track Record",
    description:
      "100+ successful digital insurance solutions delivered to insurance carriers across life, health, and P&C sectors.",
    icon: Award,
  },
  {
    title: "Scalable Architecture",
    description:
      "Our core insurance system solutions are built to grow with your business, handling increasing volumes and evolving requirements.",
    icon: BarChart3,
  },
  {
    title: "Fast Delivery, Lower Costs",
    description:
      "Agile methodology and specialized expertise enable quicker implementation and better ROI.",
    icon: Rocket,
  },
  {
    title: "Clear Vision for the Future",
    description:
      "We partner with you for the long term, anticipating industry trends to evolve your systems accordingly.",
    icon: Sparkles,
  },
  {
    title: "Compliant by Design",
    description:
      "Our policy administration software incorporates regulatory requirements from the ground up, reducing compliance overhead.",
    icon: ShieldCheck,
  },
];

export const knowPillars: IconCard[] = [
  { title: "We know the business.", description: "Decades inside insurance carriers and brokers.", icon: Briefcase },
  { title: "We know the journey.", description: "From legacy mainframes to cloud-native cores.", icon: Compass },
  { title: "We know the technology.", description: "Modern stacks, data platforms, AI and integration.", icon: Cpu },
  { title: "We know the pain points.", description: "And most importantly — we know what's next.", icon: MessagesSquare },
];

export const stats = {
  experience: 23,
  coreApps: 20,
  projects: 100,
  changes: 1000,
  problemSolving: 3000,
  analyticsReports: 1200,
  clients: 40,
  satisfaction: 97,
  reductions: [
    { value: 70, label: "Faster policy issuance" },
    { value: 60, label: "Faster claims processing" },
    { value: 40, label: "Higher CSAT scores" },
  ],
  aiBenefits: [
    { value: 30, label: "Reduction in claims leakage" },
    { value: 25, label: "Improved risk-assessment accuracy" },
    { value: 40, label: "Faster claims with AI chatbots" },
  ],
} as const;

export const companyInfo = {
  name: "InsurTech-Egypt",
  tagline: "Smarter Insurance. Powered by Experience. Driven by Tech.",
  subline: "From Legacy to Leadership – Your Digital Transformation Partner",
  address: "Egypt, Cairo, 5th Settlement",
  cr: "234352",
  taxId: "763-119-458",
  email: "info@insurtech-egypt.com",
  phone: "+20 102 878 7773",
} as const;

export const navLinks: { href: string; label: string }[] = [
  { href: "/#about", label: "About" },
  { href: "/#team", label: "Team" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#services", label: "Services" },
  { href: "/#ai", label: "AI Solutions" },
  { href: "/#why-us", label: "Why Us" },
];

// Re-export icon to keep imports tidy elsewhere if needed
export const Icons = { Banknote };
