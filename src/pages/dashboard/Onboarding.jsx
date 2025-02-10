import { useState } from "react";
import { motion } from "framer-motion";

export default function Onboarding() {
  const [storeType, setStoreType] = useState(null); // "single" or "multi"
  const [currentStep, setCurrentStep] = useState(0);

  // Define different screen sequences
  const singleStoreScreens = [
    <SingleStoreStepOne key="s1" />,
    <SingleStoreStepTwo key="s2" />,
    <SingleStoreStepThree key="s3" />,
  ];
  const multiStoreScreens = [
    <MultiStoreStepOne key="m1" />,
    <MultiStoreStepTwo key="m2" />,
    <MultiStoreStepThree key="m3" />,
  ];

  // Get the screens based on selection
  const screens = storeType === "single" ? singleStoreScreens : multiStoreScreens;

  // Handle navigation
  const nextStep = () => {
    if (currentStep < screens.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Initial screen selection */}
      {!storeType ? (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h1 className="text-xl mb-4">Choose your store type</h1>
          <button
            onClick={() => setStoreType("single")}
            className="mb-2 px-6 py-2 bg-blue-600 text-white rounded w-full"
          >
            Single Store
          </button>
          <button
            onClick={() => setStoreType("multi")}
            className="px-6 py-2 bg-green-600 text-white rounded w-full"
          >
            Multi Store
          </button>
        </motion.div>
      ) : (
        // Render the onboarding steps based on selection
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {screens[currentStep]}
          {currentStep < screens.length - 1 && (
            <button
              onClick={nextStep}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded"
            >
              Continue
            </button>
          )}
        </motion.div>
      )}
    </div>
  );
}

// Single Store Screens
function SingleStoreStepOne() {
  return <div className="text-xl">Single Store - Step 1</div>;
}

function SingleStoreStepTwo() {
  return <div className="text-xl">Single Store - Step 2</div>;
}

function SingleStoreStepThree() {
  return <div className="text-xl">Single Store - Step 3</div>;
}

// Multi Store Screens
function MultiStoreStepOne() {
  return <div className="text-xl">Multi Store - Step 1</div>;
}

function MultiStoreStepTwo() {
  return <div className="text-xl">Multi Store - Step 2</div>;
}

function MultiStoreStepThree() {
  return <div className="text-xl">Multi Store - Step 3</div>;
}
