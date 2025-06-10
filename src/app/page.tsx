import { AboutSection } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { OurNumberSection } from "@/components/OurNumberSection";
import { Service } from "@/components/Service";

export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <AboutSection/>
        <OurNumberSection/>
        <Service/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
