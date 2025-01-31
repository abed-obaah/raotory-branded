import ButtonRoundedSolid from '../../components/ButtonRoundedSolid'

export default function AboutFounderMessage() {
  return (
    <section className="max-w-6xl mx-auto mt-24">
        <div className='flex flex-col gap-16.5'>
            {/* Top section */}
            <div className="flex flex-col">
                <h2 className="mt-2 font-semibold tracking-tight text-gray-600 text-[2.5rem] leading-14 text-center max-w-3xl mx-auto">
                    Transforming the Way You <span className='text-gray-900'>Manage</span> Inventory
                </h2>
                <p className="mt-6 text-xl text-gray-600 font-medium opacity-50 text-center max-w-xl mx-auto">
                    Raotory's software helps teams increase productivity by 50%
                </p>
            </div>
            {/* Bottom section */}
            <div className='grid grid-cols-3 gap-11'>
                {/* Stat #1 */}
                <div className='flex flex-col justify-end bg-gray-f1f1f1 rounded-[20px] p-9 min-h-64'>
                    <p className='text-4xl font-semibold'>500+</p>
                    <p className='text-2xl'>Trusted businesses worldwide</p>
                </div>
                {/* Stat #1 */}
                <div className='flex flex-col justify-end bg-gray-f1f1f1 rounded-[20px] p-9 min-h-64'>
                    <p className='text-4xl font-semibold'>500+</p>
                    <p className='text-2xl'>Trusted businesses worldwide</p>
                </div>
                {/* Stat #1 */}
                <div className='flex flex-col justify-end bg-gray-f1f1f1 rounded-[20px] p-9 min-h-64'>
                    <p className='text-4xl font-semibold'>500+</p>
                    <p className='text-2xl'>Trusted businesses worldwide</p>
                </div>
            </div>
        </div>
    </section>
  )
}