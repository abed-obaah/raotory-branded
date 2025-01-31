import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import ButtonSquareSolid from "../../components/ButtonSquareSolid";

export default function ContactCard() {

  return (
    <section className="mt-24 max-w-6xl mx-auto">
        {/* Section wrapper */}
        <div className="flex justify-between gap-2 bg-blue-001b2a p-8 rounded-[8px] max-w-[1200px]">
            {/* Title */}
            <div class="">
                <p className="text-white-f8fdff text-[1.75rem] font-medium">
                    Still have questions?
                </p>
                <p class="text-white-f8fdff text-lg font-medium">
                    We are here to help.
                </p>
            </div>
            {/* Phone */}
            <div class="flex items-center gap-4">
                <div className="flex items-center justify-center size-10 bg-gray-700 rounded-full">
                    <FaPhoneAlt className="size-5" />
                </div>
                <div class="">
                    <div className="text-white-f8fdff text-lg font-medium">+234 Raotory</div>
                    <div class="text-white-f8fdff text-sm font-medium">Support Hotline</div>
                </div>
            </div>
            {/* Email */}
            <div class="flex items-center gap-4">
                <div className="flex items-center justify-center size-10 bg-gray-700 rounded-full">
                    <MdOutlineMarkEmailUnread className="size-5" />
                </div>
                <div class="">
                    <div className="text-white-f8fdff text-lg font-medium">support@raotory.com.ng</div>
                    <div class="text-white-f8fdff text-sm font-medium">Support Email</div>
                </div>
            </div>
            {/* Button */}
            <div className="flex items-center">
                <ButtonSquareSolid text="Chat With Us" href="#" />
            </div>
        </div>
    </section>
  )
}