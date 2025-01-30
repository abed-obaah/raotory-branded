import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AvatarTemp01 from "../assets/avatar-temp-01.png";
import AvatarTemp02 from "../assets/avatar-temp-02.png";
import AvatarTemp03 from "../assets/avatar-temp-03.png";
import AvatarTemp04 from "../assets/avatar-temp-04.png";

const testimonials = [
  {
    image: AvatarTemp01,
    review: "01 This service exceeded my expectations. Highly recommend!",
    name: "John Doe",
    position: "CEO, TechCorp",
  },
  {
    image: AvatarTemp02,
    review: "02 Excellent work! Professional and timely delivery.",
    name: "Jane Smith",
    position: "Marketing Manager, InnovateX",
  },
  {
    image: AvatarTemp03,
    review: "03 A pleasure to work with. Will hire again.",
    name: "Alex Johnson",
    position: "Founder, Startup Hub",
  },
  {
    image: AvatarTemp04,
    review: "04 Great customer service and outstanding results!",
    name: "Chris Williams",
    position: "COO, FinTech Solutions",
  },
  {
    image: AvatarTemp01,
    review: "05 Truly a game changer for our business!",
    name: "Emma Brown",
    position: "Head of Operations, E-Shopify",
  },
  {
    image: AvatarTemp02,
    review: "06 Truly a game changer for our business!",
    name: "Emma Brown",
    position: "Head of Operations, E-Shopify",
  },
  {
    image: AvatarTemp03,
    review: "07 Truly a game changer for our business!",
    name: "Emma Brown",
    position: "Head of Operations, E-Shopify",
  }
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
    <section className="max-w-6xl mx-auto pt-24">
      {/* Heading */}
      <div className="mb-16">
          <h2 className="text-3xl text-gray-600 opacity-50 text-center">
              Testimonials
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-4xl font-semibold tracking-tight text-pretty text-gray-900 text-center sm:text-5xl">
            <span className="text-gray-600">See What Our</span> Raotory’s loyal Customers <span className="text-gray-600">Are Saying</span>
          </p>
      </div>
      {/* Carousel */}
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
          <p className="text-[40px] text-gray-600 leading-12 font-normal">"{testimonials[index].review}"</p>
          <div className="flex justify-center mt-4 text-yellow-ffe26f text-[2.5rem] space-x-4">
            {Array(5)
              .fill()
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </div>
          <p className="mt-4 text-[2rem] font-bold">{testimonials[index].name}</p>
          <p className="text-2xl text-gray-600">{testimonials[index].position}</p>
        </motion.div>
      </div>
    </section>
  );
}
