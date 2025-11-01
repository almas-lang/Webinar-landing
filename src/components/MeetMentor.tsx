import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Users, TrendingUp, BookOpen } from 'lucide-react';

export function MeetMentor() {
  const mentorImage = "https://images.unsplash.com/photo-1752118464988-2914fb27d0f0?w=800";

  const achievements = [
    { icon: Award, stat: "15+", label: "Years in Design Leadership" },
    { icon: Users, stat: "5000+", label: "Designers Mentored" },
    { icon: TrendingUp, stat: "300+", label: "Companies Transformed" },
    { icon: BookOpen, stat: "50+", label: "Masterclasses Delivered" }
  ];

  const featuredEvents = [
    { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600", caption: "Design Conference 2024" },
    { image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600", caption: "Tech Summit Workshop" },
    { image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600", caption: "Leadership Masterclass" },
    { image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600", caption: "UX Strategy Talk" },
  ];

  return (
    <section className="py-24 bg-[#F9F9F9]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl text-[#1A1A1A] mb-4">
            Meet Your Mentor
          </h2>
          <p className="text-xl text-[#1A1A1A]/60">
            Learn from a design leader who's been there and done that
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={mentorImage}
                alt="Shaik Murad"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-[#F24646]/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl text-[#1A1A1A] mb-2">Shaik Murad</h3>
              <p className="text-xl text-[#F24646]">
                Founder, Xperience Wave • Design Leadership Strategist
              </p>
            </div>

            <div className="space-y-4 text-[#1A1A1A]/70 leading-relaxed">
              <p>
                Shaik Murad is a renowned design leadership strategist who has helped thousands of designers transition from execution to strategic roles.
              </p>
              <p>
                With over 15 years of experience leading design teams at Fortune 500 companies, Shaik understands exactly what it takes to break through the design leadership ceiling.
              </p>
              <p>
                His SDI Model has been adopted by design teams at leading tech companies worldwide, helping designers increase their impact and accelerate their careers.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-xl p-4 text-center"
                  >
                    <Icon className="w-6 h-6 text-[#F24646] mx-auto mb-2" />
                    <p className="text-2xl text-[#1A1A1A] mb-1">{achievement.stat}</p>
                    <p className="text-xs text-[#1A1A1A]/60">{achievement.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Featured At Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="text-sm text-[#1A1A1A]/50 uppercase tracking-wider mb-8 text-center italic">
            Featured At
          </p>
          <div className="overflow-hidden relative">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -1400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* Render featured events three times for seamless infinite loop */}
              {[...featuredEvents, ...featuredEvents, ...featuredEvents].map((event, index) => (
                <motion.div
                  key={`${event.caption}-${index}`}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex-shrink-0 w-[320px] transition-all duration-300"
                >
                  <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.caption}
                      className="w-full h-[200px] object-cover"
                    />
                  </div>
                  <p className="text-center mt-4 text-[#1A1A1A]/60 text-sm">{event.caption}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
