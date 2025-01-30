import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AvatarTemp01 from "../assets/avatar-temp-01.png";
import AvatarTemp02 from "../assets/avatar-temp-02.png";
import AvatarTemp03 from "../assets/avatar-temp-03.png";
import AvatarTemp04 from "../assets/avatar-temp-04.png";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const testimonials = [
  {
    image: AvatarTemp01,
    review: "This service exceeded my expectations. Highly recommend!",
    name: "John Doe",
    position: "CEO, TechCorp",
  },
  {
    image: AvatarTemp02,
    review: "Excellent work! Professional and timely delivery.",
    name: "Jane Smith",
    position: "Marketing Manager, InnovateX",
  },
  {
    image: AvatarTemp03,
    review: "A pleasure to work with. Will hire again.",
    name: "Alex Johnson",
    position: "Founder, Startup Hub",
  },
  {
    image: AvatarTemp04,
    review: "Great customer service and outstanding results!",
    name: "Chris Williams",
    position: "COO, FinTech Solutions",
  },
  {
    image: AvatarTemp02,
    review: "Truly a game changer for our business!",
    name: "Emma Brown",
    position: "Head of Operations, E-Shopify",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(2); // Start with the third item in the center

  const nextTestimonial = () => {
    if (index < testimonials.length - 1) setIndex(index + 1);
  };

  const prevTestimonial = () => {
    if (index > 0) setIndex(index - 1);
  };

  // Get the five images, centering around the selected index
  const getVisibleTestimonials = () => {
    // Slice array to show the items around the selected one
    return [
      testimonials[(index - 2 + testimonials.length) % testimonials.length], // 2nd item to the left
      testimonials[(index - 1 + testimonials.length) % testimonials.length], // 1st item to the left
      testimonials[index], // Active item in the center
      testimonials[(index + 1) % testimonials.length], // 1st item to the right
      testimonials[(index + 2) % testimonials.length], // 2nd item to the right
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto text-center">
      {/* Image Carousel */}
      <div className="relative flex items-center gap-4 overflow-hidden w-full py-4">
        <button
          className={cn(
            "absolute left-0 p-2 text-gray-500 rounded-full disabled:opacity-50",
            index === 0 && "cursor-not-allowed"
          )}
          onClick={prevTestimonial}
          disabled={index === 0}
        >
          <FaChevronLeft size={24} />
        </button>

        <div className="flex gap-2 justify-center items-center w-full">
          {visibleTestimonials.map((testimonial, i) => {
            const isActive = testimonials.indexOf(testimonial) === index;

            return (
              <motion.img
                key={i}
                src={testimonial.image}
                alt={testimonial.name}
                className={cn(
                  "w-16 h-16 rounded-full cursor-pointer transition-all duration-300",
                  isActive && "w-20 h-20 border-4 border-blue-500"
                )}
                onClick={() => setIndex(testimonials.indexOf(testimonial))}
              />
            );
          })}
        </div>

        <button
          className={cn(
            "absolute right-0 p-2 text-gray-500 rounded-full disabled:opacity-50",
            index === testimonials.length - 1 && "cursor-not-allowed"
          )}
          onClick={nextTestimonial}
          disabled={index === testimonials.length - 1}
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      {/* Review Section */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className="mt-4"
      >
        <p className="text-lg italic">"{testimonials[index].review}"</p>
        <div className="flex justify-center mt-2 text-yellow-400">
          {Array(5)
            .fill()
            .map((_, i) => (
              <span key={i}>★</span>
            ))}
        </div>
        <p className="mt-2 font-semibold">{testimonials[index].name}</p>
        <p className="text-sm text-gray-500">{testimonials[index].position}</p>
      </motion.div>
    </div>
  );
}
