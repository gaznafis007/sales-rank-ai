"use client";

import { useState } from "react";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    quote:
      "They thoroughly analyze our industry and target audience, allowing them to develop customized campaigns that effectively reach and engage our customers. Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.",
    author: "Michael Kaizer",
    position: "CEO of Salescamp Corp",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 2,
    quote:
      "Working with SalesRank.AI transformed our sales process completely. Their AI-powered insights helped us identify opportunities we were missing and optimize our approach.",
    author: "Sarah Johnson",
    position: "Sales Director at TechGrowth",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 3,
    quote:
      "The AI coaching platform provided by SalesRank.AI has been instrumental in training our new sales representatives. The real-time feedback and personalized suggestions have accelerated their learning curve significantly.",
    author: "David Chen",
    position: "VP of Sales at Innovate Inc",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 4,
    quote:
      "SalesRank.AI's data-driven approach to sales optimization has helped us increase our conversion rates by 35% in just three months. Their team is responsive, knowledgeable, and truly invested in our success.",
    author: "Emily Rodriguez",
    position: "CMO at GrowthForce",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 5,
    quote:
      "The insights we've gained from SalesRank.AI's analytics platform have been eye-opening. We've been able to refine our sales strategy and focus our efforts on the most promising leads and opportunities.",
    author: "James Wilson",
    position: "Founder of ScaleUp Solutions",
    avatar: "/placeholder.svg?height=48&width=48",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];
  const displayIndex = (currentIndex + 1).toString().padStart(2, "0");
  const totalCount = testimonials.length.toString().padStart(2, "0");

  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-8">
          <div className="md:w-3/4">
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed">
              &quot; {currentTestimonial.quote} &quot;
            </blockquote>
            <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8 md:mt-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                  <Image
                    src={currentTestimonial.avatar || "/placeholder.svg"}
                    alt={currentTestimonial.author}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{currentTestimonial.author}</h4>
                  <p className="text-sm text-gray-500">
                    {currentTestimonial.position}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-6">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <FiArrowLeft />
                </button>
                <div className="flex items-center justify-center">
                  <span className="text-sm text-gray-500">
                    {displayIndex}/{totalCount}
                  </span>
                </div>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white hover:bg-blue-800 transition-colors"
                  aria-label="Next testimonial"
                >
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
