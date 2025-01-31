import Navbar from "../../components/Navbar";
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
            
        </main>
    )
}