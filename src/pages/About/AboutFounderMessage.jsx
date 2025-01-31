import FounderAvatar from "../../assets/avatar-temp-01.png";

export default function AboutFounderMessage() {
  return (
    <section className="max-w-6xl mx-auto mt-24">
        <div className='flex flex-col gap-19'>
            {/* Top section */}
            <div className="flex flex-col">
                <h2 className="mt-2 font-semibold tracking-tight text-gray-600 text-[2.5rem] leading-14 max-w-[520px]">
                    We’re <span className='text-gray-900'>building the</span> bridge to smart <span className='text-gray-900'>inventory management for</span> customers
                </h2>
            </div>
            {/* Bottom section */}
            <div className='flex'>
                {/* Image and name */}
                <div class="flex gap-4 flex-1">
                    <img class="size-18.5 rounded-full" src={FounderAvatar} alt="Raotori's founder's avatar" />
                    <div class="">
                        <div className="text-gray-600 text-2xl font-medium">Mr Rao</div>
                        <div class="text-xl font-bold">Founder, Raotory</div>
                    </div>
                </div>
                {/* Message */}
                <div className='flex-1'>
                    <p className="text-right text-gray-600 text-xl">
                        We are committed to delivering an efficient and reliable inventory management system that helps businesses optimize their stock levels and streamline their operations. Our goal is to maintain accurate inventory tracking, ensuring that businesses can effectively manage their stock without the risks of overstocking or stockouts. By using advanced technology and real-time tracking, we aim to provide solutions that not only enhance inventory accuracy but also reduce costs associated with excess inventory and manual errors.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}