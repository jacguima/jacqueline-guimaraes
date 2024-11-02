import React, { useRef } from "react";
import "./App.css";
import Navbar from "./componentes/navbar/navbar";
import Questions from "./componentes/questions/questions";
import SpaceDesktop from "./componentes/space/space-desktop/space-desktop";
import Home from "./componentes/home/home";
import Reviews from "./componentes/reviews/reviews";
import Services from "./componentes/services/services";
import AboutMeDesktop from "./componentes/about-me/about-me-desktop/about-me-desktop";
import Whatsapp from "./componentes/whatsapp/whatsapp";
import AboutMeMobile from "./componentes/about-me/about-me-mobile/about-me-mobile";
import SpaceMobile from "./componentes/space/space-mobile/space-mobile";
import OnlineMobile from "./componentes/online-mobile/online-mobile";
import MosaicDesktop from "./componentes/mosaic/mosaic-desktop/mosaic-desktop";
import MosaicMobile from "./componentes/mosaic/mosaic-mobile/mosaic-mobile";
import Footer from "./componentes/footer/footer";
import Warning from "./componentes/warning/warning";

function App() {
  const aboutMeRef = useRef(null);
  const servicesRef = useRef(null);
  const spaceRef = useRef(null);
  const questionsRef = useRef(null);
  const mosaicRef = useRef(null);
  const reviewsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToRef = (ref) => () =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="app">
      <Home
        scrollToSobreMim={scrollToRef(aboutMeRef)}
        scrollToPsicoterapia={scrollToRef(servicesRef)}
        scrollToEspaco={scrollToRef(spaceRef)}
        scrollToBlog={scrollToRef(mosaicRef)}
      />
      <div className="colado">
        <Navbar
          scrollToHome={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          scrollToSobreMim={scrollToRef(aboutMeRef)}
          scrollToPsicoterapia={scrollToRef(servicesRef)}
          scrollToEspaco={scrollToRef(spaceRef)}
          scrollToBlog={scrollToRef(mosaicRef)}
          scrollToOpinioes={scrollToRef(reviewsRef)}
          scrollToDuvidas={scrollToRef(questionsRef)}
        />
      </div>
      <div className="container">
        <div ref={aboutMeRef} className="scroll-section">
          <div className="about-me-mobile-container">
            <AboutMeMobile />
          </div>
          <div className="about-me-desktop-container">
            <AboutMeDesktop />
          </div>
        </div>

        <div ref={servicesRef} className="scroll-section">
          <Services />
        </div>

        <div ref={spaceRef} className="scroll-section">
          <div className="space-desktop-container">
            <SpaceDesktop />
          </div>
          <div className="space-mobile-container">
            <SpaceMobile />
            <OnlineMobile />
          </div>
        </div>

        <div ref={reviewsRef} className="scroll-section">
          <Reviews />
        </div>

        <div ref={questionsRef} className="scroll-section">
          <Questions />
        </div>

        <div ref={mosaicRef} className="scroll-section">
          <div className="mosaic-desktop-container">
            <MosaicDesktop />
          </div>
          <div className="mosaic-mobile-container">
            <MosaicMobile />
          </div>
        </div>

        <Warning />

        <div ref={footerRef} className="scroll-section">
          <Footer />
        </div>

        <Whatsapp />
      </div>
    </div>
  );
}

export default App;
