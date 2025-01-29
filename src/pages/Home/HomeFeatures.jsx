import ButtonRoundedSolid from '../../components/ButtonRoundedSolid'
import ShieldCheckmarkIcon from "../../assets/shield-checkmark-icon.svg";

export default function HomeFeatures() {
  return (
    <section className="max-w-6xl mx-auto pt-24">
        <div className="flex">
            {/* Left side */}
            <div className="flex flex-col flex-1">
                <h2 className="text-3xl text-gray-600 opacity-50">
                    Features
                </h2>
                <p className="mt-2 max-w-md text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Why manage your inventory with Raotory?
                </p>
                <p className="mt-6 text-3xl text-gray-600 opacity-50">
                    We empower businesses to achieve operational efficiency and growth by providing them with intelligent, easy-to-use inventory management solutions.
                </p>
                {/* Button */}
                <div className='flex mt-10'>
                    <ButtonRoundedSolid text="Get Started" href="#" />
                </div>
            </div>

            {/* Right side */}
            <div className='flex-1'>

                {/* Card 01 */}
                <div class="flex flex-col items-center gap-3 max-w-3xs px-3.5 py-4.5 text-center bg-white border border-black-10-percent rounded-[46px] dark:bg-white dark:border-black-10-percent">
                    <h5 class="text-lg font-medium text-gray-600 dark:text-gray-600">
                        Real-Time Inventory Tracking
                    </h5>
                    <div>
                        <img
                            alt="Shield icon"
                            src={ShieldCheckmarkIcon}
                            width={"100%"}
                            height={"100%"}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <p class="text-sm font-normal text-gray-600 dark:text-gray-600">
                        Track your stock levels across multiple locations in real-time, so you never run out of the products your customers need.
                    </p>
                </div>

            </div>
        </div>
    </section>
  )
}