import { motion } from 'motion/react';

export function StickyBottomBar() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-0 left-0 right-0 z-50"
    >
      {/* Main bar content with decorative top border */}
      <div className="relative bg-white/95 backdrop-blur-lg shadow-[0_-4px_24px_rgba(0,0,0,0.08)] rounded-t-[24px] border-t-2 border-[#F24646]">
        {/* Decorative top border design */}
        <div className="absolute -top-[2px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F24646] to-transparent" />

        {/* Content */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-5 flex items-center justify-between gap-4">
          {/* Left: Registration Info */}
          <div className="flex-1">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="text-[#1A1A1A] text-sm lg:text-base">
                Registration Ends on
              </span>
              <span className="text-[#F24646] text-sm lg:text-base">
                30, October '25
              </span>
            </div>
            <div className="text-[#1A1A1A]/60 text-xs lg:text-sm mt-0.5">
              <span className="text-[#F24646]">Almost Full</span>
              {' '}— Only 12 Seats Left
            </div>
          </div>

          {/* Right: CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full transition-all duration-300 flex-shrink-0 hover:bg-[#F24646]"
          >
            Enroll Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
