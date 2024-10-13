import "./about-me-desktop.css";
import ProfilePicture from "../../assets/images/foto-jac.jpg";

const AboutMeDesktop = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-bg"></div>
      <div style={{height: '100%'}} className="container-narrow">
        <div className="about-me-content">
          <div className="about-me-text">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <h2 style={{ textAlign: "center" }}>Sobre mim</h2>
              <p>
                Olá! Sou a Jacqueline Guimarães, psicóloga clínica, graduada
                pelo UniCEUB e inscrita no Conselho Regional de Psicologia CRP -
                01/25708.
              </p>
              <p>
                Adoto os princípios éticos e técnicos da Psicologia Humanista em
                minha prática clínica, sendo especialista na Abordagem Centrada
                na Pessoa (ACP) pela UNEPOS.
              </p>
              <p>
                Proporciono um ambiente ético, confidencial e acolhedor a fim de
                que meus Clientes possam explorar suas emoções e pensamentos de
                forma livre e confidencial.
              </p>
            </div>
            <button className="schedule-btn">
              <a
                className="schedule-btn-link"
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/5561992081099"
              >
                AGENDAR
              </a>
            </button>
          </div>
          <div className="profile-picture-container">
            <div className="profile-picture-border">
              <img
                className="profile-picture"
                src={ProfilePicture}
                alt="Profile Pictue"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeDesktop;
