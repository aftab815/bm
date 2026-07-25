import { useState, useEffect, useMemo } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { useSEO } from "../../hooks/useSEO";

const contactSlides = [
  "https://images.unsplash.com/photo-1643149005402-ecac920f1d5e?w=1200&q=80",
  "https://images.unsplash.com/photo-1758518730178-6e237bc8b87d?w=1200&q=80",
  "https://images.unsplash.com/photo-1630265927428-a62b061a5270?w=1200&q=80",
];

export function Contact() {
  const [slide, setSlide] = useState(0);

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact BM Solicitor (Pvt) Limited",
    "url": "https://bmsolicitor.co/contact",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bmsolicitor.co/" },
        { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": "https://bmsolicitor.co/contact" }
      ]
    }
  }), []);

  useSEO({
    title: "Contact BM Solicitor | Free Legal Consultation | Lahore Pakistan | 03247800007",
    description: "Contact BM Solicitor (Pvt) Limited for free legal consultation in Lahore, Pakistan. Call 03247800007, email info@bmsolicitor.pk, or WhatsApp +92 324 7800007. Office hours: Mon-Fri 9AM-6PM, Sat 10AM-2PM. Punjab Bar Council registered.",
    path: "/contact",
    keywords: "contact BM Solicitor, free legal consultation Lahore, lawyer phone number, legal advice Pakistan, WhatsApp lawyer, law firm contact, 03247800007, info@bmsolicitor.pk, lawyer appointment Lahore",
    jsonLd,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % contactSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* ── Hero with Slideshow ── */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {contactSlides.map((img, i) => (
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
          <div className="flex flex-col items-center lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-4">
                BM Solicitor (Pvt) Limited
              </p>
              <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight mb-4">
                Contact Us
              </h1>
              <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
                <div className="w-10 h-[2px] bg-accent" />
                <span className="text-accent font-semibold text-sm">We respond within 24 hours</span>
              </div>
              <p className="text-white/70 text-base lg:text-lg leading-relaxed">
                Get in touch with our expert legal team for a confidential consultation.
                We are here to help you navigate every legal challenge.
              </p>

              {/* Slide indicators */}
              <div className="flex gap-2 mt-8 justify-center lg:justify-start">
                {contactSlides.map((_, i) => (
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

            {/* Quick contact pills */}
            <div className="flex flex-col sm:flex-row gap-3 lg:flex-col lg:items-end items-center">
              <a
                href="tel:03247800007"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-3 rounded-sm text-sm font-medium hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4 text-accent" />
                03247800007
              </a>
              <a
                href="mailto:info@bmsolicitor.pk"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-3 rounded-sm text-sm font-medium hover:bg-white/20 transition-colors"
              >
                <Mail className="w-4 h-4 text-accent" />
                info@bmsolicitor.pk
              </a>
              <motion.a
                href="https://wa.me/923247800007?text=Salam!%20I%20would%20like%20to%20consult%20with%20BM%20Solicitor%20regarding%20a%20legal%20matter."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-sm text-sm font-bold hover:bg-[#128C7E] transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Office hours bar */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { label: 'Monday – Friday', value: '9:00 AM – 6:00 PM' },
              { label: 'Saturday', value: '10:00 AM – 2:00 PM' },
              { label: 'Sunday', value: 'Closed' },
              { label: 'Emergency', value: 'By Appointment' },
            ].map((h, i) => (
              <div key={i} className={`py-5 px-6 text-center ${i < 3 ? 'border-r border-slate-200' : ''}`}>
                <div className="text-xs text-secondary uppercase tracking-wide mb-1">{h.label}</div>
                <div className="text-sm font-semibold text-primary">{h.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white border-2 border-muted rounded-xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-primary mb-6">Send Us a Message</h2>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700">
                      Thank you for contacting BM Solicitors. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none"
                          placeholder="john.smith@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none"
                          placeholder="+44 7123 456789"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none"
                        >
                          <option value="">Select a subject</option>
                          <option value="Corporate & Commercial">Corporate & Commercial Law</option>
                          <option value="Property">Property & Conveyancing</option>
                          <option value="Family">Family & Divorce Law</option>
                          <option value="Employment">Employment Law</option>
                          <option value="Wills">Wills, Trusts & Probate</option>
                          <option value="Immigration">Immigration Services</option>
                          <option value="Litigation">Litigation & Disputes</option>
                          <option value="Criminal">Criminal Defence</option>
                          <option value="Other">Other Enquiry</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent outline-none resize-none"
                        placeholder="Please provide details about your legal enquiry..."
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full md:w-auto bg-gradient-to-r from-accent to-destructive text-white px-8 py-4 rounded-lg font-bold hover:from-[#E63946] hover:to-[#FFB703] transition-all shadow-lg inline-flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.button>
                    <p className="text-sm text-secondary/70 mt-4">
                      * Required fields. Your information will be kept confidential and used only to respond to your enquiry.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-primary via-primary to-primary rounded-xl p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent rounded-full filter blur-3xl opacity-20"></div>
                <h3 className="text-2xl font-bold mb-6 relative">Get In Touch</h3>
                <div className="space-y-6 relative">
                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-accent to-destructive w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    >
                      <Phone className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="font-bold mb-1">Phone</div>
                      <a href="tel:03247800007" className="text-white/80 hover:text-accent transition-colors">
                        03247800007
                      </a>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-accent to-destructive w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    >
                      <Mail className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="font-bold mb-1">Email</div>
                      <a href="mailto:info@bmsolicitor.pk" className="text-white/80 hover:text-accent transition-colors">
                        info@bmsolicitor.pk
                      </a>
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="bg-gradient-to-br from-accent to-destructive w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    >
                      <MapPin className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <div className="font-bold mb-1">Registered Office</div>
                      <div className="text-white/80">
                        Punjab<br />
                        Pakistan
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-300 rounded-xl p-8 shadow-lg">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-primary mb-4">Office Hours</h3>
                    <div className="space-y-2 text-sm text-primary">
                      <div className="flex justify-between gap-4">
                        <span className="font-medium">Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="font-medium">Saturday:</span>
                        <span>10:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span className="font-medium">Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-amber-200 text-sm text-secondary">
                      Emergency appointments available outside regular hours by prior arrangement.
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-6 text-center shadow-lg">
                <h4 className="font-bold text-primary mb-2">Chat on WhatsApp</h4>
                <p className="text-sm text-secondary mb-4">
                  Get instant response from our legal team via WhatsApp
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/923247800007?text=Salam!%20I%20would%20like%20to%20consult%20with%20BM%20Solicitor%20regarding%20a%20legal%20matter."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#128C7E] transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Now
                </motion.a>
              </div>

              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl p-6 text-center shadow-lg">
                <h4 className="font-bold text-primary mb-2">Prefer to call?</h4>
                <p className="text-sm text-secondary mb-4">
                  Speak directly with one of our experienced lawyers
                </p>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:03247800007"
                  className="inline-block bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-3 rounded-lg font-bold hover:from-slate-800 hover:to-slate-700 transition-all shadow-lg"
                >
                  Call Now
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Google Maps ── */}
      <section className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-0">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Our Location</span>
          </div>
          <p className="text-primary font-semibold text-base mb-4">BM Solicitor (Pvt) Limited — Lahore, Punjab, Pakistan</p>
        </div>
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6805.979364173587!2d74.311175!3d31.469469999999998!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI4JzEwLjEiTiA3NMKwMTgnNDkuNSJF!5e0!3m2!1sen!2sus!4v1782666326833!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="BM Solicitor Office Location"
          />
        </div>
      </section>
    </div>
  );
}
