import "./home.css";
import React from "react";
import LogoInsta from "../../assets/images/insta-logo.png";
import LogoMail from "../../assets/images/email-logo.png";
import LogoWpp from "../../assets/images/wpp-logo.png";
import LogoLink from "../../assets/images/logo-link.png";
import LogoBranca from "../../assets/images/LogoSemSombra.png";

const Home = ({
  scrollToSobreMim,
  scrollToPsicoterapia,
  scrollToEspaco,
  scrollToContatos,
  scrollToBlog,
}) => {
  return (
    <div className="home-bg">
      <div className="container-narrow">
        {/* <div className="bg-video">
        <video src={VideoBg} autoPlay loop muted />
      </div> */}
        <div className="home-wrapper">
          <div className="logo-container">
            <img className="logo" src={LogoBranca} alt="logo" />
          </div>
          <div className="links">
            <button onClick={scrollToSobreMim}>SOBRE MIM</button>
            <button onClick={scrollToPsicoterapia}>PSICOTERAPIA</button>
            <button onClick={scrollToEspaco}>ESPAÇO</button>
            <button onClick={scrollToContatos}>ENTRE EM CONTATO</button>
            <button onClick={scrollToBlog}>BLOG: EM BREVE</button>
            <div className="contact">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com"
              >
                <img className="icon insta" src={LogoInsta} alt="insta" />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="mailto:jacqueline.g.nunes@gmail.com"
              >
                <img className="icon mail" src={LogoMail} alt="email" />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://wa.me/5561992081099"
              >
                <img className="icon wpp" src={LogoWpp} alt="wpp" />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://linktr.ee/psijacquelineguimaraes?utm_source=linktree_admin_share"
              >
                <img className="icon linktree" src={LogoLink} alt="link" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
