import { motion } from "motion/react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

export function WhyJoin() {
  const data = [
    { name: "Strategic Designers", value: 5, color: "#F24646" },
    { name: "Execution Only", value: 95, color: "#E5E5E5" },
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
            The Truth About Design Leadership
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl text-[#1A1A1A]">
                Why Should You Join This Masterclass?
              </h3>
              <p className="text-[#1A1A1A]/70 leading-relaxed">
                Most designers stay stuck in execution mode
                their entire career. They create beautiful
                interfaces but never influence the decisions
                that matter.
              </p>
              <p className="text-[#1A1A1A]/70 leading-relaxed">
                Only 5% of designers make it to strategic
                leadership roles where they drive business
                impact, lead teams, and shape product direction.
              </p>
              <p className="text-[#1A1A1A]/70 leading-relaxed">
                This masterclass reveals the exact framework top
                1% designers use to transition from execution to
                strategy.
              </p>
            </div>

            <div className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F24646] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-[#1A1A1A]/70">
                    Learn the 3-part SDI Model used by design
                    leaders at top tech companies
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F24646] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-[#1A1A1A]/70">
                    Discover how to influence product strategy
                    without formal authority
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#F24646] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-[#1A1A1A]/70">
                    Get the exact playbook to accelerate your
                    promotion timeline
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-[#000000] rounded-2xl p-12 text-center relative overflow-hidden">
              {/* Subtle Pattern Background */}
              <div
                className="absolute inset-0 opacity-[0.1] pointer-events-none rounded-2xl"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10L40 20L30 30L20 20z M10 30L20 40L10 50L0 40z M50 30L60 40L50 50L40 40z M30 50L40 60L30 70L20 60z' fill='%23FFFFFF' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative z-10">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={120}
                      paddingAngle={0}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-8 space-y-4">
                  <div className="text-center">
                    <p className="text-5xl text-[#F24646] mb-2">
                      5%
                    </p>
                    <p className="text-white/70">
                      Designers reach strategic leadership roles
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-white/50 text-sm">
                      Don't be part of the 95% who stay stuck in
                      execution
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}