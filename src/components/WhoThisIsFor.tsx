import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Briefcase, Users, TrendingUp } from "lucide-react";
import { eventConfig } from "../config/eventConfig";

export function WhoThisIsFor() {
  const personas = [
    {
      icon: Briefcase,
      title: "Mid-Level Designers",
      description:
        "You have 3-7 years of experience and want to transition into leadership roles but don't know how to break through the ceiling.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800",
    },
    {
      icon: Users,
      title: "Design Managers",
      description:
        "You manage a team but struggle to influence strategic decisions and want to increase your impact at the organization level.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=800",
    },
    {
      icon: TrendingUp,
      title: "Senior ICs",
      description:
        "You're a senior individual contributor looking to grow your influence without necessarily moving into people management.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl text-[#1A1A1A] mb-4">
            Who This Is For
          </h2>
          <p className="text-xl text-[#1A1A1A]/60 max-w-3xl mx-auto">
            This masterclass is specifically designed for designers ready to
            step into strategic leadership
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-[#F9F9F9] hover:bg-white border border-[#1A1A1A]/10 transition-all duration-300 hover:shadow-xl"
              >
                {/* Image Background */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={persona.image}
                    alt={persona.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-60" />

                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-[#F24646] rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <h3 className="text-xl text-[#1A1A1A]">{persona.title}</h3>
                  <p className="text-[#1A1A1A]/70 leading-relaxed">
                    {persona.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Not For Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-[#1A1A1A] rounded-2xl p-10 text-center">
            <h3 className="text-2xl text-white mb-8">
              This is not for you if...
            </h3>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8 text-left">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-[#F24646] flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <p className="text-white/90">
                  You're a beginner with &lt;2 years of experience
                </p>
              </div>

              <div className="hidden md:block w-px h-12 bg-white/20"></div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-[#F24646] flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <p className="text-white/90">
                  You're already a Design Manager or above
                </p>
              </div>
            </div>

            <p className="text-white/70 leading-relaxed mb-8">
              This is built specifically for mid-level designers hungry for
              their next big leap.
            </p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <motion.a
            href={eventConfig.pgPaymentLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 40px rgba(242, 70, 70, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center bg-[#F24646] text-white px-6 sm:px-10 lg:px-16 py-3 sm:py-4 lg:py-6 rounded-lg transition-all duration-300 shadow-lg text-center text-sm sm:text-base lg:text-xl leading-tight"
          >
            Yes, I'm Ready For My Next Big Leap
          </motion.a>
        </div>
      </div>
    </section>
  );
}
