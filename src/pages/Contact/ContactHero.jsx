import Navbar from "../../components/Navbar";
import MockupForContactPage from "../../assets/mockup-for-contact-page.png";

export default function ContactHero() {

  return (
    <section className="bg-blue-0e90da">
        {/* Section wrapper */}
        <div className="flex flex-col gap-16 max-w-6xl mx-auto">
            {/* Navbar */}
            <div className="pt-16">
                <Navbar />
            </div>
            {/* Lower section */}
            <div className="flex items-center gap-6 relative min-h-[24rem]">
                {/* Title */}
                <div className="w-[40%]">
                    <p className="text-xl text-white-f8fdff font-medium">
                        Support
                    </p>
                    <h2 className="mt-2 text-white-f8fdff text-[5rem] font-medium leading-[88px] tracking-tight">
                        How can we <span className="text-gray-300">help</span> you?
                    </h2>
                </div>
                {/* Mockup image */}
                <div className="">
                    <div className="absolute top-0">
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