import { Link } from "react-router";
import chairmanImg from '../../../imports/chairman.png';
import { Scale, Award, Users, FileText, ArrowRight, CheckCircle, Briefcase, Shield, TrendingUp, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect, useMemo } from "react";
import { useSEO } from "../../hooks/useSEO";

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "BM Solicitor (Pvt) Limited | Best Law Firm in Lahore Pakistan",
    "description": "Expert legal services in Lahore, Punjab, Pakistan. Corporate law, property transfer, civil litigation, banking, taxation, and more. Punjab Bar Council registered.",
    "url": "https://bmsolicitor.co/",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bmsolicitor.co/" }
      ]
    }
  }), []);

  useSEO({
    title: "BM Solicitor (Pvt) Limited | Best Law Firm in Lahore Pakistan | Legal Services",
    description: "BM Solicitor (Pvt) Limited — Expert legal services in Lahore, Punjab, Pakistan. Corporate law, property transfer, civil & criminal litigation, banking law, taxation, insurance, inheritance & more. Punjab Bar Council registered. 5000+ clients. Free consultation. Call 03247800007.",
    path: "/",
    keywords: "BM Solicitor, best law firm Lahore, lawyer Pakistan, legal services Punjab, corporate lawyer Lahore, property lawyer, civil litigation, criminal lawyer, banking law Pakistan, tax lawyer, free legal consultation Lahore, Punjab Bar Council, vakeel Lahore",
    jsonLd,
  });

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1643149005402-ecac920f1d5e?w=800&q=80",
      title: "BM SOLICITOR (PVT) LIMITED",
      subtitle: "Premier Legal Services in Pakistan",
      description: "Registered Office: Punjab - Providing Expert Legal Solutions Since Inception"
    },
    {
      image: "https://images.unsplash.com/photo-1758518730178-6e237bc8b87d?w=800&q=80",
      title: "Corporate & Commercial Expertise",
      subtitle: "Business Law Specialists",
      description: "Company Formation • Contract Management • Corporate Governance"
    },
    {
      image: "https://images.unsplash.com/photo-1630265927428-a62b061a5270?w=800&q=80",
      title: "Comprehensive Legal Services",
      subtitle: "Your Trusted Legal Partner",
      description: "Civil & Criminal Litigation • Property Transfer • Banking & Finance"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentSlide === index ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
            style={{ pointerEvents: currentSlide === index ? "auto" : "none" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
            </div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: currentSlide === index ? 0 : -100, opacity: currentSlide === index ? 1 : 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="max-w-3xl text-white text-center lg:text-left mx-auto lg:mx-0"
                >
                  <div className="inline-block bg-accent text-primary px-4 py-2 rounded-full text-sm font-bold mb-4">
                    {slide.subtitle}
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <Link
                      to="/contact"
                      className="bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-destructive transition-all hover:scale-105 inline-flex items-center gap-2"
                    >
                      Schedule Consultation
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      to="/practice-areas"
                      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all hover:scale-105"
                    >
                      Our Services
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-accent w-8" : "bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Chairman Section — Professional Clean Layout */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center"
          >
            {/* Left — Photo */}
            <div className="flex-shrink-0 flex justify-center">
              <div className="relative">
                <div className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl border-4 border-slate-200">
                  <img
                    src={chairmanImg}
                    alt="Syed Shabbiul Hassan Bukhari"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 15%' }}
                  />
                </div>
                {/* Experience badge */}
                <div className="absolute -bottom-4 -left-4 bg-primary text-white px-5 py-3 shadow-lg rounded-sm">
                  <div className="text-xl font-bold leading-none">30+</div>
                  <div className="text-xs text-white/70 mt-0.5 font-medium tracking-wide">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right — Content */}
            <div className="flex-1 pl-0 lg:pl-4 border-l-0 lg:border-l-2 lg:border-slate-200 text-center lg:text-left">
              {/* Section label */}
              <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
                <div className="w-8 h-[2px] bg-accent" />
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Leadership</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary leading-snug mb-1">
                Syed Shabbiul Hassan Bukhari
              </h2>
              <p className="text-secondary font-medium text-base mb-5">Chairman, BM Solicitor (Pvt) Limited</p>

              <div className="w-12 h-[1px] bg-slate-300 mb-5 mx-auto lg:mx-0" />

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                An experienced leader in legal consultancy, project management, and institutional development.
                He guides BM Solicitor's strategic vision and client services with professionalism and integrity,
                ensuring every client receives expert, results-driven legal counsel.
              </p>

              {/* Key areas */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-sm mx-auto lg:max-w-none lg:mx-0">
                {['Corporate Governance', 'Dispute Resolution', 'Legal Strategy', 'Compliance Advisory'].map((area) => (
                  <div key={area} className="flex items-center gap-2 justify-center lg:justify-start">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{area}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start">
                <Link
                  to="/chairman"
                  className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-sm font-semibold text-sm hover:bg-secondary transition-colors"
                >
                  View Full Profile
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Award, title: "Registered Firm", subtitle: "Punjab Bar Council", delay: 0 },
              { icon: Users, title: "5000+", subtitle: "Satisfied Clients", delay: 0.2 },
              { icon: FileText, title: "99%", subtitle: "Success Rate", delay: 0.4 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-accent to-destructive w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-2 text-primary">{stat.title}</h3>
                <p className="text-secondary font-medium">{stat.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-4">Why Choose BM Solicitor?</h2>
            <p className="text-base sm:text-xl text-secondary max-w-2xl mx-auto">
              Comprehensive Legal Services Tailored to Your Needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Briefcase,
                title: "Corporate & Commercial",
                description: "Expert services in company formation, corporate governance, and business transactions",
              },
              {
                icon: Scale,
                title: "Civil & Criminal Litigation",
                description: "Comprehensive representation in all types of civil and criminal court proceedings",
              },
              {
                icon: FileText,
                title: "Property & Banking",
                description: "Property transfers, conveyancing, banking disputes, and finance law expertise",
              },
              {
                icon: Shield,
                title: "Insurance & Claims",
                description: "Professional handling of insurance matters, claims, and dispute resolution",
              },
              {
                icon: TrendingUp,
                title: "Taxation & Finance",
                description: "Tax planning, compliance, and representation before tax authorities",
              },
              {
                icon: Users,
                title: "Labour & Administrative",
                description: "Employment law, labour disputes, and administrative organization services",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-accent to-destructive w-14 h-14 rounded-lg flex items-center justify-center mb-6 mx-auto"
                >
                  <feature.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                <p className="text-sm sm:text-base text-secondary leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="inline-block bg-gradient-to-r from-accent to-destructive text-white px-5 py-2 rounded-full text-sm font-bold mb-4">
                BM SOLICITOR (PVT) LIMITED
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6">
                Complete Legal Solutions Under One Roof
              </h2>
              <p className="text-base sm:text-lg text-secondary mb-6 leading-relaxed">
                Registered with Punjab Bar Council, we provide comprehensive legal services ranging from corporate matters to court management. Our team of expert lawyers is dedicated to protecting your interests.
              </p>
              <ul className="space-y-3 mb-8 text-left inline-block">
                {[
                  "Court Management Services",
                  "Inheritance & Succession Planning",
                  "Contract Drafting & Review",
                  "Dispute Resolution & Mediation",
                  "Legal Consultancy Services",
                  "Administrative Organizations",
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-slate-700 font-medium text-sm sm:text-base">{service}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="flex justify-center lg:justify-start">
                <Link
                  to="/practice-areas"
                  className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-all hover:gap-3"
                >
                  View All Practice Areas
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary via-primary to-primary p-8 sm:p-10 rounded-2xl text-white shadow-2xl text-center">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Scale className="w-14 h-14 sm:w-16 sm:h-16 text-accent mb-6 mx-auto" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Schedule Your Free Consultation</h3>
                <p className="text-white/80 mb-6 leading-relaxed text-sm sm:text-base">
                  Get expert legal advice from qualified professionals. We offer free initial consultations to understand your case and provide the best legal strategy.
                </p>
                <div className="space-y-3 mb-6 text-left inline-block">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Confidential Discussion</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Expert Legal Assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm">Clear Action Plan</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Link
                    to="/contact"
                    className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-bold hover:bg-destructive transition-all hover:scale-105 shadow-lg"
                  >
                    Book Appointment Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary via-primary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Contact BM Solicitor (Pvt) Limited today for expert legal advice and representation you can trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://wa.me/923247800007?text=Salam!%20I%20would%20like%20to%20consult%20with%20BM%20Solicitor%20regarding%20a%20legal%20matter."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-10 py-5 rounded-lg font-bold hover:bg-[#128C7E] transition-all shadow-xl text-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp Consultation
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-accent text-primary px-10 py-5 rounded-lg font-bold hover:bg-destructive transition-all shadow-xl text-lg"
                >
                  Get In Touch
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
