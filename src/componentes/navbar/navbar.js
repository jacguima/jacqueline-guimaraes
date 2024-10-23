import "./navbar.css";
import Logo from "../../assets/images/logo-verde.png";
import WppLogo from "../../assets/images/whatsapp.png";
import { Slant as Hamburger } from "hamburger-react";
import { useState } from "react";

const Navbar = ({
  scrollToHome,
  scrollToSobreMim,
  scrollToPsicoterapia,
  scrollToEspaco,
  scrollToBlog,
  scrollToOpinioes,
  scrollToDuvidas,
}) => {
  const [isOpen, setOpen] = useState(false);

  // Helper function to handle link clicks
  const handleLinkClick = (scrollFunction) => () => {
    setOpen(false); // Collapse the hamburger menu
    scrollFunction(); // Scroll to the desired section
  };

  return (
    <div className="container-wide">
      <div className={`navbar ${isOpen ? "menu-opened" : ""}`}>
        <div className="navbar-wrapper">
          <div className="logo-container">
            <img
              className="logo-img"
              src={Logo}
              alt="Logo"
              onClick={scrollToHome}
            />
          </div>
          <div className="hamburger-btn-container">
            <Hamburger
              size={28}
              color="#777e5c"
              distance="sm"
              toggled={isOpen}
              toggle={setOpen}
              hideOutline={false}
              rounded
            />
          </div>
          <div className="links links-navbar">
            <button onClick={scrollToSobreMim}>Sobre mim</button>
            <button onClick={scrollToPsicoterapia}>Psicoterapia</button>
            <button onClick={scrollToEspaco}>Espaço</button>
            <button onClick={scrollToOpinioes}>Opiniões</button>
            <button onClick={scrollToDuvidas}>Dúvidas</button>
            <button onClick={scrollToBlog}>Blog: em breve!</button>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://wa.me/5561992081099"
              className="wpp-btn"
            >
              <img className="navbar-wpp-logo" src={WppLogo} alt="Wpp Logo" />
              Fale comigo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="links links-hamburger">
          <button onClick={handleLinkClick(scrollToSobreMim)}>Sobre mim</button>
          <button onClick={handleLinkClick(scrollToPsicoterapia)}>
            Psicoterapia
          </button>
          <button onClick={handleLinkClick(scrollToEspaco)}>Espaço</button>
          <button onClick={handleLinkClick(scrollToOpinioes)}>Opiniões</button>
          <button onClick={handleLinkClick(scrollToDuvidas)}>Dúvidas</button>
          <button onClick={handleLinkClick(scrollToBlog)}>
            Blog: em breve!
          </button>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://wa.me/5561992081099"
            className="wpp-btn"
            onClick={() => setOpen(false)}
          >
            <img className="navbar-wpp-logo" src={WppLogo} alt="Wpp Logo" />
            Fale comigo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
