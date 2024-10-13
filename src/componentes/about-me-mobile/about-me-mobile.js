import "./about-me-mobile.css";
import ProfilePicture from "../../assets/images/foto2jac.png";

const AboutMeMobile = () => {
  return (
    <div className="about-me-mobile">
      <div className={"title-container"}>
        <svg viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
          <path id="curve" fill="transparent" d="M 50,200 A 400,400 0 0,1 550,200" />

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
    </div>
  );
};

export default AboutMeMobile;
