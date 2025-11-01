import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star } from 'lucide-react';
import { eventConfig } from '../config/eventConfig';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Product Designer at Google",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      content: "This masterclass completely transformed how I approach design strategy. Within 3 months, I was promoted to Lead Designer.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Design Manager at Spotify",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      content: "The SDI framework helped me influence product decisions at the executive level. It's a game-changer for any design leader.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "UX Director at Microsoft",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      content: "I went from executing designs to driving strategy. This program gave me the tools and confidence to lead at scale.",
      rating: 5
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
            Real People, Real Results
          </h2>
          <p className="text-xl text-[#1A1A1A]/60">
            Join thousands of designers who've accelerated their careers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
              className="bg-white rounded-2xl p-8 transition-all duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F24646] text-[#F24646]" />
                ))}
              </div>
              
              <p className="text-[#1A1A1A]/70 mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-[#1A1A1A]">{testimonial.name}</p>
                  <p className="text-sm text-[#1A1A1A]/50">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-[#1A1A1A] rounded-lg p-12 lg:p-16">
            <h3 className="text-2xl lg:text-4xl text-white mb-4">
              Ready to Join Them?
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Transform from execution to strategy and become the design leader your organization needs.
            </p>
            <motion.a
              href={eventConfig.pgPaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(242, 70, 70, 0.4)"  }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-[#F24646] text-white px-6 sm:px-10 lg:px-14 py-3 sm:py-4 lg:py-5 rounded-lg transition-all duration-300 shadow-lg text-center text-sm sm:text-base lg:text-l"
            >
              Start Your Journey Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
