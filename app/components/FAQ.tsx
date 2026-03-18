"use client";

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const faqs = [
  {
    question: 'What sets your properties apart from the rest?',
    answer: 'Our properties are distinguished by their exceptional craftsmanship, premium locations, and attention to every detail. We work with world-renowned architects and designers to create spaces that are both functional and aesthetically stunning.',
  },
  {
    question: 'Do you offer property management services?',
    answer: 'Yes, we provide comprehensive property management services including maintenance, tenant relations, and financial reporting. Our team ensures your investment maintains its value and generates optimal returns.',
  },
  {
    question: 'What is the typical timeline for custom developments?',
    answer: 'Custom development timelines typically range from 18-36 months depending on the scope and complexity of the project. We provide detailed project timelines during our initial consultation.',
  },
  {
    question: 'Do you offer financing options for buyers?',
    answer: 'We partner with leading financial institutions to offer competitive financing options. Our team can help guide you through the process and connect you with the right lending partners.',
  },
];

const FAQ = () => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 px-6 bg-black font-sens">
      <div className=" w-full max-w-350 mx-auto">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16">
          {/* Title Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className=" text-lg uppercase mb-4 pb-1.5 border-b border-[#d8bc30] inline-block tracking-[4px]">FAQ</p>
            <h2 className="heading-display text-4xl md:text-5xl font-medium text-white ">
              Your Questions,<br />
              <span className=" bg-clip-text text-transparent bg-linear-to-r from-white to-80% to-[#d8bc30]">Elegantly Answered</span>
            </h2>
          </motion.div>

          {/* Accordion Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-[#1E1E1E] rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="text-left text-white hover:text-white/80 hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-white pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
