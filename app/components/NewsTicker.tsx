import { motion } from "motion/react";

export function NewsTicker() {
  const news = [
    "BM Solicitor (Pvt) Limited - Registered with Punjab Bar Council",
    "Expert Legal Services: Corporate Law • Property Transfer • Civil & Criminal Litigation",
    "Banking & Finance • Insurance Claims • Taxation • Inheritance & Succession",
    "Labour Laws • Administrative Organizations • Court Management Services",
    "Free Initial Consultation Available - Contact Us Today",
    "Serving Clients Across Pakistan with Professional Excellence",
  ];

  const newsText = news.join(" • ");
  const repeatedNews = `${newsText} • ${newsText} • ${newsText}`;

  return (
    <div className="bg-gradient-to-r from-accent via-destructive to-accent text-white py-2 overflow-hidden border-y-2 border-destructive">
      <div className="flex items-center gap-3">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {repeatedNews.split(" • ").map((item, index) => (
            <span key={index} className="text-sm font-medium">
              {item} •
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
