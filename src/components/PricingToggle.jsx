import { useState, useRef, useEffect } from "react";

const PricingToggle = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const monthlyRef = useRef(null);
  const annualRef = useRef(null);
  const [highlightStyle, setHighlightStyle] = useState({});

  // Adjust the highlight dynamically
  useEffect(() => {
    if (monthlyRef.current && annualRef.current) {
      const activeRef = isAnnual ? annualRef.current : monthlyRef.current;
      setHighlightStyle({
        width: activeRef.offsetWidth,
        left: activeRef.offsetLeft,
      });
    }
  }, [isAnnual]);

  return (
    <div
      className="relative flex items-center bg-gray-d9d9d9 mx-auto h-[60px] rounded-[50px] px-2 cursor-pointer w-fit mb-11"
      onClick={() => setIsAnnual(!isAnnual)}
    >
      {/* Dynamic Blue Highlight */}
      <div
        className="absolute top-1/2 transform -translate-y-1/2 bg-blue-29a8f1 rounded-[50px] h-[51px] transition-all duration-300"
        style={highlightStyle}
      />

      {/* Monthly Option */}
      <div
        ref={monthlyRef}
        className={`relative z-10 text-base font-medium px-5 py-2 transition-colors ${
          isAnnual ? "text-[#757575]" : "text-white"
        }`}
        onClick={() => setIsAnnual(false)}
      >
        Monthly
      </div>

      {/* Annual Option */}
      <div
        ref={annualRef}
        className={`relative z-10 text-base font-medium px-5 py-2 transition-colors ${
          isAnnual ? "text-white" : "text-[#757575]"
        }`}
        onClick={() => setIsAnnual(true)}
      >
        Annual (save 20%)
      </div>
    </div>
  );
};

export default PricingToggle;
