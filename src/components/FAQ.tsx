import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { eventConfig } from '../config/eventConfig';

export function FAQ() {
  const faqs = [
    {
      question: "Is this masterclass really free?",
      answer: "Yes, this live masterclass is completely free. We believe in providing value upfront. There's no hidden cost or mandatory purchase required."
    },
    {
      question: "How long is the masterclass?",
      answer: "The live session will be approximately 90 minutes, including a Q&A segment where you can ask Shaik Murad your specific questions about design leadership."
    },
    {
      question: "Will I get a recording if I can't attend live?",
      answer: "Yes! All registered participants will receive a recording link. However, we highly encourage attending live to participate in the Q&A and get real-time feedback."
    },
    {
      question: "What if I'm not in a leadership role yet?",
      answer: "Perfect! This masterclass is designed for designers who want to transition into leadership. You'll learn the exact steps to position yourself for promotion."
    },
    {
      question: "Do I need any special tools or preparation?",
      answer: "No special tools required. Just bring a notebook to take notes. We'll provide all materials and frameworks during the session."
    },
    {
      question: "Is this applicable to my industry?",
      answer: "Yes! The SDI Model and leadership principles taught in this masterclass are universal and apply across all industries - tech, finance, healthcare, retail, and more."
    },
    {
      question: "What's the difference between this and other design courses?",
      answer: "Most design courses focus on tools and techniques. This masterclass focuses exclusively on strategy, influence, and leadership - the skills that actually get you promoted."
    },
    {
      question: "Will there be opportunities to ask questions?",
      answer: "Absolutely! There will be a dedicated Q&A segment where Shaik Murad will answer your specific questions about design leadership and career advancement."
    }
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#1A1A1A]/60">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-[#1A1A1A]/10 rounded-lg px-6 bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left text-[#1A1A1A] hover:text-[#F24646] py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#1A1A1A]/70 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-[#1A1A1A]/60 mb-6">
            Still have questions? We're here to help!
          </p>
          <motion.a
            href={eventConfig.pgPaymentLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(242, 70, 70, 0.4)" }}
            whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center bg-[#F24646] text-white px-6 sm:px-10 lg:px-16 py-3 sm:py-4 lg:py-6 rounded-lg transition-all duration-300 shadow-lg text-center text-sm sm:text-base lg:text-xl"
          >
            Register Now For The Masterclass
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
