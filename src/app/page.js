import AboutUs from "@/components/landingPage/AboutUs";
import Features from "@/components/landingPage/Features";
import HeroSection from "@/components/landingPage/HeroSection";
import Mission from "@/components/landingPage/Mission";
import Testimonials from "@/components/landingPage/Testimonials";
import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <div className="text-center">
        <section
          id="hero"
          className="h-auto bg-gray-200 flex items-center justify-center"
        >
          <HeroSection/>
        </section>
        <section
          id="about"
          className="h-auto bg-white flex items-center justify-center"
        >
          <AboutUs/>
        </section>
        <section
          id="mission"
          className="h-auto bg-gray-100 flex items-center justify-center"
        >
          <Mission/>
        </section>
        <section
          id="features"
          className="h-auto bg-white flex items-center justify-center"
        >
          <Features/>
        </section>
        <section
          id="testimonials"
          className="h-auto bg-gray-100 flex items-center justify-center"
        >
          <Testimonials/>
        </section>
      </div>
    </div>
  );
}
