import { MdFlashOn } from "react-icons/md";

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
                            <MdFlashOn className="size-7.5 text-" />
                        </div>
                        {/* Plan title */}
                        <h3 class="mb-2 text-2xl font-semibold">
                            Single Store
                        </h3>
                        {/* Plan description */}
                        <p class="font-light text-gray-500 text-base leading-5 dark:text-gray-400">
                            Select this option if your business have just one location.
                        </p>
                        {/* Horizontal rule */}
                        <hr className="border-0 h-[1px] bg-black-10-percent my-5"/>
                        {/* Price */}
                        <div class="flex justify-center items-baseline mb-6">
                            <span class="mr-2 text-5xl font-extrabold">$29</span>
                            <span class="text-gray-500 dark:text-gray-400">/month</span>
                        </div>
                        {/* List */}
                        <ul role="list" class="mb-8 space-y-4 text-left">
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Individual configuration</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Team size: <span class="font-semibold">1 developer</span></span>
                            </li>
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Premium support: <span class="font-semibold">6 months</span></span>
                            </li>
                            <li class="flex items-center space-x-3">
                                {/* Icon */}
                                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Free updates: <span class="font-semibold">6 months</span></span>
                            </li>
                        </ul>
                        <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
                    </div>
                </div>
            </div>
        </section>
    )
}