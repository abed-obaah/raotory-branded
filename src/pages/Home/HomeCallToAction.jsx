import ButtonRoundedSolid from '../../components/ButtonRoundedSolid'

export default function HomeCallToAction() {

  return (
    <section className="section-px section-mt max-w-6xl mx-auto">
        <div className="text-center">
            <h1 className="text-4xl md:text-[4rem] font-semibold tracking-tight text-gray-900 md:leading-15">
                <span className='text-gray-600'>Ready to Streamline Your <span className='text-gray-900'>Inventory Management?</span></span>
            </h1>
            <div className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-x-5 gap-y-4">
                <ButtonRoundedSolid text="Get Started" href="/account/register" />
                <ButtonRoundedSolid bgColor="bg-gray-d9d9d9" hoverColor="hover:bg-gray-400" textColor="text-gray-600" text="Learn More" href="/about" />
            </div>
        </div>
    </section>
  )
}