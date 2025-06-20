import { AboutSection } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Service } from "@/components/Service";

export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <AboutSection/>
{/*         <OurNumberSection/>
 */}        <Service/>
        <CTA />
        {/* <TestemonialSection/> */}
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
