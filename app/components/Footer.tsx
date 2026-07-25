import { Link } from "react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import logo from "../../imports/image-2.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary to-primary text-white border-t border-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-4"
            >
              <img src={logo} alt="BM Solicitor" className="h-12 w-auto" />
              <div>
                <div className="text-xl font-bold">BM SOLICITOR</div>
                <div className="text-xs text-accent">(PVT) LIMITED</div>
              </div>
            </motion.div>
            <p className="text-white/80 text-sm leading-relaxed">
              Registered with Punjab Bar Council. Providing comprehensive legal services with integrity, professionalism, and dedication to our clients.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-accent text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="text-white/80 hover:text-accent text-sm transition-colors">
                  Practice Areas
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/80">
                <Phone className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>03247800007</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <Mail className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>info@bmsolicitor.pk</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <span>Punjab, Pakistan</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MessageCircle className="w-4 h-4 mt-0.5 text-[#25D366] flex-shrink-0" />
                <a
                  href="https://wa.me/923247800007?text=Salam!%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:text-white font-semibold transition-colors"
                >
                  WhatsApp: 03247800007
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent">Office Hours</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                <div>
                  <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                  <div>Saturday: 10:00 AM - 2:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} BM SOLICITOR (PVT) LIMITED. All rights reserved. Registered with Punjab Bar Council.</p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/923247800007?text=Salam!%20I%20would%20like%20to%20consult%20with%20BM%20Solicitor%20regarding%20a%20legal%20matter."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 sm:left-auto sm:right-[88px] z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-2xl font-bold text-sm hover:bg-[#128C7E] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        title="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="hidden sm:inline">Chat with us</span>
      </motion.a>
    </footer>
  );
}
