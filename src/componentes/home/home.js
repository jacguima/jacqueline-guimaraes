import "./home.css";
import React from "react";
import LogoInsta from "../../assets/images/insta-logo.png";
import LogoMail from "../../assets/images/email-logo.png";
import LogoWpp from "../../assets/images/wpp-logo.png";
import LogoLink from "../../assets/images/logo-link.png";
import LogoBranca from "../../assets/images/logo-branca.png";

const Home = ({
  scrollToSobreMim,
  scrollToPsicoterapia,
  scrollToEspaco,
  scrollToBlog,
}) => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5561992081099", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="home-bg">
      <div className="container-narrow">
        <div className="home-wrapper">
          <div className="logo-container">
            <img className="logo" src={LogoBranca} alt="logo" />
          </div>
          <div className="links">
            <button onClick={scrollToSobreMim}>sobre mim</button>
            <button onClick={scrollToPsicoterapia}>psicoterapia</button>
            <button onClick={scrollToEspaco}>espaço</button>
            <button onClick={openWhatsApp}>entre em contato</button>
            <button onClick={scrollToBlog}>blog: em breve!</button>
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
