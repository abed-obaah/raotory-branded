import { useState } from 'react'
import ButtonRoundedSolid from '../../components/ButtonRoundedSolid'

export default function HomeCallToAction() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className="max-w-6xl mx-auto my-24">
        <div className="text-center">
            <h1 className="text-[4rem] font-semibold tracking-tight text-gray-900 leading-15">
                <span className='text-gray-600'>Ready to Streamline Your <span className='text-gray-900'>Inventory Management?</span></span>
            </h1>
            <div className="mt-11 flex items-center justify-center gap-x-5">
                <ButtonRoundedSolid text="Get Started" href="#" />
                <ButtonRoundedSolid bgColor="bg-gray-d9d9d9" hoverColor="hover:bg-gray-400" textColor="text-gray-600" text="Learn More" href="#" />
            </div>
        </div>
    </section>
  )
}