import "./space.css";
import MapSouth from "../../assets/images/south.png";
import MapNorth from "../../assets/images/north.png";
import Pin from "../../assets/images/pin.png";
import Phone from "../../assets/images/celular.png";
import CheckIcon from "../../shared/check-icon";

const Space = () => {
  return (
    <div className="space-section">
      <div
        className={"container-narrow"}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h2 className={"title"}>O espaço</h2>
        <div className={"space-content"}>
          <div className={"space-top"}>
            <div className={"map"}>
              <a
                className={"map-image-wrapper map-image-north"}
                href="https://maps.app.goo.gl/V99mxENYgtX7sw3X9"
                target="_blank"
                rel="noreferrer"
              >
                <img src={MapNorth} alt="Localização Norte" />
              </a>
              <div className={"map-address address-north"}>
                <p className={"address-main-text"}>Asa Norte</p>
                <div className={"address-details"}>
                  <div className={"pin-wrapper"}>
                    <img src={Pin} alt="Location pin" />
                  </div>
                  <p className={"address-detail-text"}>Shopping ID</p>
                </div>
              </div>
            </div>
            <div className={"map"}>
              <h3 className={"online-on-site-text text-on-site"}>
                Atendimento Presencial
              </h3>
              <a
                className={"map-image-wrapper map-image-south"}
                href="https://maps.app.goo.gl/qDwMQZnpSivMpLRi7"
                target="_blank"
                rel="noreferrer"
              >
                <img src={MapSouth} alt="Localização Sul" />
              </a>
              <div className={"map-address address-south"}>
                <p className={"address-main-text"}>Asa Sul</p>
                <div className={"address-details"}>
                  <div className={"pin-wrapper"}>
                    <img src={Pin} alt="Location pin" />
                  </div>
                  <p className={"address-detail-text"}>
                    Ed. San Marino - SEP <br /> Sul Quadra 707/907
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={"space-bottom"}>
            <div style={{ display: "flex" }}>
              <div
                style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}
              >
                <h3 className={"online-on-site-text"}>Atendimento Online</h3>
              </div>
              <div style={{ display: "flex", flex: 1 }}></div>
            </div>
            <div style={{ display: "flex", gap: "6rem" }}>
              <div
                style={{ display: "flex", flex: 4, justifyContent: "flex-end" }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    justifyContent: "center",
                  }}
                >
                  <div className={"check-text-container"}>
                    <CheckIcon />
                    <p>Acessibilidade</p>
                  </div>
                  <div className={"check-text-container"}>
                    <CheckIcon />
                    <p>Flexibilidade</p>
                  </div>
                  <div className={"check-text-container"}>
                    <CheckIcon />
                    <p>Segurança</p>
                  </div>
                  <div className={"check-text-container"}>
                    <CheckIcon />
                    <p>Conforto</p>
                  </div>
                  <div className={"check-text-container"}>
                    <CheckIcon />
                    <p>Conveniência</p>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flex: 6 }}>
                <div className={"phone-img-container"}>
                  <img className={"phone-img"} src={Phone} alt="Celular" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Space;
