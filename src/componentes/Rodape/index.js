import "./Rodape.css";
import WppLogo from "../../assets/images/whatsapp.png";
import MailLogo from "../../assets/images/email-logo.png";
import LogoBranca from "../../assets/images/LogoSemSombra.png";
import Linktree from "../../assets/images/logo-link.png";
import WppBranco from "../../assets/images/wpp-logo.png";
import InstaLogo from "../../assets/images/insta-logo.png";

const Rodape = () => {
  return (
    <div className="container-base principal-rodape">
      <div className="topo-rodape">
        <div className="contatos-rodape">
          <div className="contact-info">
            <img src={WppLogo} alt="wpp" />
            <a
              href="https://wa.me/5561992081099"
              target="_blank"
              rel="noreferrer"
            >
              <p>+55 61 99208-1099</p>
            </a>
          </div>
          <div className="contact-info">
            <img src={MailLogo} alt="wpp" />
            <a
              href="mailto:jacqueline.g.nunes@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <p>Jacqueline.g.nunes@gmail.com</p>
            </a>
          </div>
          <div className="contact-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="white"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScIrmm5u32gXkl9oTwN9-srG2tLrdUdbKQp4VjwrqVfB2w4Yw/viewform"
              target="_blank"
              rel="noreferrer"
            >
              <p>Preencher Google Forms</p>
            </a>
          </div>
        </div>
        <div className="logo-rodape">
          <img src={LogoBranca} alt="logo" />
        </div>
      </div>
      <div className="divisor-rodape"></div>
      <div className="rodape-rodape">
        <div className="politicas-termos">
          <p>Política de Privacidade</p>
          <p>Termos e condições</p>
          <p>© 2023 Jacqueline Guimarães ∙ Todos os direitos reservados</p>
        </div>
        <div className="icons-rodape">
          <div className="rodape-icons">
            <div>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={InstaLogo} alt="" className="insta-icon-rodape" />
              </a>
            </div>
            <div>
              <a
                href="mailto:jacqueline.g.nunes@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={MailLogo} alt="" className="mail-icon-rodape" />
              </a>
            </div>
            <div>
              <a
                href="https://wa.me/5561992081099"
                target="_blank"
                rel="noreferrer"
              >
                <img src={WppBranco} alt="" className="insta-icon-rodape" />
              </a>
            </div>
            <div>
              <a
                href="https://linktr.ee/psijacquelineguimaraes?utm_source=linktree_admin_share"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Linktree} alt="" className="link-icon-rodape" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rodape;
