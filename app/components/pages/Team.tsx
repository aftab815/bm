import { Mail, Phone, Award } from "lucide-react";

export function Team() {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "Senior Partner",
      specialization: "Corporate & Commercial Law",
      qualifications: "LLB (Hons), Solicitor",
      experience: "20+ years",
      description: "Sarah leads our corporate practice with extensive experience in M&A, commercial contracts, and business law.",
    },
    {
      name: "James Thompson",
      role: "Partner",
      specialization: "Property & Conveyancing",
      qualifications: "LLB, LLM, Solicitor",
      experience: "15+ years",
      description: "James heads our property department, specializing in complex commercial and residential transactions.",
    },
    {
      name: "Rachel Chen",
      role: "Partner",
      specialization: "Family & Divorce Law",
      qualifications: "LLB (Hons), Solicitor, Resolution Accredited",
      experience: "12+ years",
      description: "Rachel provides compassionate and strategic advice in all aspects of family law and divorce proceedings.",
    },
    {
      name: "David Patel",
      role: "Senior Solicitor",
      specialization: "Employment Law",
      qualifications: "LLB, MA, Solicitor",
      experience: "10+ years",
      description: "David advises both employers and employees on all employment matters and tribunal representation.",
    },
    {
      name: "Emma Wilson",
      role: "Senior Solicitor",
      specialization: "Wills, Trusts & Probate",
      qualifications: "LLB (Hons), STEP Qualified",
      experience: "14+ years",
      description: "Emma specializes in estate planning, will drafting, and probate administration with a focus on tax efficiency.",
    },
    {
      name: "Michael O'Brien",
      role: "Senior Solicitor",
      specialization: "Immigration Law",
      qualifications: "LLB, LLM (Immigration), OISC Level 3",
      experience: "11+ years",
      description: "Michael provides expert immigration advice for individuals and businesses across all visa categories.",
    },
    {
      name: "Sophie Anderson",
      role: "Solicitor",
      specialization: "Litigation & Dispute Resolution",
      qualifications: "LLB (Hons), Solicitor",
      experience: "8+ years",
      description: "Sophie represents clients in civil and commercial litigation with a focus on achieving practical solutions.",
    },
    {
      name: "Alexander Khan",
      role: "Solicitor",
      specialization: "Criminal Defence",
      qualifications: "LLB, LLM (Criminal Justice), Solicitor",
      experience: "9+ years",
      description: "Alexander provides robust defence representation in all criminal matters from police station to court.",
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary text-white py-20 overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Experienced legal professionals dedicated to providing exceptional service and achieving the best outcomes for our clients
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Expert Legal Professionals</h2>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Our team combines decades of experience with a commitment to excellence and client care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white border border-muted rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-primary h-48 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 rounded-full bg-accent mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                  <div className="text-destructive font-semibold mb-2">{member.role}</div>
                  <div className="text-sm text-secondary mb-4">{member.specialization}</div>
                  <p className="text-sm text-secondary mb-4 leading-relaxed">{member.description}</p>
                  <div className="border-t border-muted pt-4 space-y-2">
                    <div className="text-xs text-secondary/70">
                      <span className="font-semibold">Qualifications:</span> {member.qualifications}
                    </div>
                    <div className="text-xs text-secondary/70">
                      <span className="font-semibold">Experience:</span> {member.experience}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-muted flex gap-3">
                    <a
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@bmsolicitors.co.uk`}
                      className="flex items-center gap-1 text-sm text-destructive hover:text-destructive"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Email</span>
                    </a>
                    <a
                      href="tel:+442071234567"
                      className="flex items-center gap-1 text-sm text-destructive hover:text-destructive"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                Qualified, Experienced, Dedicated
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  Our team consists of highly qualified solicitors and legal professionals who are experts in their respective fields. Each member brings a wealth of knowledge, practical experience, and a commitment to delivering outstanding results.
                </p>
                <p>
                  We invest heavily in continuous professional development to ensure our team stays at the forefront of legal developments and best practices. This commitment to excellence means you receive the most current and effective legal advice.
                </p>
                <p>
                  Beyond qualifications and experience, our team is united by a shared dedication to client service. We understand that legal matters can be stressful, and we're here to guide you through every step with clarity, compassion, and professionalism.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary p-10 rounded-lg text-white">
              <Award className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold mb-6">Our Credentials</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>All solicitors regulated by the Solicitors Regulation Authority (SRA)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Members of relevant specialist law societies and associations</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Commitment to ongoing professional development and training</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional indemnity insurance for your peace of mind</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                  <span>Adherence to strict codes of conduct and client care standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Join Our Growing Team</h2>
          <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
            We're always looking for talented legal professionals to join BM Solicitors. If you're passionate about delivering excellent client service, we'd love to hear from you.
          </p>
          <a
            href="mailto:careers@bmsolicitors.co.uk"
            className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors"
          >
            View Career Opportunities
          </a>
        </div>
      </section>
    </div>
  );
}
