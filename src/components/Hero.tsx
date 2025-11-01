import { motion } from "motion/react";
import { eventConfig } from "../config/eventConfig";
import { CalendarDays, Clock, Languages, Monitor } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F9F9F9] to-white">
      {/* Target Audience Badge - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-[#D63D3D]/10 border-b border-[#D63D3D]/20 py-3"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 text-center">
          <span className="text-[#D63D3D]">
            *** For Designers with 2+ Years of Experience ***
          </span>
        </div>
      </motion.div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 pt-12 pb-20 lg:pb-32 relative">
        {/* Subtle Pattern Background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10L40 20L30 30L20 20z M10 30L20 40L10 50L0 40z M50 30L60 40L50 50L40 40z M30 50L40 60L30 70L20 60z' fill='%231A1A1A' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Full Width Headline Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 space-y-4"
        >
          <h1 className="text-4xl lg:text-5xl text-[#1A1A1A] tracking-snug">
            Learn What Top <span className="text-md text-[#F24646] font-medium" >UX /UI, Visual and Product Designers</span> Know That Gets
            Them Promoted
          </h1>
          <p className="text-xl lg:text-2xl text-[#1A1A1A]/70">
            Exclusive LIVE Masterclass on Navigating Design Leadership &
            Strategy
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-top">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Headline */}
            <div className="text-[#1A1A1A] mb-1 text-l pb-6">
              Join 1,000+ Sr. UXers Who Got Promoted Using Strategies From This
              Training
            </div>

            {/* Info Badges Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Date Badge */}
              <div className="bg-[#F24646]/5 border-2 border-[#F24646]/30 rounded-lg p-4 space-y-1 shadow-sm">
                <div className="flex items-center gap-2 flex-wrap">
                  <CalendarDays className="w-4 h-4 text-[#F24646]" />
                  <div className="text-md text-[#F24646] font-semibold">
                    Date
                  </div>
                </div>
                <div className="text-[#1A1A1A] text-xl">
                  {eventConfig.displayDate}
                </div>
              </div>

              {/* Time Badge */}
              <div className="bg-[#F24646]/5 border-2 border-[#F24646]/30 rounded-lg p-4 space-y-1 shadow-sm">
                <div className="flex items-center gap-2 flex-wrap">
                  <Clock className="w-4 h-4 text-[#F24646]" />
                  <div className="text-md text-[#F24646] font-semibold">
                    Time
                  </div>
                </div>
                <div className="text-[#1A1A1A] text-xl">
                  {eventConfig.displayTime}
                </div>
              </div>

              {/* Place Badge */}
              <div className="bg-[#F24646]/5 border-2 border-[#F24646]/30 rounded-lg p-4 space-y-1 shadow-sm">
                <div className="flex items-center gap-2 flex-wrap">
                  <Monitor className="w-4 h-4 text-[#F24646]" />
                  <div className="text-md text-[#F24646] font-semibold">
                    Platform
                  </div>
                </div>
                <div className="text-[#1A1A1A] text-xl">Online (Gmeet)</div>
              </div>

              {/* Language Badge */}
              <div className="bg-[#F24646]/5 border-2 border-[#F24646]/30 rounded-lg p-4 space-y-1 shadow-sm">
                <div className="flex items-center gap-2 flex-wrap">
                  <Languages className="w-4 h-4 text-[#F24646]" />
                  <div className="text-md text-[#F24646] font-semibold">
                    Language
                  </div>
                </div>
                <div className="text-[#1A1A1A] text-xl">English</div>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href={eventConfig.pgPaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 40px rgba(242, 70, 70, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center bg-[#F24646] text-white px-6 sm:px-8 lg:px-12 py-5 sm:py-4 lg:py-5 rounded-lg transition-all duration-300 shadow-lg text-center text-sm sm:text-base lg:text-xl"
             >
              Register for the webinar at <del className="ml-1">₹499</del> <span className="ml-1">₹9</span>
            </motion.a>

            {/* Footer Text */}
            <div className="space-y-2">
              <p className="text-xs text-[#1A1A1A]/40">
                This training is conducted by certified design strategists with
                15+ years of experience in leading Fortune 500 design teams
              </p>
            </div>
          </motion.div>

          {/* Right Video Space */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#F9F9F9] aspect-video flex items-center justify-center">
              {/* Video Placeholder */}
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#F24646] rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-[#1A1A1A]/50">Video Preview</p>
              </div>
            </div>

            {/* Mentor Profile Card */}
            <div className="bg-[#1A1A1A] rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-6 shadow-xl">
              {/* Mentor Image */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-[#F24646]">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                    alt="Shaik Murad"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Mentor Info */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-white/60 text-sm lg:text-base mb-1">
                  - with Shaik Murad
                </p>
                <p className="text-white text-sm lg:text-base">
                  Co Founder at{" "}
                  <span className="text-[#FFD700]">Xperience Wave</span> |
                  Design Head
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute -z-10 top-20 right-20 w-96 h-96 bg-[#F24646]/10 rounded-full blur-3xl" />
    </section>
  );
}
