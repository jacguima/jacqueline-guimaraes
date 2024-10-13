import "./about-me-mobile.css";
import ProfilePicture from "../../assets/images/foto2jac.png";

const AboutMeMobile = () => {
  return (
    <div className="about-me-mobile container-narrow">
      <div className={"title-container"}>
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <path
            id="curve"
            fill="transparent"
            d="M 50,200 A 400,400 0 0,1 550,200"
          />

          <text width="500" font-size="30" fill="#7d7d4a">
            <textPath href="#curve" startOffset="50%" text-anchor="middle">
              Sobre mim
            </textPath>
          </text>
        </svg>
      </div>

      <div className="profile-picture-container">
        <img
          className="profile-picture"
          src={ProfilePicture}
          alt="Profile Pictue"
        />
      </div>

      <div className={"text-content"}>
        <h2 className={"content-title"}>
          Olá, Sou a<br />
          Jacqueline Guimarães
        </h2>
        <p className={"profession"}>PSICÓLOGA CLÍNICA</p>
        <p className={"dots"}>&#9675; &#9675; &#9675; &#9675;</p>
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
