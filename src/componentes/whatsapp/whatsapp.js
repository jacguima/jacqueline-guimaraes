import "./whatsapp.css";
import WppLogo from "../../assets/images/wpp-schedule.png";

const Whatsapp = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/5561992081099", "_blank", "noopener,noreferrer");
  };

  return (
    <div className={"container-wide whatsapp-container"}>
      <div className="whatsapp-img-wrapper">
        <div className="whatsapp-img-container">
          <img
            className={"whatsapp-img"}
            src={WppLogo}
            alt="wpp"
            onClick={openWhatsApp}
          />
        </div>
      </div>
    </div>
  );
};

export default Whatsapp;
