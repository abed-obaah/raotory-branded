import Navbar from "../../components/Navbar";
import MockupForContactPage from "../../assets/mockup-for-contact-page.png";

export default function ContactHero() {

  return (
    <section className="bg-blue-0e90da pb-10 md:pb-0">
        {/* Section wrapper */}
        <div className="flex flex-col gap-10 md:gap-16 max-w-6xl mx-auto">
            {/* Navbar */}
            <div className="md:pt-16 z-10">
                <Navbar />
            </div>
            {/* Lower section */}
            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-6 relative min-h-[24rem] px-4 md:px-0">
                {/* Title */}
                <div className="md:w-[40%]">
                    <p className="text-xl text-white-f8fdff font-medium">
                        Support
                    </p>
                    <h1 className="mt-2 text-5xl text-white-f8fdff lg:text-[5rem] font-medium lg:leading-[88px] tracking-tight">
                        How can we <span className="text-gray-300">help</span> you?
                    </h1>
                </div>
                {/* Mockup image */}
                <div className="md:w-[60%]">
                    <div className="md:absolute top-0">
                        <img 
                            src={MockupForContactPage} 
                            alt="Mockup image of Raotori's dashboard" 
                            className="w-full h-full object-cover"
                        />                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}