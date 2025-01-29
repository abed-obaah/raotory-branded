import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HomeMockup01 from "../../assets/home-mockup-01.png";
import HomeMockup02 from "../../assets/home-mockup-02.png";

const HomeMockup = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollLocked, setScrollLocked] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const sectionHeight = sectionRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;

        // Check if the section is fully in view
        if (sectionTop <= 0 && Math.abs(sectionTop) < sectionHeight - viewportHeight / 3 && !scrollLocked) {
          setScrollLocked(true); // Lock scrolling
          document.body.style.overflow = "hidden"; // Prevent page scrolling

          // Switch to second image after a delay
          setTimeout(() => {
            setActiveIndex(1);

            // Unlock scrolling after another delay
            setTimeout(() => {
              setScrollLocked(false);
              document.body.style.overflow = "auto"; // Re-enable scrolling
            }, 2000);
          }, 1500);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled on unmount
    };
  }, [scrollLocked]);

  return (
    <section className="pt-24">
      <div ref={sectionRef} className="relative w-full h-screen flex flex-col items-center justify-center">
        {/* Images */}
        <div className="relative w-full h-full overflow-hidden">
          <motion.img
            src={HomeMockup01}
            alt="First Image"
            className="absolute top-0 left-0 w-full h-[800px] object-contain transition-opacity duration-1000"
            animate={{ opacity: activeIndex === 0 ? 1 : 0 }}
          />
          <motion.img
            src={HomeMockup02}
            alt="Second Image"
            className="absolute top-0 left-0 w-full h-[800px] object-contain transition-opacity duration-1000"
            animate={{ opacity: activeIndex === 1 ? 1 : 0 }}
          />
        </div>

        {/* Pagination */}
        <div className="absolute bottom-10 flex gap-2">
          <div className={`h-2 w-8 rounded-full ${activeIndex === 0 ? "bg-blue-500 w-10" : "bg-gray-400 w-8"}`} />
          <div className={`h-2 w-8 rounded-full ${activeIndex === 1 ? "bg-blue-500 w-10" : "bg-gray-400 w-8"}`} />
        </div>
      </div>
    </section>
  );
};

export default HomeMockup;