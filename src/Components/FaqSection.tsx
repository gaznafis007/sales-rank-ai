"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqData = [
  {
    id: "01",
    question: "Why should I choose Humestic?",
    answer:
      "Bottleneck max my capacity is full, our monetization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?. If you're not hurting you're not winning back",
  },
  {
    id: "02",
    question: "I like your works, how do we start a project?",
    answer:
      "Contact our team through the website or email us directly. We'll schedule an initial consultation to discuss your needs and goals.",
  },
  {
    id: "03",
    question: "What info is required to get a quotation?",
    answer:
      "We need details about your project scope, timeline, and specific requirements to provide an accurate quote.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState("01");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <div className="md:w-1/3">
            <h2 className="text-xl font-medium text-gray-800">
              Frequently asked questions
            </h2>
          </div>

          <div className="md:w-2/3">
            <div className="pb-4 mb-8">
              <h3 className="text-4xl font-light md:max-w-2xl">
                Constant collaboration is how we roll. Let&apos;s see if we are
                a good fit.
              </h3>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          {faqData.map((faq) => (
            <div key={faq.id} className="border-b border-gray-200 pb-4">
              <div
                className="flex justify-between items-center py-4 cursor-pointer"
                onClick={() => toggleFaq(faq.id)}
              >
                <div className="flex items-center gap-4">
                  <p className="text-gray-400 font-medium">{faq.id}</p>
                  <h4 className="text-xl font-medium">{faq.question}</h4>
                </div>
                <button className="text-gray-800 cursor-pointer">
                  {openId === faq.id ? <FiMinus /> : <FiPlus />}
                </button>
              </div>

              {openId === faq.id && (
                <div className="pl-10 pr-10 pb-4">
                  <p className="text-gray-600 text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
