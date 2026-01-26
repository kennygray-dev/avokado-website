import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import WhoWeAre from "./components/sections/WhoWeAre";
import WhatWeDo from "./components/sections/WhatWeDo";
import Projects from "./components/sections/Projects";
import WhyUs from "./components/sections/WhyUs";
import ContactCTA from "./components/sections/ContactCTA";
import Footer from "./components/sections/Footer";

export default function Page() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Services />
      <WhoWeAre />
      <WhatWeDo />
      <Projects />
      <WhyUs />
      {/* Add id for scrolling */}
      <ContactCTA id="contact" />
      <Footer />
    </main>
  );
}