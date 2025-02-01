import { useState, useRef, useEffect } from "react";
import { MdFlashOn } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import ButtonSquareSolid from "./ButtonSquareSolid";

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false);
    const monthlyRef = useRef(null);
    const annualRef = useRef(null);
    const [highlightStyle, setHighlightStyle] = useState({});

    const pricingData = {
        singleStore: {
            yearly: 50000,
            monthly: Math.ceil((50000 / 12) * 1.25),
        },
        multiStores: {
            yearly: 80000,
            monthly: Math.ceil((80000 / 12) * 1.25),
        },
    };

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
        <section className="max-w-6xl mx-auto mt-24">
            <div>
                {/* Heading */}
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="text-3xl text-gray-600 opacity-50">Pricing</h2>
                    <p className="mt-2 max-w-md mx-auto text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Our Pricing Plans
                    </p>
                </div>

                {/* Toggle Switch */}
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
                    >
                        Monthly
                    </div>

                    {/* Annual Option */}
                    <div
                        ref={annualRef}
                        className={`relative z-10 text-base font-medium px-5 py-2 transition-colors ${
                            isAnnual ? "text-white" : "text-[#757575]"
                        }`}
                    >
                        Annual (save 20%)
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="flex justify-center gap-12">
                    {/* Single Store Pricing Card */}
                    <div className="flex flex-col p-6 max-w-[352px] text-gray-0d0d0d bg-white rounded-[20px] border border-black-10-percent shadow">
                        <div className="flex items-center justify-center border border-black-10-percent rounded-full size-10 mb-6">
                            <MdFlashOn className="size-7.5 text-gray-0d0d0d" />
                        </div>
                        <h3 className="mb-2 text-2xl font-semibold">Single Store</h3>
                        <p className="font-light text-gray-500 text-base leading-5">
                            Select this option if your business has just one location.
                        </p>
                        <hr className="border-0 h-[1px] bg-black-10-percent my-5" />
                        <div className="flex justify-center items-baseline mb-6">
                            <span className="mr-2 text-[2rem] font-bold">
                                NGN {isAnnual ? pricingData.singleStore.yearly : pricingData.singleStore.monthly}
                            </span>
                            <span className="text-gray-500">/{isAnnual ? "year" : "month"}</span>
                        </div>
                        {/* List */}
                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <IoIosListBox className="size-4.5 text-gray-303a4d" />
                                <span>One store</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <IoIosListBox className="size-4.5 text-gray-303a4d" />
                                <span>Unlimited orders daily</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <IoIosListBox className="size-4.5 text-gray-303a4d" />
                                <span>Can add team</span>
                            </li>
                        </ul>
                        <ButtonSquareSolid text="Get Started" href="#" />
                    </div>

                    {/* Multi Stores Pricing Card */}
                    <div 
                        style={{ background: "linear-gradient(180deg, #8FD7FF 0%, rgba(126, 184, 217, 0.398242) 43.59%, rgba(118, 169, 198, 0.1165) 64%, rgba(7, 77, 116, 0.05) 100%)" }}
                        className="flex flex-col p-6 max-w-[352px] text-gray-0d0d0d bg-white rounded-[20px] border border-black-10-percent shadow"
                    >
                        <div className="flex items-center justify-center border border-black-10-percent rounded-full size-10 mb-6">
                            <IoDiamondOutline className="size-7.5 text-gray-0d0d0d" />
                        </div>
                        <h3 className="mb-2 text-2xl font-semibold">Multi Stores</h3>
                        <p className="font-light text-gray-500 text-base leading-5">
                            Select this option if your business has different locations.
                        </p>
                        <hr className="border-0 h-[1px] bg-black-10-percent my-5" />
                        <div className="flex justify-center items-baseline mb-6">
                            <span className="mr-2 text-[2rem] font-bold">
                                NGN {isAnnual ? pricingData.multiStores.yearly : pricingData.multiStores.monthly}
                            </span>
                            <span className="text-gray-500">/{isAnnual ? "year" : "month"}</span>
                        </div>
                        {/* List */}
                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <IoIosListBox className="size-4.5 text-gray-303a4d" />
                                <span>Up to 5 stores</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <IoIosListBox className="size-4.5 text-gray-303a4d" />
                                <span>Unlimited orders daily</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <IoIosListBox className="size-4.5 text-gray-303a4d" />
                                <span>Can add team</span>
                            </li>
                        </ul>
                        <ButtonSquareSolid text="Get Started" href="#" />
                    </div>
                </div>

                <div className="mt-11">
                    <p className="text-xl font-semibold leading-6 text-center max-w-56 mx-auto">
                        Contact <a href="#" className="text-blue-29a8f1">sales</a> to create store greater than 5
                    </p>
                </div>
            </div>
        </section>
    );
}
