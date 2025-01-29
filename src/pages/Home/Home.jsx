import Navbar from "../../components/Navbar";
import HomeHero from "./HomeHero";
import HomeMockup from "./HomeMockup";

export default function Home() {
    return (
        <main>
            {/* Navbar section */}
            <Navbar />

            {/* Hero section */}
            <HomeHero />

            {/* Mockup section */}
            <HomeMockup />

            {/* Hero section */}
            <HomeHero />            
            {/* Hero section */}
            <HomeHero />
            
        </main>
    )
}