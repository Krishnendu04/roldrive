"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What if my flight is delayed?",
    answer:
      "We monitor all flights in real-time and include 60 minutes free waiting time at airports.",
  },
  {
    question: "Are your rates all-inclusive?",
    answer:
      "Yes, our rates include taxes, fees, and gratuities. There are no hidden charges.",
  },
  {
    question: "Can I book hourly?",
    answer:
      "Absolutely. We offer flexible hourly bookings for as long as you need.",
  },
  {
    question: "Which vehicles do you offer?",
    answer:
      "We offer a wide range of luxury sedans, SUVs, and vans to suit your travel needs.",
  },
];

export default function Question() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-6 sm:py-10 md:py-16 lg:py-18 px-2 sm:px-4 md:px-8 lg:px-18">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked{" "}
            <span className="text-amber-400">Questions</span>
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Everything you need to know about our chauffeur service
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2 sm:space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-2 sm:px-4 md:px-6 py-2 sm:py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <span className="text-sm sm:text-base md:text-md font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-amber-500 text-lg sm:text-xl">
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-2 sm:px-4 md:px-6 py-1 sm:py-2 bg-white text-gray-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
