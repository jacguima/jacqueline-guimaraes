import React, { useRef } from "react";
import "./App.css";
import Navbar from "./componentes/navbar/navbar";
import Blog from "./componentes/Blog";
import Duvidas from "./componentes/Duvidas";
import Espaco from "./componentes/Espaco";
import EspacoMobile from "./componentes/EspacoMobile";
import Home from "./componentes/home/home";
import Opinioes from "./componentes/Opinioes";
import Psicoterapia from "./componentes/Psicoterapia";
import Rodape from "./componentes/Rodape";
import AboutMeDesktop from "./componentes/about-me-desktop/about-me-desktop";
import Wpp from "./componentes/Wpp";
import BlogMob from "./componentes/BlogMob";
import AboutMeMobile from "./componentes/about-me-mobile/about-me-mobile";

function App() {
  const sobreMimRef = useRef(null);
  const psicoterapiaRef = useRef(null);
  const espacoRef = useRef(null);
  const duvidasRef = useRef(null);
  const blogRef = useRef(null);
  const opinioesRef = useRef(null);
  const contatosRef = useRef(null);

  const scrollToRef = (ref) => () =>
    ref.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="app">
        <Home
          scrollToSobreMim={scrollToRef(sobreMimRef)}
          scrollToPsicoterapia={scrollToRef(psicoterapiaRef)}
          scrollToEspaco={scrollToRef(espacoRef)}
          scrollToContatos={scrollToRef(contatosRef)}
          scrollToBlog={scrollToRef(blogRef)}
        />
      <div className="colado">
        <Navbar
          scrollToHome={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          scrollToSobreMim={scrollToRef(sobreMimRef)}
          scrollToPsicoterapia={scrollToRef(psicoterapiaRef)}
          scrollToEspaco={scrollToRef(espacoRef)}
          scrollToBlog={scrollToRef(blogRef)}
          scrollToOpinioes={scrollToRef(opinioesRef)}
          scrollToDuvidas={scrollToRef(duvidasRef)}
        />
      </div>
      <div className="container">
        <div className={"about-me-mobile-container"}>
          <AboutMeMobile ref={sobreMimRef} />
        </div>
        <div className={"about-me-desktop-container"}>
          <AboutMeDesktop ref={sobreMimRef} />
        </div>
        {/*<div ref={psicoterapiaRef}>*/}
        {/*  <Psicoterapia />*/}
        {/*</div>*/}
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
