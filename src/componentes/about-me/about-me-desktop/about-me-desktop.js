import "./about-me-desktop.css";
import ProfilePicture from "../../../assets/images/profile-picture-desktop.png";
import ScheduleButton from "../../../shared/schedule-button/schedule-button";

const AboutMeDesktop = () => {
  return (
    <div className="about-me-desktop">
      <div className="about-me-bg"></div>
      <div style={{ height: "100%" }} className="container-narrow">
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
                Olá! Sou a Jacqueline Guimarães, <b>psicóloga clínica</b>.
              </p>
              <p>
                Graduada em Psicologia pelo UniCEUB e inscrita no Conselho
                Regional de Psicologia CRP - 01/25708.
              </p>
              <p>
                Adoto os princípios éticos e técnicos da Psicologia Humanista em
                minha prática clínica, sendo{" "}
                <b>Especialista na Abordagem Centrada na Pessoa (ACP)</b> pela
                UNEPOS.
              </p>
              <p>
                Proporciono um ambiente ético, confidencial e acolhedor a fim de
                que possa explorar suas emoções e pensamentos de forma livre e
                confidencial.
              </p>
              <p>
                Atualmente, atendo na modalidade online pessoas de toda parte do
                mundo. Construo com estudo, escuta e cuidado uma clínica
                pensando nas demandas do <b>paciente</b>.
              </p>
            </div>
            <ScheduleButton />
          </div>
          <div className="profile-picture-container">
            {/*<div className="profile-picture-border">*/}
            <img
              className="profile-picture"
              src={ProfilePicture}
              alt="Profile Pictue"
            />
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeDesktop;
