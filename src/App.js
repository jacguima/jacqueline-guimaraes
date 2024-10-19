import React, { useRef } from "react";
import "./App.css";
import Navbar from "./componentes/navbar/navbar";
import Blog from "./componentes/Blog";
import Duvidas from "./componentes/Duvidas";
import SpaceDesktop from "./componentes/space-desktop/space-desktop";
import EspacoMobile from "./componentes/EspacoMobile";
import Home from "./componentes/home/home";
import Opinioes from "./componentes/Opinioes";
import Services from "./componentes/services/services";
import Rodape from "./componentes/Rodape";
import AboutMeDesktop from "./componentes/about-me-desktop/about-me-desktop";
import Wpp from "./componentes/Wpp";
import BlogMob from "./componentes/BlogMob";
import AboutMeMobile from "./componentes/about-me-mobile/about-me-mobile";
import SpaceMobile from "./componentes/space-mobile/space-mobile";

function App() {
  const aboutMeRef = useRef(null);
  const servicesRef = useRef(null);
  const spaceRef = useRef(null);
  const duvidasRef = useRef(null);
  const blogRef = useRef(null);
  const opinioesRef = useRef(null);
  const contatosRef = useRef(null);

  const scrollToRef = (ref) => () =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="app">
      <Home
        scrollToSobreMim={scrollToRef(aboutMeRef)}
        scrollToPsicoterapia={scrollToRef(servicesRef)}
        scrollToEspaco={scrollToRef(spaceRef)}
        scrollToContatos={scrollToRef(contatosRef)}
        scrollToBlog={scrollToRef(blogRef)}
      />
      <div className="colado">
        <Navbar
          scrollToHome={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          scrollToSobreMim={scrollToRef(aboutMeRef)}
          scrollToPsicoterapia={scrollToRef(servicesRef)}
          scrollToEspaco={scrollToRef(spaceRef)}
          scrollToBlog={scrollToRef(blogRef)}
          scrollToOpinioes={scrollToRef(opinioesRef)}
          scrollToDuvidas={scrollToRef(duvidasRef)}
        />
      </div>
      <div className="container">
        <div className={"about-me-mobile-container"}>
          <AboutMeMobile ref={aboutMeRef} />
        </div>
        <div className={"about-me-desktop-container"}>
          <AboutMeDesktop ref={aboutMeRef} />
        </div>
        <Services ref={servicesRef} />
        <div className={"space-desktop-container"}>
          <SpaceDesktop ref={spaceRef} />
        </div>
        <div className={"space-mobile-container"}>
          <SpaceMobile ref={spaceRef} />
        </div>
        {/*<div ref={espacoRef}>*/}
        {/*  <Espaco />*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <EspacoMobile />*/}
        {/*</div>*/}
        {/*<Opinioes ref={opinioesRef} />*/}
        {/*<div ref={duvidasRef}>*/}
        {/*  <Duvidas />*/}
        {/*</div>*/}
        {/*<div ref={blogRef}>*/}
        {/*  <Blog />*/}
        {/*</div>*/}

        {/*<div>*/}
        {/*  <BlogMob />*/}
        {/*</div>*/}

        {/*<div ref={contatosRef}>*/}
        {/*  <Rodape />*/}
        {/*</div>*/}
        {/*<Wpp />*/}
      </div>
    </div>
  );
}

export default App;
