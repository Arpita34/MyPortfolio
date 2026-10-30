import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import { Skills } from "./components/Skills/Skills";
import { Experience } from "./components/Experience/Experience";
import { Work } from "./components/Work/Work";
import { Education } from "./components/Education/Education";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { BlurBlob } from "./BlurBlob";
import "./index.css";

function App() {
  return (
    <div className="relative bg-cream dot-grid text-ink overflow-hidden">
      {/* Blobs are decorative; hidden on phones to keep scrolling smooth */}
      <div className="hidden md:block">
        <BlurBlob position={{ top: "18%", left: "15%" }} size={{ width: "32%", height: "30%" }} color="#D9CCFF" />
        <BlurBlob position={{ top: "45%", left: "90%" }} size={{ width: "24%", height: "20%" }} color="#C6EBDC" />
        <BlurBlob position={{ top: "70%", left: "8%" }} size={{ width: "26%", height: "20%" }} color="#CFE2FF" />
      </div>
      <div className="relative">
        <Navbar />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
