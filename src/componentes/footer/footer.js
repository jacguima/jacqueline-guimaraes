import React from "react";
import "./footer.css";
import LogoBranca from "../../assets/images/LogoSemSombra.png";
import WppLogo from "../../assets/images/whatsapp.png";
import MailLogo from "../../assets/images/email-logo.png";
import Linktree from "../../assets/images/logo-link.png";
import WppBranco from "../../assets/images/wpp-logo.png";
import InstaLogo from "../../assets/images/insta-logo.png";
import { openLink } from "../../shared/utils";

const Footer = () => {
  return (
    <div className={"footer-section"}>
      <div className={"container-wide"}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={"top-container"}>
            <div className={"contact-list-container"}>
              <div
                className={"contact-item-container"}
                onClick={() => openLink("https://wa.me/5561992081099")}
              >
                <div className={"contact-icon-wrapper"}>
                  <img
                    className={"contact-icon"}
                    src={WppLogo}
                    alt="Wpp Logo"
                  />
                </div>
                <div className={"contact-text-wrapper"}>
                  <p>+55 61 99208-1099</p>
                </div>
              </div>
              <div
                className={"contact-item-container"}
                onClick={() => openLink("mailto:jacqueline.g.nunes@gmail.com")}
              >
                <div className={"contact-icon-wrapper"}>
                  <img
                    className={"contact-icon"}
                    src={MailLogo}
                    alt="Email Logo"
                  />
                </div>
                <div className={"contact-text-wrapper"}>
                  <p>jacqueline.g.nunes@gmail.com</p>
                </div>
              </div>
              <div
                className={"contact-item-container"}
                onClick={() => openLink("https://wa.me/5561992081099")}
              >
                <div className={"contact-icon-wrapper"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="white"
                    className="bi bi-pencil-square contact-icon"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                </div>
                <div className={"contact-text-wrapper"}>
                  <p>Preencher Google Forms</p>
                </div>
              </div>
            </div>
            <div className={"logo-wrapper"}>
              <img className={"logo-img"} src={LogoBranca} alt="Logo" />
            </div>
          </div>
          <div className={"bottom-container"}>
            <div className={"policy-container"}>
              <div className={"policy-start-container"}>
                <p>Política de Privacidade</p>
                <p>Termos e condições</p>
              </div>
              <div className={"policy-end-container"}>
                <div className={"policy-icon-wrapper"}>
                  <img src={InstaLogo} alt="" />
                </div>
                <div className={"policy-icon-wrapper"}>
                  <img src={MailLogo} alt="email" />
                </div>
                <div className={"policy-icon-wrapper"}>
                  <img src={WppBranco} alt="wpp" />
                </div>
                <div className={"policy-icon-wrapper"}>
                  <img src={Linktree} alt="linktree" />
                </div>
              </div>
            </div>
            <div className={"rights-container"}>
              <p>© 2023 Jacqueline Guimarães ∙ Todos os direitos reservados</p>
              <p className={"mauricio-azevedo-container"}>
                <b>Desenvolvido por</b>:{" "}
                <a
                  className={"mauricio-azevedo"}
                  rel="noreferrer"
                  target="_blank"
                  href="https://wa.me/5561920007402"
                >
                  Maurício Azevedo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
