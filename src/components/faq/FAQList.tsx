import React from 'react';
import { motion } from 'framer-motion';
import FAQItem from './FAQItem';

const faqData = [
  {
    question: "How old do you have to be to attend class?",
    answer: "We welcome guests ages 16 and older. However, anyone under 18 must have a legal guardian sign an in-studio waiver."
  },
  {
    question: "Do I need prior fitness experience to join a class?",
    answer: "No prior fitness experience is needed to join a Lagree class! Our workouts are beginner-friendly, and our instructors provide modifications to suit all fitness levels. Whether you're new to exercise or an experienced athlete, you'll enjoy an engaging and effective workout."
  },
  {
    question: "What should I wear to a Lagree class?",
    answer: "Wear comfortable activewear to allow for easy movement. Grip socks are required for safety and stability on the MegaPro—we offer free grip socks for Silver and Platinum members, and they're also available for purchase if you don't have a pair or forget yours."
  },
  {
    question: "What can I expect during my first class?",
    answer: "For your first Lagree class, arrive 10-15 minutes early to meet your instructor, who will walk you through the class, how to operate the MegaPro, and what to expect during class. Get ready for a low-impact workout that focuses on slow, controlled movements to enhance your muscle control and core strength."
  },
  {
    question: "How is Lagree different from other workouts?",
    answer: "Lagree is unique because it combines elements of strength training, cardio, and flexibility into one high-intensity workout, all while using the Megaformer. Unlike traditional Pilates, which focuses on slower movements, Lagree emphasizes continuous movement and muscle engagement, leading to a more challenging and dynamic experience."
  },
  {
    question: "Are there modifications for injuries or limitations?",
    answer: "At our Lagree studio, our instructors are trained to provide modifications for various injuries and limitations. Before class, feel free to discuss any concerns with your instructor, and they will help ensure you can participate safely and effectively. Your health and safety is our priority!"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const FAQList = () => {
  return (
    <motion.div 
      className="max-w-4xl px-4 md:px-0"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {faqData.map((faq, index) => (
        <FAQItem 
          key={index}
          question={faq.question}
          answer={faq.answer}
          isLast={index === faqData.length - 1}
          index={index}
        />
      ))}
    </motion.div>
  );
};

export default FAQList;