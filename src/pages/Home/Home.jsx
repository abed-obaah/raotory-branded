import Navbar from "../../components/Navbar";
import TestimonialCarousel from "../../components/TestimonialCarousel";
import TopBrands from "../../components/TopBrands";
import HomeFeatures from "./HomeFeatures";
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

            {/* Features section */}
            <HomeFeatures />

            {/* Testimonial section */}
            <TestimonialCarousel />

        </main>
    )
}