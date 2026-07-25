import { Link } from "react-router";
import {
  Briefcase,
  Home,
  Scale,
  Users,
  FileText,
  Landmark,
  Building,
  Calculator,
  TrendingUp,
  Shield,
  ArrowRight,
  Target,
  Globe,
  MessageCircle
} from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect, useMemo } from "react";
import { useSEO } from "../../hooks/useSEO";

const WHATSAPP_NUMBER = "923247800007";
const WHATSAPP_URL = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

const practiceSlides = [
  "https://images.unsplash.com/photo-1758518730178-6e237bc8b87d?w=1200&q=80",
  "https://images.unsplash.com/photo-1630265927428-a62b061a5270?w=1200&q=80",
  "https://images.unsplash.com/photo-1643149005402-ecac920f1d5e?w=1200&q=80",
];

export function PracticeAreas() {
  const [slide, setSlide] = useState(0);

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Practice Areas | BM Solicitor Legal Services",
    "url": "https://bmsolicitor.co/practice-areas",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bmsolicitor.co/" },
        { "@type": "ListItem", "position": 2, "name": "Practice Areas", "item": "https://bmsolicitor.co/practice-areas" }
      ]
    }
  }), []);

  useSEO({
    title: "Practice Areas | 13+ Legal Services | BM Solicitor Lahore Pakistan",
    description: "Explore 13+ legal practice areas at BM Solicitor — Corporate law, property transfer, civil & criminal litigation, banking, insurance, taxation, inheritance, labour law, IP, court management, contract drafting. Best lawyers in Lahore, Punjab.",
    path: "/practice-areas",
    keywords: "legal services Lahore, practice areas, corporate law Pakistan, property lawyer, civil litigation, criminal lawyer, banking law, insurance lawyer, tax consultant Lahore, inheritance law, labour law, trademark registration, contract lawyer, court management Pakistan",
    jsonLd,
  });

  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % practiceSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const practiceAreas = [
    {
      slug: "corporate-commercial-law",
      icon: Briefcase,
      title: "Corporate & Commercial Law",
      description: "Comprehensive corporate legal services including company formations, partnership deeds, business regulations, and commercial contracts for all types of business entities.",
      services: ["Company Formation", "Partnership Deeds", "LLP Formation", "Business Licensing", "Corporate Governance", "Commercial Contracts", "Shareholder Agreements", "Joint Ventures"],
    },
    {
      slug: "property-transfer-conveyancing",
      icon: Home,
      title: "Property Transfer & Conveyancing",
      description: "Complete property legal services covering transfer of immovable property, registry matters, property documentation, and real estate transactions.",
      services: ["Property Transfer Deeds", "Registry Services", "Title Verification", "Mutation of Property", "Sale/Purchase Agreements", "Lease Deeds", "Gift Deeds", "Property Disputes"],
    },
    {
      slug: "civil-criminal-litigation",
      icon: Scale,
      title: "Civil & Criminal Litigation",
      description: "Expert representation in all civil and criminal matters before courts of law, from case filing to final judgment and appeals.",
      services: ["Civil Litigation", "Criminal Defence", "Suit Filing", "Court Representation", "Appeals & Revisions", "Bail Applications", "Trial Advocacy", "Legal Opinions"],
    },
    {
      slug: "banking-finance-law",
      icon: Landmark,
      title: "Banking & Finance Law",
      description: "Specialized services in banking regulations, financial transactions, loan documentation, recovery matters, and banking dispute resolution.",
      services: ["Banking Disputes", "Loan Agreements", "Recovery Proceedings", "Financial Regulations", "Mortgage Documentation", "Bank Guarantees", "Letters of Credit", "Debt Recovery"],
    },
    {
      slug: "insurance-law",
      icon: Shield,
      title: "Insurance Law",
      description: "Complete insurance legal services including policy drafting, claims processing, insurance disputes, and representation before insurance authorities.",
      services: ["Insurance Claims", "Policy Review & Drafting", "Claim Settlements", "Insurance Disputes", "Coverage Analysis", "Third Party Claims", "Life Insurance Matters", "General Insurance"],
    },
    {
      slug: "taxation-tax-planning",
      icon: Calculator,
      title: "Taxation & Tax Planning",
      description: "Expert tax advisory services, tax planning, compliance assistance, and representation before tax authorities including FBR and provincial tax departments.",
      services: ["Income Tax Advisory", "Sales Tax Matters", "Tax Planning", "FBR Representation", "Tax Compliance", "Tax Assessments", "Tax Appeals", "Tax Refunds"],
    },
    {
      slug: "inheritance-succession-wills",
      icon: FileText,
      title: "Inheritance, Succession & Wills",
      description: "Professional services for estate planning, will drafting, succession certificates, inheritance disputes, and probate matters under Islamic and civil law.",
      services: ["Will Drafting", "Succession Certificates", "Estate Planning", "Inheritance Disputes", "Probate Matters", "Legal Heirship", "Gift Settlements", "Family Settlements"],
    },
    {
      slug: "labour-employment-laws",
      icon: Users,
      title: "Labour & Employment Laws",
      description: "Complete labour law services covering employment contracts, workplace regulations, labour disputes, and representation before labour courts.",
      services: ["Employment Contracts", "Labour Disputes", "EOBI Matters", "Workers Compensation", "Termination Cases", "Industrial Relations", "Service Tribunals", "Labour Court Representation"],
    },
    {
      slug: "administrative-law-organizations",
      icon: Building,
      title: "Administrative Law & Organizations",
      description: "Legal support for administrative bodies, regulatory compliance, governmental procedures, and organizational legal matters.",
      services: ["Administrative Law", "Regulatory Compliance", "Government Liaison", "License Applications", "NOC Procedures", "Permit Processing", "Public Authorities", "Departmental Appeals"],
    },
    {
      slug: "court-management-services",
      icon: Target,
      title: "Court Management Services",
      description: "Complete court management including case filing, documentation preparation, court appearances, case follow-up, and coordination with all levels of judiciary.",
      services: ["Case Filing & Documentation", "Court Appearances", "Case Status Monitoring", "Hearing Attendance", "Document Submission", "Order Procurement", "Case Diary Maintenance", "Judicial Coordination"],
    },
    {
      slug: "trademark-intellectual-property",
      icon: FileText,
      title: "Trademark & Intellectual Property",
      description: "Protection and registration of intellectual property rights including trademarks, copyrights, patents, and IP litigation.",
      services: ["Trademark Registration", "Copyright Protection", "Patent Applications", "IP Litigation", "Brand Protection", "Licensing Agreements", "Infringement Cases", "IPO Representation"],
    },
    {
      slug: "contract-drafting-review",
      icon: Briefcase,
      title: "Contract Drafting & Review",
      description: "Professional drafting, vetting, and review of all types of legal contracts, agreements, and commercial documents.",
      services: ["Contract Drafting", "Agreement Review", "MOU Preparation", "Service Agreements", "Supply Contracts", "Franchise Agreements", "Distribution Agreements", "Legal Vetting"],
    },
    {
      slug: "web-development-services",
      icon: Globe,
      title: "Web Development Services",
      description: "Professional website design and development for law firms, legal professionals, SMEs, and corporate clients who demand a premium digital identity.",
      services: ["Custom Website Design", "Law Firm Websites", "Corporate Portals", "Responsive Design", "SEO Optimisation", "CMS Integration", "WhatsApp Integration", "E-Commerce Setup"],
    },
  ];

  return (
    <div>
      {/* ── Hero with Slideshow ── */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {practiceSlides.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: slide === i ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-primary/88" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-4">
              BM Solicitor (Pvt) Limited
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Practice Areas
            </h1>
            <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
              <div className="w-10 h-[2px] bg-accent" />
              <span className="text-accent font-semibold text-sm">13 Specialised Practice Areas</span>
            </div>
            <p className="text-white/70 text-base lg:text-lg leading-relaxed">
              Comprehensive legal services across multiple specialisations, delivered by experienced
              professionals registered with Punjab Bar Council.
            </p>
          </div>

          <div className="flex gap-2 mt-10 justify-center lg:justify-start">
            {practiceSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`h-[3px] rounded-full transition-all duration-300 ${
                  slide === i ? 'w-8 bg-accent' : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { stat: '13+', label: 'Practice Areas' },
              { stat: '5000+', label: 'Clients Served' },
              { stat: '99%', label: 'Success Rate' },
              { stat: 'Punjab', label: 'Bar Council Registered' },
            ].map((s, i) => (
              <div key={i} className={`py-7 px-6 text-center ${i < 3 ? 'border-r border-slate-200' : ''}`}>
                <div className="text-2xl font-bold text-primary">{s.stat}</div>
                <div className="text-sm text-secondary mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Flip Cards Grid */}
      <section className="py-14 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-[2px] bg-accent" />
              <span className="text-accent text-sm font-semibold tracking-widest uppercase">What We Do</span>
              <div className="w-8 h-[2px] bg-accent" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-primary">Our Practice Areas</h2>
            <p className="text-secondary text-sm mt-2">Hover over a card to see key services</p>
          </div>

          <style>{`
            .flip-card { perspective: 1000px; }
            .flip-inner {
              position: relative;
              width: 100%;
              height: 260px;
              transition: transform 0.65s cubic-bezier(0.4,0,0.2,1);
              transform-style: preserve-3d;
            }
            .flip-card:hover .flip-inner { transform: rotateY(180deg); }
            .flip-front, .flip-back {
              position: absolute;
              inset: 0;
              backface-visibility: hidden;
              -webkit-backface-visibility: hidden;
              border-radius: 8px;
              overflow: hidden;
            }
            .flip-back { transform: rotateY(180deg); }
          `}</style>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              const cardImg = practiceSlides[index % practiceSlides.length];
              const waMsg = `Salam! I need help with ${area.title}. Please provide more information.`;
              return (
                <div key={index} className="flip-card">
                  <div className="flip-inner shadow-md hover:shadow-xl">

                    {/* FRONT */}
                    <div className="flip-front bg-white border border-slate-200 flex flex-col p-5">
                      <div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center mb-4 flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-sm font-bold text-primary leading-snug mb-2">{area.title}</h3>
                      <p className="text-xs text-secondary leading-relaxed line-clamp-3 flex-1">{area.description}</p>
                      <Link
                        to={`/practice-areas/${area.slug}`}
                        className="mt-3 flex items-center gap-1 text-accent text-xs font-semibold hover:underline"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>

                    {/* BACK */}
                    <div className="flip-back">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${cardImg})` }}
                      />
                      <div className="absolute inset-0 bg-primary/90" />
                      <div className="relative h-full p-5 flex flex-col overflow-hidden">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-7 h-7 rounded-md bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-3.5 h-3.5 text-accent" />
                          </div>
                          <h3 className="text-white text-xs font-bold leading-tight">{area.title}</h3>
                        </div>
                        <div className="w-8 h-[1px] bg-accent mb-2" />
                        <ul className="space-y-1 overflow-hidden flex-1">
                          {area.services.slice(0, 5).map((service, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-white/80 text-xs">
                              <span className="text-accent mt-0.5 flex-shrink-0">✓</span>
                              <span>{service}</span>
                            </li>
                          ))}
                          {area.services.length > 5 && (
                            <li className="text-accent text-xs font-semibold mt-1">+{area.services.length - 5} more...</li>
                          )}
                        </ul>
                        <div className="flex gap-2 mt-2">
                          <Link
                            to={`/practice-areas/${area.slug}`}
                            className="flex-1 flex items-center justify-center gap-1 bg-accent text-primary text-xs font-bold py-1.5 rounded hover:bg-amber-400 transition-colors"
                          >
                            Details <ArrowRight className="w-3 h-3" />
                          </Link>
                          <a
                            href={WHATSAPP_URL(waMsg)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center bg-[#25D366] text-white text-xs font-bold py-1.5 px-2 rounded hover:bg-[#128C7E] transition-colors"
                          >
                            <MessageCircle className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary via-primary to-primary rounded-2xl p-8 sm:p-10 lg:p-16 text-white text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
            </div>
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Scale className="w-14 sm:w-20 h-14 sm:h-20 text-accent mx-auto mb-6" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 relative">Can't Find What You're Looking For?</h2>
            <p className="text-base sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto relative">
              We offer a wide range of legal services beyond those listed. Contact us to discuss your specific legal needs.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-accent text-primary px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-bold hover:bg-amber-500 transition-all shadow-xl text-base sm:text-lg relative"
              >
                Get In Touch
                <ArrowRight className="w-5 sm:w-6 h-5 sm:h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-4">Why Choose Our Legal Services?</h2>
            <p className="text-base sm:text-xl text-secondary max-w-2xl mx-auto">
              Expertise you can trust, service you can rely on
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {[
              { icon: Shield, title: "Registered Firm", description: "Punjab Bar Council Registered" },
              { icon: Users, title: "Expert Team", description: "Experienced Legal Professionals" },
              { icon: TrendingUp, title: "Proven Results", description: "99% Success Rate" },
              { icon: FileText, title: "Transparent Fees", description: "No Hidden Costs" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-accent to-destructive w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <item.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </motion.div>
                <h3 className="font-bold mb-2 text-primary text-sm sm:text-lg">{item.title}</h3>
                <p className="text-xs sm:text-sm text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
