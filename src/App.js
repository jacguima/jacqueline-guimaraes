import React, { useRef } from "react";
import "./App.css";
import BarraMenu from "./componentes/BarraMenu";
import Blog from "./componentes/Blog";
import Duvidas from "./componentes/Duvidas";
import Espaco from "./componentes/Espaco";
import EspacoMobile from "./componentes/EspacoMobile";
import Home from "./componentes/Home/";
import Opinioes from "./componentes/Opinioes";
import Psicoterapia from "./componentes/Psicoterapia";
import Rodape from "./componentes/Rodape";
import SobreMim from "./componentes/SobreMim";
import Wpp from "./componentes/Wpp";
import BlogMob from "./componentes/BlogMob";

function App() {
  const sobreMimRef = useRef(null);
  const psicoterapiaRef = useRef(null);
  const espacoRef = useRef(null);
  const duvidasRef = useRef(null);
  const blogRef = useRef(null);
  const opinioesRef = useRef(null);
  const contatosRef = useRef(null);

  return (
    <div className="app">
      <nav className="topo">
        <Home
          scrollToSobreMim={() =>
            sobreMimRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToPsicoterapia={() =>
            psicoterapiaRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToEspaco={() =>
            espacoRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToContatos={() =>
            contatosRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToBlog={() =>
            blogRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </nav>
      <div className="colado">
        <BarraMenu
          scrollToHome={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          scrollToSobreMim={() =>
            sobreMimRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToPsicoterapia={() =>
            psicoterapiaRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToEspaco={() =>
            espacoRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToBlog={() =>
            blogRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToOpinioes={() =>
            opinioesRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToDuvidas={() =>
            duvidasRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      <div className="container">
        <div ref={sobreMimRef}>
          <SobreMim />
        </div>
        <div ref={psicoterapiaRef}>
          <Psicoterapia />
        </div>
        <div ref={espacoRef}>
          <Espaco />
        </div>
        <div>
          <EspacoMobile />
        </div>
        <Opinioes ref={opinioesRef} />
        <div ref={duvidasRef}>
          <Duvidas />
        </div>
        <div ref={blogRef}>
          <Blog />
        </div>

        <div>
          <BlogMob />
        </div>

        <div ref={contatosRef}>
          <Rodape />
        </div>
        <Wpp />
      </div>
    </div>
  );
}

export default App;
