import Navbar from "../../components/Navbar";
import TopBrands from "../../components/TopBrands";
import AboutFaq from "./AboutFaq";
import AboutFounderMessage from "./AboutFounderMessage";
import AboutHero from "./AboutHero";
import AboutStatistics from "./AboutStatistics";


export default function About() {
    return (
        <main>
            {/* Navbar section */}
            <Navbar />

            {/* Hero section */}
            <AboutHero />

            {/* Statistics section */}
            <AboutStatistics />

            {/* Founder's message section */}
            <AboutFounderMessage />

            {/* Top brands section */}
            <TopBrands />

            {/* FAQ section */}
            <AboutFaq />
        </main>
    )
}