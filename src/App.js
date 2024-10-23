import React, { useRef } from "react";
import "./App.css";
import Navbar from "./componentes/navbar/navbar";
import Questions from "./componentes/questions/questions";
import SpaceDesktop from "./componentes/space/space-desktop/space-desktop";
import Home from "./componentes/home/home";
import Reviews from "./componentes/reviews/reviews";
import Services from "./componentes/services/services";
import AboutMeDesktop from "./componentes/about-me/about-me-desktop/about-me-desktop";
import Wpp from "./componentes/Wpp";
import AboutMeMobile from "./componentes/about-me/about-me-mobile/about-me-mobile";
import SpaceMobile from "./componentes/space/space-mobile/space-mobile";
import OnlineMobile from "./componentes/online-mobile/online-mobile";
import MosaicDesktop from "./componentes/mosaic/mosaic-desktop/mosaic-desktop";
import MosaicMobile from "./componentes/mosaic/mosaic-mobile/mosaic-mobile";
import Footer from "./componentes/footer/footer";

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
        scrollToContatos={scrollToRef(footerRef)}
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
        <div className="about-me-mobile-container" ref={aboutMeRef}>
          <AboutMeMobile />
        </div>
        <div className="about-me-desktop-container">
          <AboutMeDesktop />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
        <div className="space-desktop-container" ref={spaceRef}>
          <SpaceDesktop />
        </div>
        <div className="space-mobile-container">
          <SpaceMobile />
          <OnlineMobile />
        </div>
        <div ref={reviewsRef}>
          <Reviews />
        </div>
        <div ref={questionsRef}>
          <Questions />
        </div>
        <div className="mosaic-desktop-container" ref={mosaicRef}>
          <MosaicDesktop />
        </div>
        <div className="mosaic-mobile-container">
          <MosaicMobile />
        </div>
        <div ref={footerRef}>
          <Footer />
        </div>
        <Wpp />
      </div>
    </div>
  );
}

export default App;
