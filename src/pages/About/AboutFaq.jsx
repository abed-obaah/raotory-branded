import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RiArrowRightLine } from "react-icons/ri";

export default function AboutFaq() {
  return (
    <section className="max-w-6xl mx-auto mt-24">
        <div className='flex flex-col gap-19'>
            {/* Left section */}
            <div className="flex flex-col">
                <h2 className="font-medium tracking-tight text-[4rem] leading-[70px] mb-12">
                    Need Help?
                </h2>
                {/* Phone */}
                <div class="flex gap-4 mb-8">
                    <div className="flex items-center justify-center size-12.5 bg-gray-300 rounded-full">
                        <FaPhoneAlt className="size-5" />
                    </div>
                    <div class="">
                        <div className="text-lg font-medium">+234 Raotory</div>
                        <div class="text-gray-400 text-sm font-medium">Support Hotline</div>
                    </div>
                </div>
                {/* Email */}
                <div class="flex gap-4 mb-12">
                    <div className="flex items-center justify-center size-12.5 bg-gray-300 rounded-full">
                        <MdOutlineMarkEmailUnread className="size-6.5" />
                    </div>
                    <div class="">
                        <div className="text-lg font-medium">support@raotory.com.ng</div>
                        <div class="text-gray-400 text-sm font-medium">Support Email</div>
                    </div>
                </div>
                {/* Support link */}
                <a href="#">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-medium">Support</p>
                        <RiArrowRightLine className="size-6" />
                    </div>
                </a>
            </div>
            {/* Right section - FAQ */}
            <div className='flex'>

            </div>
        </div>
    </section>
  )
}