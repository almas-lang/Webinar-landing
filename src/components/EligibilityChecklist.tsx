import { motion } from 'motion/react';
import { useState } from 'react';
import { Checkbox } from './ui/checkbox';

export function EligibilityChecklist() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false, false, false, false]);

  const checkboxItems = [
    "You've been designing for 3-7 years, but big decisions are still made without you.",
    "Stakeholders see you as a 'screen churner,' not a strategic partner.",
    "Your growth has stalled, no matter how good your craft, promotions seem out of reach.",
    "You're ambitious, but politics and poor visibility keep holding you back.",
    "Your career feels stagnant without the right roadmap or guidance.",
    "You feel underconfident and lack the leadership skills to move up."
  ];

  const handleCheckboxChange = (index: number, checked: boolean) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = checked;
    setCheckedItems(newCheckedItems);
  };

  return (
    <section className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Subtle Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10L40 20L30 30L20 20z M10 30L20 40L10 50L0 40z M50 30L60 40L50 50L40 40z M30 50L40 60L30 70L20 60z' fill='%23FFFFFF' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-white/80 mb-6">
            Before You Read Anything Further On This Page...
          </p>
          <h2 className="text-3xl lg:text-5xl text-white mb-4">
            Please Check These Boxes If Your Answer Is A <span className="text-[#FFD700]">'Yes'</span>
          </h2>
        </motion.div>

        {/* Checkbox Grid */}
        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {checkboxItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#2A2A2A] border border-white/10 rounded-xl p-6 hover:bg-[#333333] transition-colors duration-300"
            >
              <label htmlFor={`checkbox-${index}`} className="flex items-start gap-4 cursor-pointer">
                <Checkbox
                  id={`checkbox-${index}`}
                  checked={checkedItems[index]}
                  onCheckedChange={(checked) => handleCheckboxChange(index, checked as boolean)}
                  className="mt-0.5 rounded-full border-white/30 data-[state=checked]:bg-[#F24646] data-[state=checked]:border-[#F24646] [&_svg]:text-white [&_svg]:stroke-[3]"
                />
                <span className="text-white/90 text-sm lg:text-base leading-relaxed">
                  {item}
                </span>
              </label>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-block bg-white text-[#1A1A1A] px-6 py-3 rounded-lg mb-6">
            The Truth?
          </div>
          <p className="text-white text-lg lg:text-xl max-w-3xl mx-auto">
            Great design isn't enough. Leaders don't promote execution, they promote impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
