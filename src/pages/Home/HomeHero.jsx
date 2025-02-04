import ButtonRoundedSolid from '../../components/ButtonRoundedSolid'

export default function HomeHero() {

  return (
    <section className="section-px section-mt max-w-6xl mx-auto">
        <div className="text-center">
            <h1 className="text-gray-900 text-5xl lg:text-[4rem] font-semibold tracking-tight text-balance lg:leading-20">
                <span className='text-gray-600'>Manage Inventory Like a Pro:</span> From Stock to Sales, <span className='text-gray-600'>All in One Place</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 max-w-[648px] mx-auto">
                Make data-driven decisions with powerful analytics and minimize losses with precise inventory control
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
                <ButtonRoundedSolid text="Get Started" href="/account/register" />
                <ButtonRoundedSolid bgColor="bg-gray-d9d9d9" hoverColor="hover:bg-gray-400" textColor="text-gray-600" text="Learn More" href="/about" />
            </div>
        </div>
    </section>
  )
}