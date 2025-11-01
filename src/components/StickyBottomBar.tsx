import { motion } from 'motion/react';
import { eventConfig, getRegistrationEndDate } from '../config/eventConfig';
import { useState, useEffect } from 'react';

export function StickyBottomBar() {
  const [seatsLeft] = useState(() => Math.floor(Math.random() * 11) + 5); // Random number between 5-15
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 1000); // Toggle every second

    return () => clearInterval(interval);
  }, []);

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
                {getRegistrationEndDate()}
              </span>
            </div>
            <div className="text-[#1A1A1A]/60 text-xs lg:text-sm mt-0.5">
              <span className="text-[#F24646]">Almost Full</span>
              {' '}—{' '}
              <span
                className="text-[#1A1A1A] transition-opacity duration-300"
                style={{ opacity: isVisible ? 1 : 0 }}
              >
                Only {seatsLeft} Seats Left
              </span>
            </div>
          </div>

          {/* Right: CTA Button */}
          <motion.a
            href={eventConfig.pgPaymentLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(242, 70, 70, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center bg-[#F24646] text-white px-6 sm:px-10 lg:px-14 py-3 sm:py-4 lg:py-5 rounded-lg transition-all duration-300 shadow-lg text-center text-sm sm:text-base lg:text-xl"
          >
            Register Now!
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
