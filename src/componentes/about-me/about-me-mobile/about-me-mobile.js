import "./about-me-mobile.css";
import ProfileBG from "../../../assets/images/about-me-profile.png";

const AboutMeMobile = () => {
  return (
    <div className="container-narrow">
      <div className="about-me-mobile">
        <div className={"profile-bg-container"}>
          <img className={"profile-bg"} src={ProfileBG} alt="Profile BG" />
        </div>
        <div className={"paragraphs-container"}>
          <p>
            Graduada pelo UniCEUB e inscrita no Conselho Regional de Psicologia
            CRP - 01/25708.
          </p>
          <p>
            Adoto os princípios éticos e técnicos da Psicologia Humanista em
            minha prática clínica, sendo especialista na Abordagem Centrada na
            Pessoa (ACP) pela UNEPOS.
          </p>
          <p>
            Proporciono um ambiente ético, confidencial e acolhedor a fim de que
            meus Clientes possam explorar suas emoções e pensamentos de forma
            livre e confidencial.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeMobile;
