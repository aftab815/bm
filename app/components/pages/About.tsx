import { Scale, Target, Eye, Award, Users, Shield } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect, useMemo } from "react";
import logo from "../../../imports/image-2.png";
import { useSEO } from "../../hooks/useSEO";

const aboutSlides = [
  "https://images.unsplash.com/photo-1630265927428-a62b061a5270?w=1200&q=80",
  "https://images.unsplash.com/photo-1643149005402-ecac920f1d5e?w=1200&q=80",
  "https://images.unsplash.com/photo-1758518730178-6e237bc8b87d?w=1200&q=80",
];

export function About() {
  const [slide, setSlide] = useState(0);

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About BM Solicitor (Pvt) Limited",
    "url": "https://bmsolicitor.co/about",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bmsolicitor.co/" },
        { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://bmsolicitor.co/about" }
      ]
    }
  }), []);

  useSEO({
    title: "About BM Solicitor | Leading Law Firm in Pakistan | Punjab Bar Council Registered",
    description: "Learn about BM Solicitor (Pvt) Limited — 30+ years experience, 5000+ clients served, 99% success rate. Registered with Punjab Bar Council. Expert legal services across Lahore, Punjab, Pakistan with integrity and professionalism.",
    path: "/about",
    keywords: "about BM Solicitor, law firm history, Punjab Bar Council registered, legal firm Pakistan, Lahore law firm, best lawyers Punjab, law firm profile, legal excellence Pakistan",
    jsonLd,
  });

  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % aboutSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      {/* ── Hero with Slideshow ── */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {/* Background slides */}
        {aboutSlides.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: slide === i ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        {/* Dark navy overlay */}
        <div className="absolute inset-0 bg-primary/88" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-4">
              BM Solicitor (Pvt) Limited
            </p>
            <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
              About Us
            </h1>
            <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
              <div className="w-10 h-[2px] bg-accent" />
              <span className="text-accent font-semibold text-sm">Registered with Punjab Bar Council</span>
            </div>
            <p className="text-white/70 text-base lg:text-lg leading-relaxed">
              A trusted name in legal services across Pakistan — delivering expert, results-driven counsel
              with professionalism and integrity since inception.
            </p>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-10 justify-center lg:justify-start">
            {aboutSlides.map((_, i) => (
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
              { stat: '5000+', label: 'Clients Served' },
              { stat: '99%', label: 'Success Rate' },
              { stat: '30+', label: 'Years Experience' },
              { stat: '100%', label: 'Client Satisfaction' },
            ].map((s, i) => (
              <div key={i} className={`py-7 px-6 text-center ${i < 3 ? 'border-r border-slate-200' : ''}`}>
                <div className="text-2xl font-bold text-primary">{s.stat}</div>
                <div className="text-sm text-secondary mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="inline-block bg-gradient-to-r from-accent to-destructive text-white px-5 py-2 rounded-full text-sm font-bold mb-4">
                Our Story
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6">
                Leading Legal Services Provider
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed text-sm sm:text-base">
                <p>
                  BM SOLICITOR (PVT) LIMITED is registered with the Punjab Bar Council and stands as a beacon of legal excellence in Pakistan. Our practice encompasses a comprehensive range of legal services designed to meet the diverse needs of individuals, businesses, and organizations.
                </p>
                <p>
                  From corporate formations to complex litigation, from property transfers to inheritance matters, our experienced team handles every legal challenge with precision and professionalism. We pride ourselves on delivering results that exceed expectations while maintaining the highest ethical standards.
                </p>
                <p>
                  Our commitment extends beyond legal representation – we aim to be your trusted advisor, providing strategic counsel that protects your interests and helps you achieve your objectives.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-secondary p-8 sm:p-10 rounded-2xl shadow-2xl relative overflow-hidden text-center"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent rounded-full filter blur-3xl opacity-20"></div>
              <img src={logo} alt="BM Solicitor" className="w-20 sm:w-24 h-auto mb-6 relative mx-auto" />
              <div className="space-y-6 relative">
                {[
                  { count: "5000+", label: "Clients Served" },
                  { count: "99%", label: "Success Rate" },
                  { count: "20+", label: "Expert Lawyers" },
                  { count: "100%", label: "Client Satisfaction" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-accent mb-1">{stat.count}</div>
                    <div className="text-white/80 text-sm sm:text-base">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-base sm:text-xl text-secondary max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Shield, title: "Integrity", description: "We maintain the highest ethical standards in all our dealings, ensuring honesty, transparency, and professionalism at every step." },
              { icon: Users, title: "Client Focus", description: "Your needs come first. We take the time to understand your situation and provide personalized solutions tailored to your goals." },
              { icon: Award, title: "Excellence", description: "We strive for excellence in every case, continuously improving our expertise and delivering outstanding results." },
              { icon: Target, title: "Results-Driven", description: "We focus on achieving the best possible outcomes for our clients through strategic planning and skilled advocacy." },
              { icon: Eye, title: "Transparency", description: "Clear communication and honest pricing ensure you're always informed and in control of your legal journey." },
              { icon: Scale, title: "Justice", description: "We are passionate about upholding the law and fighting for what's right, ensuring fair treatment for all our clients." }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-accent to-destructive w-14 sm:w-16 h-14 sm:h-16 rounded-xl flex items-center justify-center mb-6 mx-auto"
                >
                  <value.icon className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-sm sm:text-base text-secondary leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-primary to-secondary p-8 sm:p-10 rounded-lg text-white text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-slate-200 leading-relaxed text-sm sm:text-base">
                To provide accessible, high-quality legal services that empower our clients to make informed decisions and achieve their objectives. We are committed to being a trusted partner in navigating the complexities of the law with clarity, compassion, and expertise.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-8 sm:p-10 rounded-lg text-white text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-amber-50 leading-relaxed text-sm sm:text-base">
                To be recognized as the leading law firm in our region, known for our exceptional client service, innovative legal solutions, and unwavering commitment to justice. We aspire to set the standard for professional excellence and ethical practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Punjab Bar Council", subtitle: "Registered & Authorized" },
              { title: "100% Licensed", subtitle: "All Lawyers Fully Qualified" },
              { title: "Premium Service", subtitle: "Quality Legal Solutions" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-accent mb-2">{item.title}</div>
                <p className="text-white/80">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
