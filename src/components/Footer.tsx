import { motion } from 'motion/react';
import { eventConfig } from '../config/eventConfig';

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl mb-6">
              Ready to Transform Your Design Career?
            </h2>
            <p className="text-xl text-white/70 mb-10">
              Join thousands of designers who are making the leap from execution to strategic leadership
            </p>
            <motion.a
              href={eventConfig.pgPaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(242, 70, 70, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-[#F24646] text-white px-6 sm:px-10 lg:px-16 py-3 sm:py-4 lg:py-6 rounded-lg transition-all duration-300 shadow-lg text-center text-sm sm:text-base lg:text-xl"
            >
              Yes! Register Me For The Webinar
            </motion.a>
            <p className="text-sm text-white/50 mt-6">
              Limited Seats Available!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-xl mb-2">Xperience Wave</p>
            <p className="text-white/50 text-sm">
              Empowering designers to become strategic leaders
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/40">
          <p>© 2025 Xperience Wave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
