import { MdFlashOn } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import ButtonSquareSolid from "../../components/ButtonSquareSolid";

export default function HomePricing() {
    return (
        <section class="max-w-6xl mx-auto pt-24">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                {/* Heading */}
                <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="text-3xl text-gray-600 opacity-50">
                        Pricing
                    </h2>
                    <p className="mt-2 max-w-md mx-auto text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                        Our Pricing Plans
                    </p>
                </div>
                {/* Pricing cards */}
                <div class="grid grid-cols-2 gap-y-12">
                    {/* Pricing Card 01 */}
                    <div class="flex flex-col p-6 mx-auto max-w-[352px] text-gray-0d0d0d bg-white rounded-[20px] border border-black-10-percent shadow dark:border-black-10-percent dark:bg-white dark:text-gray-0d0d0d">
                        {/* Plan icon */}
                        <div className="flex items-center justify-center border border-black-10-percent rounded-full size-10 mb-6">
                            <MdFlashOn className="size-7.5 text-gray-0d0d0d" />
                        </div>
                        {/* Plan title */}
                        <h3 class="mb-2 text-2xl font-semibold">
                            Single Store
                        </h3>
                        {/* Plan description */}
                        <p class="font-light text-gray-500 text-base leading-5 dark:text-gray-400">
                            Select this option if your business has just one location.
                        </p>
                        {/* Horizontal rule */}
                        <hr className="border-0 h-[1px] bg-black-10-percent my-5"/>
                        {/* Price */}
                        <div class="flex justify-center items-baseline mb-6">
                            <span class="mr-2 text-[2rem] font-bold">NGN 50,000</span>
                            <span class="text-gray-500 dark:text-gray-400">/year</span>
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
                    {/* Pricing Card 02 */}
                    <div class="flex flex-col p-6 mx-auto max-w-[352px] text-gray-0d0d0d bg-white rounded-[20px] border border-black-10-percent shadow dark:border-black-10-percent dark:bg-white dark:text-gray-0d0d0d">
                        {/* Plan icon */}
                        <div className="flex items-center justify-center border border-black-10-percent rounded-full size-10 mb-6">
                            <MdFlashOn className="size-7.5 text-gray-0d0d0d" />
                        </div>
                        {/* Plan title */}
                        <h3 class="mb-2 text-2xl font-semibold">
                            Multi Stores
                        </h3>
                        {/* Plan description */}
                        <p class="font-light text-gray-500 text-base leading-5 dark:text-gray-400">
                            Select this option if your business has diferent locations.
                        </p>
                        {/* Horizontal rule */}
                        <hr className="border-0 h-[1px] bg-black-10-percent my-5"/>
                        {/* Price */}
                        <div class="flex justify-center items-baseline mb-6">
                            <span class="mr-2 text-[2rem] font-bold">NGN 80,000</span>
                            <span class="text-gray-500 dark:text-gray-400">/year</span>
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
                    <p className="text-xl font-semibold leading-6 text-center max-w-56 mx-auto">Contact <a href="#" className="text-blue-29a8f1">sales</a> to create store greater than 5</p>
                </div>
            </div>
        </section>
    )
}