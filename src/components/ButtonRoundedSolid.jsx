import React from "react";

const ButtonRoundedSolid = ({ 
  bgColor = "bg-blue-29a8f1", 
  hoverColor = "hover:bg-blue-0e90da", 
  textColor = "text-white", 
  text = "Get Started", 
  href = "#" 
}) => {
  return (
    <a
      href={href}
      className={`${textColor} ${bgColor} ${hoverColor} focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm md:text-base px-4.5 md:px-11 py-3 md:py-4 text-center me-2 dark:${bgColor} dark:${hoverColor} dark:focus:ring-blue-800`}
    >
      {text}
    </a>
  );
};

export default ButtonRoundedSolid;