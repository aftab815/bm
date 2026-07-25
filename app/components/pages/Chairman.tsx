import { Mail, Phone, Award, Scale, Users, Star, MapPin, CheckCircle, Briefcase } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import chairmanImg from '../../../imports/chairman.png';
import { useSEO } from "../../hooks/useSEO";

const chairmanSlides = [
  "https://images.unsplash.com/photo-1758518730178-6e237bc8b87d?w=1200&q=80",
  "https://images.unsplash.com/photo-1643149005402-ecac920f1d5e?w=1200&q=80",
  "https://images.unsplash.com/photo-1630265927428-a62b061a5270?w=1200&q=80",
];

export function Chairman() {
  const [slide, setSlide] = useState(0);
  const name = "Syed Shabbiul Hassan Bukhari";

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": "Syed Shabbiul Hassan Bukhari — Chairman BM Solicitor",
    "url": "https://bmsolicitor.co/chairman",
    "mainEntity": {
      "@type": "Person",
      "name": "Syed Shabbiul Hassan Bukhari",
      "jobTitle": "Chairman",
      "worksFor": {
        "@type": "LegalService",
        "name": "BM Solicitor (Pvt) Limited",
        "url": "https://bmsolicitor.co"
      },
      "knowsAbout": ["Corporate Governance", "Dispute Resolution", "Legal Strategy", "Compliance Advisory", "Project Management", "Institutional Development"],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "addressCountry": "PK"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bmsolicitor.co/" },
        { "@type": "ListItem", "position": 2, "name": "Chairman", "item": "https://bmsolicitor.co/chairman" }
      ]
    }
  }), []);

  useSEO({
    title: "Syed Shabbiul Hassan Bukhari | Chairman BM Solicitor | 30+ Years Legal Experience",
    description: "Meet the Chairman of BM Solicitor (Pvt) Limited — Syed Shabbiul Hassan Bukhari. 30+ years of legal expertise in corporate governance, dispute resolution, legal strategy, and institutional development. Leading law firm in Lahore, Pakistan.",
    path: "/chairman",
    keywords: "Syed Shabbiul Hassan Bukhari, Chairman BM Solicitor, lawyer Lahore, corporate governance expert, legal leader Pakistan, dispute resolution, Punjab Bar Council",
    jsonLd,
  });

  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % chairmanSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const achievements = [
    { icon: Award, stat: '30+', label: 'Years of Experience' },
    { icon: Scale, stat: '1000+', label: 'Cases Advised' },
    { icon: Users, stat: '5000+', label: 'Clients Served' },
    { icon: Star, stat: '100%', label: 'Commitment to Excellence' },
  ];

  const timeline = [
    { year: '1996', title: 'Associate Solicitor', org: 'Local Law Firm', desc: 'Built foundational litigation and advisory experience across civil and corporate matters.' },
    { year: '2005', title: 'Senior Partner', org: 'Regional Practice', desc: 'Led corporate advisory teams and managed major dispute resolution cases.' },
    { year: '2014', title: 'Founder', org: 'BM Solicitor (Pvt) Limited', desc: 'Established a focused legal consultancy delivering expert advisory services.' },
    { year: '2020', title: 'Chairman', org: 'BM Solicitor (Pvt) Limited', desc: 'Steering institutional strategy, client partnerships, and firm-wide excellence.' },
  ];

  const expertise = [
    'Corporate Governance',
    'Dispute Resolution',
    'Legal Strategy',
    'Compliance Advisory',
    'Project Management',
    'Institutional Development',
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* ── Hero / Profile Header with Slideshow ── */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        {/* Background slides */}
        {chairmanSlides.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: slide === i ? 1 : 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="absolute inset-0 bg-primary/90" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[auto_1fr] gap-10 items-center">

            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="w-44 h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden border-4 border-white/20 shadow-xl flex-shrink-0">
                <img
                  src={chairmanImg}
                  alt={`${name} portrait`}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
            </div>


            {/* Name & title */}
            <div className="text-white">
              <p className="text-white/60 text-sm font-semibold tracking-widest uppercase mb-3">
                BM Solicitor (Pvt) Limited
              </p>
              <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-3">{name}</h1>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-[2px] bg-accent" />
                <span className="text-accent font-semibold text-base">Chairman</span>
              </div>
              <p className="text-white/70 text-base max-w-2xl leading-relaxed">
                Seasoned legal professional focused on corporate governance, high-value dispute resolution,
                and institutional capacity building. Trusted advisor to boards, institutions, and high-profile clients.
              </p>

              {/* Quick contact */}
              <div className="flex flex-wrap gap-4 mt-7">
                <a
                  href="mailto:chairman@bmsolicitors.example"
                  className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-sm font-semibold text-sm hover:bg-slate-100 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </a>
                <a
                  href="tel:+923247800007"
                  className="inline-flex items-center gap-2 border border-white/30 text-white px-5 py-2.5 rounded-sm font-medium text-sm hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +92 324 7800007
                </a>
              </div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-10">
            {chairmanSlides.map((_, i) => (
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


      {/* ── Stats Bar ── */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {achievements.map((a, i) => (
              <div
                key={i}
                className={`py-8 px-6 text-center ${i < achievements.length - 1 ? 'border-r border-slate-200' : ''}`}
              >
                <a.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{a.stat}</div>
                <div className="text-sm text-secondary mt-1">{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About + Sidebar ── */}
      <section id="about" className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* About text — 2/3 */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[2px] bg-accent" />
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">About the Chairman</span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-5">
                Decades of Legal Expertise & Strategic Leadership
              </h2>

              <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                <p>
                  {name} brings decades of legal experience in corporate and project advisory.
                  His approach blends strategic foresight with practical solutions, guiding clients
                  through complex transactions and disputes with a focus on long-term outcomes.
                </p>
                <p>
                  Under his leadership, BM Solicitor has grown its institutional capabilities while
                  maintaining a client-first ethos. He regularly advises on governance, compliance,
                  and large-scale projects — serving both public and private sector clients across Pakistan.
                </p>
                <p>
                  His commitment to professional integrity and results-driven counsel has earned the firm
                  a reputation for reliability and excellence within the Punjab legal community and beyond.
                </p>
              </div>

              {/* Areas of Expertise */}
              <div className="mt-10">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-accent" />
                  Areas of Expertise
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {expertise.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar — 1/3 */}
            <aside className="space-y-6">
              {/* Contact card */}
              <div className="border border-slate-200 rounded-md p-6 bg-white shadow-sm">
                <h3 className="font-bold text-primary text-base mb-4 pb-3 border-b border-slate-100">
                  Contact Information
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-secondary text-xs mb-0.5">Email</div>
                      <a href="mailto:chairman@bmsolicitors.example" className="text-primary hover:text-accent transition-colors">
                        chairman@bmsolicitors.example
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-secondary text-xs mb-0.5">Phone</div>
                      <a href="tel:+923247800007" className="text-primary hover:text-accent transition-colors">
                        +92 324 7800007
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-secondary text-xs mb-0.5">Location</div>
                      <span className="text-primary">Punjab, Pakistan</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  <a
                    href="mailto:chairman@bmsolicitors.example"
                    className="block w-full text-center py-2.5 bg-primary text-white text-sm font-semibold rounded-sm hover:bg-secondary transition-colors"
                  >
                    Send a Message
                  </a>
                  <button
                    onClick={() => downloadVCard(name)}
                    className="block w-full text-center py-2.5 border border-slate-300 text-primary text-sm font-medium rounded-sm hover:bg-slate-50 transition-colors"
                  >
                    Download vCard
                  </button>
                </div>
              </div>

              {/* Quick facts card */}
              <div className="border border-slate-200 rounded-md p-6 bg-slate-50">
                <h3 className="font-bold text-primary text-base mb-4 pb-3 border-b border-slate-200">
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm">
                  {[
                    { label: 'Designation', value: 'Chairman' },
                    { label: 'Firm', value: 'BM Solicitor (Pvt) Limited' },
                    { label: 'Registration', value: 'Punjab Bar Council' },
                    { label: 'Career Since', value: '1996' },
                    { label: 'Specialisation', value: 'Corporate & Advisory Law' },
                  ].map((f) => (
                    <div key={f.label} className="flex justify-between gap-4">
                      <span className="text-secondary">{f.label}</span>
                      <span className="text-primary font-medium text-right">{f.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Vision / Quote ── */}
      <section className="py-14 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-10 h-[2px] bg-accent mx-auto mb-6" />
          <blockquote className="text-xl lg:text-2xl font-serif italic text-primary leading-relaxed">
            "My vision is to build a legal practice rooted in integrity, strategic insight, and demonstrable
            results — empowering clients to achieve sustainable outcomes."
          </blockquote>
          <div className="mt-6 text-secondary font-semibold text-sm tracking-wide">— {name}</div>
        </div>
      </section>

      {/* ── Career Timeline ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">Career Timeline</span>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[5.5rem] md:left-28 top-0 bottom-0 w-[1px] bg-slate-200" />

            <div className="space-y-0">
              {timeline.map((t, i) => (
                <div key={i} className="relative flex gap-6 md:gap-10 pb-10 last:pb-0">
                  {/* Year */}
                  <div className="w-20 md:w-24 flex-shrink-0 text-right pt-1">
                    <span className="text-accent font-bold text-sm">{t.year}</span>
                  </div>

                  {/* Dot */}
                  <div className="relative flex-shrink-0 mt-1.5">
                    <div className="w-3 h-3 rounded-full bg-primary border-2 border-white shadow ring-1 ring-slate-300 relative z-10" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2">
                    <div className="font-bold text-primary text-base">{t.title}</div>
                    <div className="text-accent text-sm font-medium mb-1">{t.org}</div>
                    <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );

  function downloadVCard(fullName: string) {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      `FN:${fullName}`,
      'TITLE:Chairman',
      'ORG:BM Solicitor (Private) Limited',
      'TEL;TYPE=WORK,VOICE:+92 324 7800007',
      'EMAIL:chairman@bmsolicitors.example',
      'END:VCARD'
    ].join('\r\n');
    const blob = new Blob([vcard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fullName.replace(/\s+/g, '_')}.vcf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
}
