import { useParams, Link, Navigate } from "react-router";
import {
  Briefcase, Home, Scale, Users, FileText, Landmark, Building,
  Calculator, TrendingUp, Shield, Target, ArrowRight, CheckCircle,
  ArrowLeft, MessageCircle, Phone, Globe
} from "lucide-react";
import { motion } from "motion/react";
import { useMemo } from "react";
import { useSEO } from "../../hooks/useSEO";

const WHATSAPP_NUMBER = "923247800007";
const WHATSAPP_URL = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const services: Record<string, {
  slug: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  longDesc: string;
  heroImage: string;
  sideImage: string;
  services: string[];
  process: { step: string; detail: string }[];
  whyUs: string[];
}> = {
  "corporate-commercial-law": {
    slug: "corporate-commercial-law",
    icon: Briefcase,
    title: "Corporate & Commercial Law",
    tagline: "End-to-End Business Legal Solutions",
    description:
      "Comprehensive corporate legal services including company formations, partnership deeds, business regulations, and commercial contracts for all types of business entities.",
    longDesc:
      "Our Corporate & Commercial Law practice is the backbone of our firm. Whether you are launching a startup, expanding an existing enterprise, or navigating complex multi-party transactions, our seasoned corporate attorneys provide clear, strategic counsel at every step. We handle everything from initial company registration and shareholders' agreements to day-to-day commercial contracts, joint ventures, and mergers & acquisitions. We are deeply familiar with SECP regulations, FBR compliance requirements, and provincial registration frameworks—ensuring your business operates on a rock-solid legal foundation.",
    heroImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=80",
    sideImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    services: [
      "Company Formation (Pvt. Ltd, LLC, SMC)",
      "Partnership Deeds & LLP Formation",
      "SECP & FBR Registration",
      "Business Licensing & Permits",
      "Corporate Governance & Board Resolutions",
      "Commercial Contracts & MoUs",
      "Shareholder & Investment Agreements",
      "Joint Ventures & Strategic Alliances",
      "Mergers, Acquisitions & Due Diligence",
      "Corporate Restructuring & Winding Up",
    ],
    process: [
      { step: "Initial Consultation", detail: "We understand your business structure, goals and immediate legal needs." },
      { step: "Documentation Review", detail: "Existing documents are audited for compliance and risk." },
      { step: "Strategy & Drafting", detail: "Our team drafts or revises all required legal instruments." },
      { step: "Filing & Registration", detail: "We handle all filings with SECP, FBR, and relevant authorities." },
      { step: "Ongoing Advisory", detail: "Continued legal support as your business grows." },
    ],
    whyUs: [
      "SECP-approved company formation specialists",
      "Multi-sector commercial contract expertise",
      "Confidential, results-driven advisory",
      "Fast turnaround on all filings",
    ],
  },
  "property-transfer-conveyancing": {
    slug: "property-transfer-conveyancing",
    icon: Home,
    title: "Property Transfer & Conveyancing",
    tagline: "Secure Property Transactions from Start to Finish",
    description:
      "Complete property legal services covering transfer of immovable property, registry matters, property documentation, and real estate transactions.",
    longDesc:
      "Property deals represent some of the most significant financial decisions in a person's life. Our Property & Conveyancing team ensures that every transaction—whether you are buying, selling, gifting, or leasing—is legally sound and free of encumbrances. We conduct thorough title searches, prepare all transfer documents, liaise with revenue authorities for mutation, and represent clients before courts in property disputes. From urban plots to agricultural land, our expertise spans the full spectrum of Pakistani real-estate law.",
    heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80",
    sideImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    services: [
      "Property Transfer Deeds & Sale Deeds",
      "Registry & Sub-Registrar Filings",
      "Title Verification & Search",
      "Mutation (Intiqaal) of Property",
      "Sale / Purchase Agreements",
      "Lease & Rental Deeds",
      "Gift Deeds (Hiba Nama)",
      "Mortgage & Hypothecation Documents",
      "Property Dispute Resolution",
      "Power of Attorney for Property",
    ],
    process: [
      { step: "Title Search", detail: "Comprehensive title history and encumbrance check." },
      { step: "Due Diligence", detail: "Verification of ownership, taxes, and planning permissions." },
      { step: "Agreement Drafting", detail: "Legally binding sale/purchase or lease agreements prepared." },
      { step: "Registration", detail: "Filing at Sub-Registrar office and revenue authority." },
      { step: "Mutation", detail: "Transfer of ownership record in Patwari/Revenue records." },
    ],
    whyUs: [
      "30+ years of combined property law experience",
      "Extensive knowledge of Punjab Revenue Act",
      "Coordination with local Revenue offices",
      "Transparent fee structure, no hidden costs",
    ],
  },
  "civil-criminal-litigation": {
    slug: "civil-criminal-litigation",
    icon: Scale,
    title: "Civil & Criminal Litigation",
    tagline: "Fearless Advocacy in Every Courtroom",
    description:
      "Expert representation in all civil and criminal matters before courts of law, from case filing to final judgment and appeals.",
    longDesc:
      "Litigation demands not just legal knowledge but courtroom experience, tactical thinking, and unwavering commitment. Our litigators have appeared before District Courts, High Courts, and Special Tribunals across Punjab. We represent plaintiffs and defendants alike in civil suits, manage criminal defence cases with the utmost seriousness, and pursue every available avenue—from pre-trial negotiation to post-conviction appeals—to protect our clients' rights and freedoms.",
    heroImage: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=1400&q=80",
    sideImage: "https://images.unsplash.com/photo-1631194758628-71ec7c35137e?w=800&q=80",
    services: [
      "Civil Suit Filing & Defense",
      "Criminal Defence & Bail Applications",
      "Appeals & Revisions in Superior Courts",
      "Injunctions & Stay Orders",
      "Recovery & Execution of Decrees",
      "Writ Petitions (High Court)",
      "Trial Advocacy & Witness Examination",
      "Legal Opinions & Case Assessment",
      "Mediation & Alternate Dispute Resolution",
      "Consumer Court & Tribunal Representation",
    ],
    process: [
      { step: "Case Assessment", detail: "Thorough review of facts, evidence, and applicable law." },
      { step: "Legal Strategy", detail: "Customised litigation roadmap for your specific case." },
      { step: "Court Filing", detail: "Preparation and filing of all pleadings and applications." },
      { step: "Hearing Representation", detail: "Skilled oral arguments and cross-examination at every hearing." },
      { step: "Execution & Appeal", detail: "Enforcement of judgments or appeal to superior courts." },
    ],
    whyUs: [
      "Registered with Punjab Bar Council",
      "99% success rate in defended cases",
      "24/7 emergency legal support",
      "Experienced in both District and High Court proceedings",
    ],
  },
  "banking-finance-law": {
    slug: "banking-finance-law",
    icon: Landmark,
    title: "Banking & Finance Law",
    tagline: "Navigating Complex Financial Legal Landscapes",
    description:
      "Specialised services in banking regulations, financial transactions, loan documentation, recovery matters, and banking dispute resolution.",
    longDesc:
      "The intersection of law and finance demands precision and regulatory expertise. Our Banking & Finance team advises commercial banks, microfinance institutions, corporates, and individuals on all aspects of financial law in Pakistan. We draft and vet loan agreements, prepare security documentation, represent clients in Banking Courts for recovery proceedings, and provide advisory on SBP regulations. Our experience spans conventional and Islamic banking instruments alike.",
    heroImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=80",
    sideImage: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=800&q=80",
    services: [
      "Loan Agreement Drafting & Review",
      "Mortgage & Pledge Documentation",
      "Banking Court Recovery Proceedings",
      "SBP Regulatory Compliance",
      "Letters of Credit & Bank Guarantees",
      "Debt Restructuring & Rescheduling",
      "Islamic Finance Instruments (Ijara, Murabaha)",
      "Financial Dispute Resolution",
      "Cheque Dishonour Cases (Section 489-F)",
      "DFI & NBFI Legal Advisory",
    ],
    process: [
      { step: "Initial Assessment", detail: "Review of financial documents and exposure analysis." },
      { step: "Documentation", detail: "Drafting of all required security and facility documents." },
      { step: "Regulatory Filing", detail: "SBP/SECP filings and statutory registrations." },
      { step: "Dispute Resolution", detail: "Negotiation or court representation as required." },
      { step: "Recovery", detail: "Execution of banking court decrees and asset recovery." },
    ],
    whyUs: [
      "Deep SBP regulatory knowledge",
      "Experience with Islamic finance structures",
      "Proven track record in Banking Court recoveries",
      "Cross-sector financial advisory capability",
    ],
  },
  "insurance-law": {
    slug: "insurance-law",
    icon: Shield,
    title: "Insurance Law",
    tagline: "Protecting Your Rights Under Every Policy",
    description:
      "Complete insurance legal services including policy drafting, claims processing, insurance disputes, and representation before insurance authorities.",
    longDesc:
      "Insurance disputes can be complex, technical, and emotionally draining. Our Insurance Law practice helps policyholders, claimants, and insurance companies navigate the intricate regulatory and legal framework governing the industry in Pakistan. We review policies for hidden exclusions, pursue denied or underpaid claims, and represent clients before the Insurance Tribunal and SECP. Whether it is a life claim, motor claim, health claim, or commercial property loss, we fight to ensure you receive what you are rightfully owed.",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80",
    sideImage: "https://images.unsplash.com/photo-1521791055366-0d553872952f?w=800&q=80",
    services: [
      "Insurance Policy Review & Vetting",
      "Life Insurance Claim Processing",
      "Health & Medical Insurance Disputes",
      "Motor Insurance Claims",
      "Fire & Property Insurance Matters",
      "Third-Party Liability Claims",
      "Claim Settlement Negotiations",
      "Insurance Tribunal Representation",
      "SECP Insurance Regulatory Advisory",
      "Reinsurance Disputes",
    ],
    process: [
      { step: "Policy Analysis", detail: "Detailed review of your insurance policy terms and exclusions." },
      { step: "Claim Documentation", detail: "Preparation and submission of all claim documents." },
      { step: "Insurer Negotiation", detail: "Direct negotiation with the insurer or their legal team." },
      { step: "Tribunal Filing", detail: "Filing before Insurance Tribunal if settlement fails." },
      { step: "Award Enforcement", detail: "Execution of Tribunal awards or court orders." },
    ],
    whyUs: [
      "SECP-registered insurance law specialists",
      "Experience across all classes of insurance",
      "Aggressive claim recovery strategy",
      "No win, no fee available on select matters",
    ],
  },
  "taxation-tax-planning": {
    slug: "taxation-tax-planning",
    icon: Calculator,
    title: "Taxation & Tax Planning",
    tagline: "Smart Tax Strategies, Maximum Compliance",
    description:
      "Expert tax advisory services, tax planning, compliance assistance, and representation before tax authorities including FBR and provincial tax departments.",
    longDesc:
      "In a rapidly evolving tax landscape, strategic planning and rigorous compliance are non-negotiable. Our Taxation team combines deep knowledge of federal and provincial tax law with practical business insight to deliver solutions that minimise liability and avoid regulatory exposure. We assist individuals, SMEs, and large corporations with income tax returns, sales tax registrations, WHT compliance, and represent them before FBR officers, Appellate Commissioners, and the Income Tax Appellate Tribunal (ITAT).",
    heroImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80",
    sideImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    services: [
      "Income Tax Return Filing (Individual & Corporate)",
      "Sales Tax / GST Registration & Returns",
      "Withholding Tax Compliance",
      "FBR Notice Response & Audit Defence",
      "Tax Planning & Structuring",
      "Tax Assessment Appeals",
      "Income Tax Appellate Tribunal (ITAT) Representation",
      "Advance Tax Computation",
      "Transfer Pricing Advisory",
      "Tax Refund Claims",
    ],
    process: [
      { step: "Tax Health Check", detail: "Review of current compliance status and exposure." },
      { step: "Planning Strategy", detail: "Identification of legal tax-saving opportunities." },
      { step: "Return Preparation", detail: "Accurate preparation and filing of all tax returns." },
      { step: "Authority Liaison", detail: "Communication with FBR officers on your behalf." },
      { step: "Appeal Representation", detail: "Filing and arguing appeals before relevant tribunals." },
    ],
    whyUs: [
      "Comprehensive knowledge of Pakistani tax statutes",
      "FBR audit defence track record",
      "Proactive tax planning approach",
      "Cross-discipline coordination with corporate and banking teams",
    ],
  },
  "inheritance-succession-wills": {
    slug: "inheritance-succession-wills",
    icon: FileText,
    title: "Inheritance, Succession & Wills",
    tagline: "Preserving Your Legacy with Legal Precision",
    description:
      "Professional services for estate planning, will drafting, succession certificates, inheritance disputes, and probate matters under Islamic and civil law.",
    longDesc:
      "Matters of inheritance touch on deeply personal values and significant financial interests. Our Succession & Wills team navigates both Islamic (Sharia) law and civil succession rules to deliver clear, enforceable outcomes for families and estates. We draft Wills that stand up to challenge, obtain Succession Certificates from courts with speed, and represent beneficiaries or executors in contentious probate proceedings. We also advise on estate planning strategies that minimise future disputes.",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&q=80",
    sideImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    services: [
      "Will Drafting & Registration",
      "Succession Certificate Applications",
      "Letters of Administration",
      "Inheritance Dispute Resolution",
      "Estate Planning & Asset Protection",
      "Legal Heirship Certificates",
      "Probate Court Representation",
      "Gift / Hiba Settlements",
      "Family Settlement Agreements",
      "Islamic Inheritance (Faraid) Advisory",
    ],
    process: [
      { step: "Estate Review", detail: "Inventory of all assets, liabilities, and beneficiaries." },
      { step: "Will / Plan Drafting", detail: "Legally sound will or succession plan prepared." },
      { step: "Court Application", detail: "Filing for Succession Certificate or Letters of Administration." },
      { step: "Court Hearing", detail: "Representation at all probate proceedings." },
      { step: "Distribution", detail: "Legal oversight of estate distribution to beneficiaries." },
    ],
    whyUs: [
      "Expertise in both Islamic and civil succession law",
      "Sensitive, family-first advisory approach",
      "Fast succession certificate processing",
      "Experienced in complex multi-asset estates",
    ],
  },
  "labour-employment-laws": {
    slug: "labour-employment-laws",
    icon: Users,
    title: "Labour & Employment Laws",
    tagline: "Fair, Compliant, and Efficient Workplace Law",
    description:
      "Complete labour law services covering employment contracts, workplace regulations, labour disputes, and representation before labour courts.",
    longDesc:
      "Employment relationships are governed by a dense web of federal and provincial legislation in Pakistan. Our Labour Law practice advises both employers and employees, drafting compliant employment contracts, devising termination strategies that minimise litigation risk, and representing parties before Labour Courts, Industrial Relations Courts, and Service Tribunals. We also assist with EOBI, PESSI/SESSI, and Workers' Welfare Fund compliance for businesses of all sizes.",
    heroImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1400&q=80",
    sideImage: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80",
    services: [
      "Employment Contract Drafting & Review",
      "Termination & Retrenchment Advisory",
      "Labour Court Representation",
      "EOBI / PESSI Compliance",
      "Workers' Welfare Fund (WWF) Matters",
      "Domestic Enquiry Proceedings",
      "Industrial Relations & CBA Negotiations",
      "Service Tribunal Appeals",
      "Wrongful Dismissal & Reinstatement Cases",
      "Workplace Harassment Complaints",
    ],
    process: [
      { step: "HR Policy Audit", detail: "Review existing employment contracts and HR policies." },
      { step: "Compliance Gap Analysis", detail: "Identify areas of non-compliance with labour laws." },
      { step: "Documentation", detail: "Drafting of compliant employment and severance documents." },
      { step: "Dispute Management", detail: "Conciliation, mediation, or court representation." },
      { step: "Ongoing Retainer", detail: "Continuous HR legal support on a retainer basis." },
    ],
    whyUs: [
      "Employer and employee-side experience",
      "Knowledge of all provincial labour statutes",
      "Strong Service Tribunal representation record",
      "Proactive compliance advisory to avoid disputes",
    ],
  },
  "administrative-law-organizations": {
    slug: "administrative-law-organizations",
    icon: Building,
    title: "Administrative Law & Organizations",
    tagline: "Regulatory Clarity for Institutions and Enterprises",
    description:
      "Legal support for administrative bodies, regulatory compliance, governmental procedures, and organizational legal matters.",
    longDesc:
      "Navigating governmental and regulatory procedures in Pakistan requires specialist knowledge and established relationships. Our Administrative Law team advises public bodies, NGOs, educational institutions, trade associations, and private enterprises on regulatory compliance, licence applications, and challenges to administrative decisions. We file writ petitions before High Courts to challenge unlawful government action and represent clients in departmental appeals and inquiry proceedings.",
    heroImage: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=1400&q=80",
    sideImage: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80",
    services: [
      "Regulatory Compliance Advisory",
      "Licence & NOC Applications",
      "Government Liaison & Lobbying",
      "Departmental Inquiry Representation",
      "Writ Petitions (Constitutional Law)",
      "Public Procurement Law",
      "NGO / Society Registration & Compliance",
      "Trust Deed Drafting & Registration",
      "Administrative Appeals",
      "Permit & Approval Procedures",
    ],
    process: [
      { step: "Regulatory Mapping", detail: "Identify all applicable regulatory frameworks." },
      { step: "Application Preparation", detail: "Compile and submit licence/NOC applications." },
      { step: "Authority Liaison", detail: "Direct engagement with relevant government departments." },
      { step: "Challenge Proceedings", detail: "Court challenge of unlawful administrative action." },
      { step: "Compliance Monitoring", detail: "Ongoing monitoring of regulatory changes." },
    ],
    whyUs: [
      "Extensive government liaison experience",
      "Constitutional law expertise",
      "Strong track record in writ jurisdiction",
      "Registered with Punjab Bar Council",
    ],
  },
  "court-management-services": {
    slug: "court-management-services",
    icon: Target,
    title: "Court Management Services",
    tagline: "Your Case, Professionally Managed at Every Step",
    description:
      "Complete court management including case filing, documentation preparation, court appearances, case follow-up, and coordination with all levels of judiciary.",
    longDesc:
      "Litigation is not just about the law—it is about logistics, discipline, and relentless follow-up. Our Court Management Services offer end-to-end case administration, ensuring nothing falls through the cracks. From the moment a case is filed to the day judgment is pronounced (and beyond), our dedicated court managers track every hearing, procure every order, and keep clients informed at every stage. This service is ideal for businesses, government bodies, and individuals who need a professional team to manage multiple concurrent matters.",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1400&q=80",
    sideImage: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80",
    services: [
      "Case Filing & Cause Listing",
      "Court Diary & Hearing Management",
      "Document Submission & Procurement",
      "Certified Copy Acquisition",
      "Judicial Coordination & Follow-Up",
      "Status Reports for Corporate Clients",
      "Urgent Mention & Listing Applications",
      "Order Sheet Monitoring",
      "Multi-Court Case Tracking",
      "Post-Judgment Enforcement",
    ],
    process: [
      { step: "Case Intake", detail: "All case details, documents, and deadlines recorded." },
      { step: "Cause Listing", detail: "Case listed before appropriate court / bench." },
      { step: "Hearing Attendance", detail: "Legal team present at every scheduled hearing." },
      { step: "Order Procurement", detail: "Certified copies of orders obtained same day." },
      { step: "Client Reporting", detail: "Detailed updates after every court appearance." },
    ],
    whyUs: [
      "Dedicated case managers for each matter",
      "Digital case tracking system",
      "Zero missed hearings policy",
      "Multi-court simultaneous management capacity",
    ],
  },
  "trademark-intellectual-property": {
    slug: "trademark-intellectual-property",
    icon: FileText,
    title: "Trademark & Intellectual Property",
    tagline: "Protect What Makes You Unique",
    description:
      "Protection and registration of intellectual property rights including trademarks, copyrights, patents, and IP litigation.",
    longDesc:
      "Your brand, innovation, and creative works are among your most valuable assets. Our Intellectual Property team helps businesses and individuals register and enforce their IP rights in Pakistan and internationally. We handle the full lifecycle—from trademark searches and application filing with the Intellectual Property Organisation of Pakistan (IPO-Pakistan) to opposition proceedings, licensing negotiations, and infringement litigation. Our team also advises on copyright protection, patent applications, and trade secret strategies.",
    heroImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1400&q=80",
    sideImage: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=800&q=80",
    services: [
      "Trademark Search & Availability Report",
      "Trademark Application Filing (IPO-Pakistan)",
      "Copyright Registration",
      "Patent Application & Prosecution",
      "IP Portfolio Management",
      "Trademark Opposition & Cancellation",
      "Licensing & Assignment Agreements",
      "Infringement Notices & Litigation",
      "Trade Secret Protection Advisory",
      "Domain Name Disputes",
    ],
    process: [
      { step: "IP Audit", detail: "Identify all protectable intellectual property assets." },
      { step: "Search & Clearance", detail: "Conflict search before filing application." },
      { step: "Application Filing", detail: "Filing with IPO-Pakistan and payment of fees." },
      { step: "Prosecution", detail: "Responding to examiner objections and securing registration." },
      { step: "Enforcement", detail: "Cease & desist, licensing, or infringement litigation." },
    ],
    whyUs: [
      "IPO-Pakistan registered trademark agents",
      "Experience in complex IP litigation",
      "International trademark filing capability",
      "Brand protection strategy consulting",
    ],
  },
  "contract-drafting-review": {
    slug: "contract-drafting-review",
    icon: Briefcase,
    title: "Contract Drafting & Review",
    tagline: "Agreements That Protect Your Interests",
    description:
      "Professional drafting, vetting, and review of all types of legal contracts, agreements, and commercial documents.",
    longDesc:
      "A poorly drafted contract can expose you to liability, disputes, and financial loss. Our Contract Drafting & Review team brings meticulous attention to detail and extensive commercial law experience to every document we touch. Whether you need a bespoke supply agreement, a franchise contract, a service-level agreement, or a simple MoU, we ensure that your interests are protected, obligations are clearly defined, and exit provisions are practical. We also review contracts prepared by counterparties and flag every risk before you sign.",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80",
    sideImage: "https://images.unsplash.com/photo-1485796826113-174aa68fd81b?w=800&q=80",
    services: [
      "Commercial Contract Drafting",
      "Supply & Procurement Agreements",
      "Service Level Agreements (SLAs)",
      "Franchise & Distribution Agreements",
      "MoU / MoA Preparation",
      "Employment & Consultancy Agreements",
      "Non-Disclosure Agreements (NDAs)",
      "Contract Risk Assessment & Redlining",
      "Contract Negotiation Support",
      "Legal Vetting of Third-Party Documents",
    ],
    process: [
      { step: "Requirements Briefing", detail: "Understand the commercial context and desired outcomes." },
      { step: "First Draft", detail: "Comprehensive contract drafted to your specifications." },
      { step: "Review & Refinement", detail: "Collaborative revision with client feedback incorporated." },
      { step: "Negotiation Support", detail: "Assistance during counterparty negotiations." },
      { step: "Execution", detail: "Guidance on proper signing, stamping, and storage." },
    ],
    whyUs: [
      "Multi-industry commercial contract experience",
      "Plain-English drafting with robust legal protection",
      "Rapid turnaround: standard contracts within 48 hours",
      "Unlimited revisions until you are satisfied",
    ],
  },
  "web-development-services": {
    slug: "web-development-services",
    icon: Globe,
    title: "Web Development Services",
    tagline: "Digital Presence Engineered for Professional Excellence",
    description:
      "Professional website design and development solutions tailored for law firms, legal professionals, SMEs, and corporate clients who demand a premium digital identity.",
    longDesc:
      "In today's digital-first world, your website is your most powerful first impression. BM Solicitor (Pvt) Limited's Digital Services Division delivers world-class web development solutions crafted specifically for legal firms, professional service providers, and business enterprises. Our expert development team combines cutting-edge technology with clean, conversion-focused design to build websites that not only look stunning but perform flawlessly across all devices and platforms. From a sleek law firm portfolio site to a full-featured client portal, we engineer digital experiences that establish authority, build trust, and generate enquiries 24/7.",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1400&q=80",
    sideImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    services: [
      "Custom Website Design & Development",
      "Law Firm & Legal Professional Websites",
      "Corporate & Business Portals",
      "Responsive & Mobile-First Design",
      "SEO-Optimised Architecture",
      "Content Management Systems (CMS)",
      "Client Intake & Contact Form Integration",
      "WhatsApp & Live Chat Integration",
      "E-Commerce & Payment Gateway Setup",
      "Website Maintenance & Security Updates",
      "Domain Registration & Hosting Setup",
      "Performance Optimisation & Speed Audits",
    ],
    process: [
      { step: "Discovery & Planning", detail: "Understand your brand, target audience, goals, and competitors." },
      { step: "UI/UX Design", detail: "High-fidelity mockups reviewed and approved by you." },
      { step: "Development", detail: "Clean, scalable code built on modern frameworks (React / Next.js)." },
      { step: "Testing & QA", detail: "Cross-browser, cross-device, and performance testing." },
      { step: "Launch & Support", detail: "Smooth deployment with 3 months of free post-launch support." },
    ],
    whyUs: [
      "Specialists in professional and legal sector websites",
      "Delivered using React, Next.js, and industry-best practices",
      "SEO-ready from day one",
      "Fast 2-4 week delivery for standard projects",
      "Ongoing maintenance plans available",
      "100% satisfaction guarantee",
    ],
  },
};

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? services[slug] : null;

  const jsonLd = useMemo(() => {
    if (!service) return undefined;
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "url": `https://bmsolicitor.co/practice-areas/${service.slug}`,
      "provider": {
        "@type": "LegalService",
        "name": "BM Solicitor (Pvt) Limited",
        "url": "https://bmsolicitor.co",
        "telephone": "+92-324-7800007",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lahore",
          "addressRegion": "Punjab",
          "addressCountry": "PK"
        }
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bmsolicitor.co/" },
          { "@type": "ListItem", "position": 2, "name": "Practice Areas", "item": "https://bmsolicitor.co/practice-areas" },
          { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://bmsolicitor.co/practice-areas/${service.slug}` }
        ]
      }
    };
  }, [service]);

  useSEO({
    title: service
      ? `${service.title} | BM Solicitor Lahore Pakistan | Expert Legal Services`
      : "Service Not Found | BM Solicitor",
    description: service
      ? `${service.description} BM Solicitor (Pvt) Limited, Lahore, Punjab. Punjab Bar Council registered. Free consultation. Call 03247800007.`
      : "The requested service page was not found.",
    path: `/practice-areas/${slug || ""}`,
    keywords: service
      ? `${service.title}, ${service.services.slice(0, 6).join(", ")}, lawyer Lahore, BM Solicitor, legal services Pakistan`
      : undefined,
    jsonLd,
  });

  if (!service) return <Navigate to="/practice-areas" replace />;

  const Icon = service.icon;
  const waMsg = `Salam! I am interested in your ${service.title} services. Please provide more information.`;

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 text-white/60 hover:text-accent text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Services
            </Link>
            <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
              <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                BM Solicitor — Legal Services
              </span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-3">
              {service.title}
            </h1>
            <p className="text-accent text-lg font-semibold mb-4">{service.tagline}</p>
            <p className="text-white/70 text-base lg:text-lg leading-relaxed max-w-3xl mb-8 mx-auto lg:mx-0">
              {service.description}
            </p>
            <div className="flex justify-center lg:justify-start">
              <motion.a
                href={WHATSAPP_URL(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold shadow-2xl hover:bg-[#128C7E] transition-colors text-base"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Detail Section ── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Long description + process */}
            <div className="lg:col-span-2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                  <div className="w-8 h-[2px] bg-accent" />
                  <span className="text-accent text-sm font-semibold tracking-widest uppercase">Overview</span>
                </div>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{service.longDesc}</p>
              </motion.div>

              {/* Side image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-xl"
              >
                <img
                  src={service.sideImage}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                />
              </motion.div>

              {/* Our Process */}
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                  <div className="w-8 h-[2px] bg-accent" />
                  <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Process</span>
                </div>
                <div className="space-y-4">
                  {service.process.map((p, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4 sm:gap-5 items-start"
                    >
                      <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {i + 1}
                      </div>
                      <div className="text-left">
                        <div className="font-bold text-primary mb-1 text-sm sm:text-base">{p.step}</div>
                        <div className="text-slate-600 text-xs sm:text-sm">{p.detail}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Services List */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 border border-slate-200 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-[2px] bg-accent" />
                  <span className="text-accent text-sm font-semibold uppercase tracking-wide">Services Included</span>
                </div>
                <ul className="space-y-2">
                  {service.services.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Why Us */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-primary rounded-xl p-6 text-white"
              >
                <h3 className="font-bold text-lg mb-4 text-accent">Why Choose Us</h3>
                <ul className="space-y-2">
                  {service.whyUs.map((w, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {w}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.a
                href={WHATSAPP_URL(waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl font-bold shadow-lg hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                <div>
                  <div className="text-sm font-bold">Chat on WhatsApp</div>
                  <div className="text-xs text-white/80">Instant Response Available</div>
                </div>
              </motion.a>

              {/* Call CTA */}
              <a
                href="tel:03247800007"
                className="flex items-center gap-3 bg-slate-100 border border-slate-200 text-primary px-6 py-4 rounded-xl font-bold hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-5 h-5 text-accent" />
                <div>
                  <div className="text-sm font-bold">Call Us Directly</div>
                  <div className="text-xs text-secondary">03247800007</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Ready to Discuss Your {service.title} Needs?
          </h2>
          <p className="text-white/80 mb-8 text-sm sm:text-lg">
            Contact BM Solicitor (Pvt) Limited today for a confidential consultation. We respond within hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={WHATSAPP_URL(waMsg)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold shadow-xl hover:bg-[#128C7E] transition-colors text-base"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Consultation
            </motion.a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-lg font-bold hover:bg-amber-500 transition-all shadow-xl text-base"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
