import { useState } from 'react'
import ButtonRoundedSolid from '../../components/ButtonRoundedSolid'

export default function HomeHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className="max-w-6xl mx-auto mt-24">
        <div className="text-center">
            <h1 className="text-[4rem] font-semibold tracking-tight text-balance text-gray-900 leading-20">
                <span className='text-gray-600'>Manage Inventory Like a Pro:</span> From Stock to Sales, <span className='text-gray-600'>All in One Place</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 max-w-[648px] mx-auto">
                Make data-driven decisions with powerful analytics and minimize losses with precise inventory control
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <ButtonRoundedSolid text="Get Started" href="#" />
                <ButtonRoundedSolid bgColor="bg-gray-d9d9d9" hoverColor="hover:bg-gray-400" textColor="text-gray-600" text="Learn More" href="#" />
            </div>
        </div>
    </section>
  )
}