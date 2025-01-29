import Navbar from "../../components/Navbar";
import TopBrands from "../../components/TopBrands";
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

            {/* Top brands section */}
            <TopBrands />

        </main>
    )
}