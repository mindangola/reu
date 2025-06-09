import { AboutSection } from "@/components/About";
import { Header } from "@/components/Header";
import { OurNumberSection } from "@/components/OurNumberSection";

export default function Home() {
  return (
    <div>
      <Header/>
      <main>
        <AboutSection/>
        <OurNumberSection/>
      </main>
    </div>
  );
}
