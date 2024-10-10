import "./BarraMenu.css";
import Logo from "../../assets/images/logo-verde.png";
import WppLogo from "../../assets/images/whatsapp.png";

const BarraMenu = ({
  scrollToHome,
  scrollToSobreMim,
  scrollToPsicoterapia,
  scrollToEspaco,
  scrollToBlog,
  scrollToOpinioes,
  scrollToDuvidas,
}) => {
  return (
    <div className="barra-menu">
      <div className="logo-menu">
        <img src={Logo} alt="logo-menu" />
      </div>
      <div className="menu">
        <button onClick={scrollToHome}>Home</button>
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
          className="btn-wpp"
        >
          <img src={WppLogo} alt="wppLogo" />
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
  );
};

export default BarraMenu;
