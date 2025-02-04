import ButtonRoundedSolid from '../../components/ButtonRoundedSolid'

export default function AboutHero() {
  return (
    <section className="section-px section-mt max-w-6xl mx-auto">
        <div className="flex flex-col max-w-3xl">
            <p className="text-lg md:text-3xl text-gray-600 opacity-50">
                About Us
            </p>
            <h1 className="mt-2 text-5xl lg:text-7xl text-gray-900 font-semibold tracking-tight text-pretty">
                Raotory <span className='text-gray-600'>Helps You Do the Best</span> Inventory <span className='text-gray-600'>Management</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 font-medium opacity-50 max-w-xl">
                We’re the collaborative inventory management platform of choice for 500+ companies in over 140 different countries.
            </p>
            {/* Button */}
            <div className='flex mt-10'>
                <ButtonRoundedSolid text="Try Raotory Now!" href="#" />
            </div>
        </div>
    </section>
  )
}