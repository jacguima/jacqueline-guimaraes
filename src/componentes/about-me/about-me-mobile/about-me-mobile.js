import "./about-me-mobile.css";
import ProfileBG from "../../../assets/images/about-me-profile.png";
import ScheduleButton from "../../../shared/schedule-button/schedule-button";

const AboutMeMobile = () => {
  return (
    <div className="container-narrow">
      <div className="about-me-mobile">
        <div className={"profile-bg-container"}>
          <img className={"profile-bg"} src={ProfileBG} alt="Profile BG" />
        </div>
        <div className={"paragraphs-container"}>
          <p>
            Graduada em Psicologia pelo UniCEUB e inscrita no Conselho Regional
            de Psicologia CRP - 01/25708.
          </p>
          <p>
            Adoto os princípios éticos e técnicos da Psicologia Humanista em
            minha prática clínica, sendo{" "}
            <b>Especialista na Abordagem Centrada na Pessoa (ACP)</b> pela
            UNEPOS.
          </p>
          <p>
            Proporciono um ambiente ético, confidencial e acolhedor a fim de que
            possa explorar suas emoções e pensamentos de forma livre e
            confidencial.
          </p>
          <p>
            Atualmente, atendo na modalidade online pessoas de toda parte do
            mundo. Construo com estudo, escuta e cuidado uma clínica pensando
            nas demandas do <b>paciente</b>.
          </p>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <ScheduleButton />
        </div>
      </div>
    </div>
  );
};

export default AboutMeMobile;
