import { motion } from 'motion/react';
import { Layers, Target, Users } from 'lucide-react';

export function SDIModel() {
  const pillars = [
    {
      icon: Layers,
      title: "Strategy",
      subtitle: "Think Like a Business Leader",
      description: "Learn to frame design decisions in business terms, align with company goals, and present strategic recommendations to executives.",
      points: [
        "Business case development",
        "Stakeholder alignment",
        "Strategic roadmapping"
      ],
      accentColor: "#F24646"
    },
    {
      icon: Target,
      title: "Decisions",
      subtitle: "Influence Without Authority",
      description: "Master the art of influencing product decisions, navigating organizational politics, and getting buy-in from cross-functional teams.",
      points: [
        "Decision-making frameworks",
        "Influence techniques",
        "Negotiation skills"
      ],
      accentColor: "#1A1A1A"
    },
    {
      icon: Users,
      title: "Leadership",
      subtitle: "Build & Scale Teams",
      description: "Develop leadership presence, mentor junior designers, build high-performing teams, and create a culture of design excellence.",
      points: [
        "Team building & mentorship",
        "Design culture creation",
        "Executive presence"
      ],
      accentColor: "#F24646"
    }
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
            The Future of SDI Model
          </h2>
          <p className="text-xl text-[#1A1A1A]/60 max-w-3xl mx-auto">
            A proven 3-part framework for transitioning from execution to strategic leadership
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl p-8 transition-all duration-300 relative overflow-hidden"
              >
                {/* Accent Bar */}
                <div 
                  className="absolute top-0 left-0 w-full h-1" 
                  style={{ backgroundColor: pillar.accentColor }}
                />

                {/* Icon */}
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${pillar.accentColor}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: pillar.accentColor }} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl text-[#1A1A1A] mb-2">{pillar.title}</h3>
                    <p className="text-sm text-[#F24646]">{pillar.subtitle}</p>
                  </div>

                  <p className="text-[#1A1A1A]/70 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="pt-4 space-y-3">
                    {pillar.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#F24646] mt-2 flex-shrink-0" />
                        <p className="text-sm text-[#1A1A1A]/60">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#F24646] text-white px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            Yes! I Want To Master The SDI Model
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
