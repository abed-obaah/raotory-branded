import ButtonRoundedSolid from '../../components/ButtonRoundedSolid'

export default function AboutHero() {
  return (
    <section className="max-w-6xl mx-auto mt-24">
        <div className="flex flex-col max-w-3xl">
            <p className="text-3xl text-gray-600 opacity-50">
                About Us
            </p>
            <h2 className="mt-2 font-semibold tracking-tight text-gray-900 text-pretty text-7xl">
                Raotory <span className='text-gray-600'>Helps You Do the Best</span> Inventory <span className='text-gray-600'>Management</span>
            </h2>
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