import { motion } from 'motion/react';

export function ToolsSection() {
  const tools = [
    { name: 'Figma', color: '#F24E1E' },
    { name: 'Adobe XD', color: '#FF61F6' },
    { name: 'Sketch', color: '#F7B500' },
    { name: 'InVision', color: '#FF3366' },
    { name: 'Miro', color: '#050038' },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#FAFAFA] py-16 border-t border-b border-[#1A1A1A]/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#1A1A1A]/70 uppercase tracking-wider text-lg mb-2" style={{ fontWeight: 600 }}>
            Works With Your Favorite Tools
          </p>
        </motion.div>

        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* Render tools three times for seamless infinite loop */}
            {[...tools, ...tools, ...tools].map((tool, index) => (
              <motion.div
                key={`${tool.name}-${index}`}
                whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-xl p-8 flex items-center justify-center h-32 transition-all duration-300 flex-shrink-0 w-[200px]"
              >
                <div className="text-center">
                  <div 
                    className="w-12 h-12 rounded-lg mx-auto mb-3" 
                    style={{ backgroundColor: tool.color }}
                  />
                  <p className="text-[#1A1A1A]">{tool.name}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
