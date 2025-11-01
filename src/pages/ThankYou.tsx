import { motion } from 'motion/react';
import { Check, Calendar, Mail, Video, ChevronDown, CalendarDays, Clock, Monitor } from 'lucide-react';
import { useState, useEffect } from 'react';
import { eventConfig } from '../config/eventConfig';

export function ThankYou() {
  const [showCalendarOptions, setShowCalendarOptions] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const generateGoogleCalendarLink = () => {
    const baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    return `${baseUrl}&text=${encodeURIComponent(eventConfig.title)}&dates=${eventConfig.startDate}/${eventConfig.endDate}&details=${encodeURIComponent(eventConfig.description)}&location=${encodeURIComponent(eventConfig.location)}`;
  };

  const generateOutlookLink = () => {
    const baseUrl = "https://outlook.live.com/calendar/0/deeplink/compose";
    return `${baseUrl}?path=/calendar/action/compose&rru=addevent&subject=${encodeURIComponent(eventConfig.title)}&startdt=${eventConfig.startDate}&enddt=${eventConfig.endDate}&body=${encodeURIComponent(eventConfig.description)}&location=${encodeURIComponent(eventConfig.location)}`;
  };

  const generateICalLink = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${eventConfig.startDate}
DTEND:${eventConfig.endDate}
SUMMARY:${eventConfig.title}
DESCRIPTION:${eventConfig.description}
LOCATION:${eventConfig.location}
END:VEVENT
END:VCALENDAR`;
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    return URL.createObjectURL(blob);
  };

  const generateYahooCalendarLink = () => {
    const baseUrl = "https://calendar.yahoo.com/?v=60&view=d&type=20";
    return `${baseUrl}&title=${encodeURIComponent(eventConfig.title)}&st=${eventConfig.startDate}&et=${eventConfig.endDate}&desc=${encodeURIComponent(eventConfig.description)}&in_loc=${encodeURIComponent(eventConfig.location)}`;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F9F9F9] to-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl w-full mx-auto">
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="relative inline-block flex-shrink-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#F24646] rounded-full flex items-center justify-center relative z-10">
                <Check className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 text-white" strokeWidth={4} />
              </div>
              <motion.div
                initial={{ scale: 1, opacity: 0.6 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
                className="absolute inset-0 border-4 border-[#F24646] rounded-full"
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A1A1A]"
            >
              Payment Successful! 🎉
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-md sm:text-base lg:text-lg xl:text-xl text-[#1A1A1A]/70 mb-6 sm:mb-8 px-4 max-w-2xl mx-auto text-center"
          >
            You're all set for the Design Leadership Masterclass
          </motion.p>

          {/* WhatsApp CTA */}
          <div className="text-center">
            <button
              onClick={() => window.open(eventConfig.whatsappGroupLink, '_blank')}
              className="inline-flex items-center gap-3 font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow border-0 cursor-pointer"
              style={{
                backgroundColor: '#25D366',
                color: '#ffffff',
                textDecoration: 'none',
                appearance: 'none',
                WebkitAppearance: 'none',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center'
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ flexShrink: 0, minWidth: '24px', minHeight: '24px' }}
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              Join WhatsApp Group
            </button>

             <p className="text-sm text-[#1A1A1A]/70 mt-4">
              Join The WhatsApp Group For Support & Updates
            </p>
          </div>
        </motion.div>

        {/* What's Next Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#1A1A1A] mb-6 sm:mb-8 text-center">
            What Happens Next?
          </h2>

          <div className="space-y-6 sm:space-y-6">
            {/* Step 1 */}
            <div className="flex gap-3 sm:gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#F24646]/10 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#F24646]" />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-[#1A1A1A] mb-2">
                  Check Your Email
                </h3>
                <p className="text-sm sm:text-base text-[#1A1A1A]/70">
                  We've sent a confirmation email with all the details. Please check your inbox (and spam folder, just in case).
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-3 sm:gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#F24646]/10 rounded-full flex items-center justify-center">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#F24646]" />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-[#1A1A1A] mb-2">
                  Mark Your Calendar
                </h3>
                <p className="text-sm sm:text-base text-[#1A1A1A]/70 mb-3">
                  The masterclass is scheduled for:
                </p>
                <div className="bg-[#F24646]/5 border-2 border-[#F24646]/30 rounded-lg p-6 sm:p-4 space-y-2 mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <CalendarDays className="w-4 h-4 text-[#F24646]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#F24646]">Date:</span>
                    <span className="text-sm sm:text-base text-[#1A1A1A]">{eventConfig.displayDate}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Clock className="w-4 h-4 text-[#F24646]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#F24646]">Time:</span>
                    <span className="text-sm sm:text-base text-[#1A1A1A]">{eventConfig.displayTime}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Monitor className="w-4 h-4 text-[#F24646]" />
                    <span className="text-xs sm:text-sm font-semibold text-[#F24646]">Platform:</span>
                    <span className="text-sm sm:text-base text-[#1A1A1A]">{eventConfig.platform} ({eventConfig.platformNote})</span>
                  </div>
                </div>

                {/* Add to Calendar Button */}
                <div className="relative">
                  <button
                    onClick={() => setShowCalendarOptions(!showCalendarOptions)}
                    className="w-full bg-[#F24646] text-white px-4 sm:px-6 py-3 rounded-lg hover:bg-[#d93d3d] transition-colors duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Add to Calendar</span>
                    <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-200 ${showCalendarOptions ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Calendar Options Dropdown */}
                  {showCalendarOptions && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-[#1A1A1A]/10 overflow-hidden z-10"
                    >
                      <a
                        href={generateGoogleCalendarLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 sm:px-4 py-3 hover:bg-[#F24646]/5 transition-colors duration-200 border-b border-[#1A1A1A]/5"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base text-[#1A1A1A]">Google Calendar</span>
                        </div>
                      </a>

                      <a
                        href={generateOutlookLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 sm:px-4 py-3 hover:bg-[#F24646]/5 transition-colors duration-200 border-b border-[#1A1A1A]/5"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="#0078D4">
                              <path d="M24 7.875v8.25A3.375 3.375 0 0120.625 19.5h-8.25v-4.125h3v-1.5h-3v-1.5h3v-1.5h-3V9.375h3v-1.5h-3V4.5h8.25A3.375 3.375 0 0124 7.875zM10.875 4.5v15H3.375A3.375 3.375 0 010 16.125v-8.25A3.375 3.375 0 013.375 4.5h7.5z"/>
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base text-[#1A1A1A]">Outlook</span>
                        </div>
                      </a>

                      <a
                        href={generateYahooCalendarLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-3 sm:px-4 py-3 hover:bg-[#F24646]/5 transition-colors duration-200 border-b border-[#1A1A1A]/5"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="#6001D2">
                              <path d="M23.6396 11.7502C23.6396 5.26691 18.3794 0 11.8039 0C5.32059 0 0 5.26691 0 11.7502C0 17.613 4.33585 22.4733 9.96245 23.3527V15.1435H6.96521V11.7502H9.96245V9.16297C9.96245 6.20177 11.7354 4.55438 14.4451 4.55438C15.7511 4.55438 17.1139 4.78725 17.1139 4.78725V7.68751H15.6084C14.1263 7.68751 13.6453 8.60108 13.6453 9.53823V11.7502H16.9711L16.4234 15.1435H13.6453V23.3527C19.2719 22.4733 23.6396 17.613 23.6396 11.7502Z"/>
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base text-[#1A1A1A]">Yahoo Calendar</span>
                        </div>
                      </a>

                      <a
                        href={generateICalLink()}
                        download="design-leadership-masterclass.ics"
                        className="block px-3 sm:px-4 py-3 hover:bg-[#F24646]/5 transition-colors duration-200"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="#000000">
                              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                            </svg>
                          </div>
                          <span className="text-sm sm:text-base text-[#1A1A1A]">Apple Calendar / iCal</span>
                        </div>
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-3 sm:gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#F24646]/10 rounded-full flex items-center justify-center">
                <Video className="w-5 h-5 sm:w-6 sm:h-6 text-[#F24646]" />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-[#1A1A1A] mb-2">
                  Join the Masterclass
                </h3>
                <p className="text-sm sm:text-base text-[#1A1A1A]/70">
                  You'll receive the {eventConfig.platform} link 24 hours before the session. Make sure to join on time to not miss any valuable insights!
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 text-center"
        >
          <h3 className="text-xl sm:text-2xl text-white mb-3 sm:mb-4">
            Questions or Need Help?
          </h3>
          <p className="text-sm sm:text-base text-white/70 mb-4 sm:mb-6">
            If you have any questions or didn't receive your confirmation email, please contact us at:
          </p>
          <a
            href={`mailto:${eventConfig.supportEmail}`}
            className="inline-block bg-[#F24646] text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-[#d93d3d] transition-colors duration-300 text-sm sm:text-base break-all"
          >
            {eventConfig.supportEmail}
          </a>
        </motion.div>

        {/* Back to Home Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-6 sm:mt-8"
        >
          <a
            href="/"
            className="text-[#F24646] hover:underline text-sm sm:text-base"
          >
            ← Back to Home
          </a>
        </motion.div>
      </div>
    </main>
  );
}
