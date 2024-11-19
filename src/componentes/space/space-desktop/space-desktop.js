import "./space-desktop.css";
import MapSouth from "../../../assets/images/south.png";
import MapNorth from "../../../assets/images/north.png";
import Pin from "../../../assets/images/pin.png";
import Phone from "../../../assets/images/phone.png";
import CheckIcon from "../../../shared/check-icon";
import ScrollingHighlightText from "../../../shared/scrolling-highlight-text/scrolling-highlight-text";
import { useEffect, useRef } from "react";
import { openLink } from "../../../shared/utils";

const SpaceDesktop = () => {
  const northMapRef = useRef(null);
  const northAddressRef = useRef(null);
  const southMapRef = useRef(null);
  const southAddressRef = useRef(null);

  useEffect(() => {
    const handleHover = (mapElement, addressElement) => {
      let isHoveringMap = false;
      let isHoveringAddress = false;

      const scaleUp = () => {
        mapElement.classList.add("hovered");
        addressElement.classList.add("hovered", "delay-scale");
      };

      const scaleDown = () => {
        mapElement.classList.remove("hovered");
        addressElement.classList.remove("hovered", "delay-scale");
      };

      mapElement.addEventListener("mouseenter", () => {
        if (!isHoveringAddress) {
          isHoveringMap = true;
          scaleUp();
        }
      });

      mapElement.addEventListener("mouseleave", () => {
        isHoveringMap = false;
        if (!isHoveringAddress) scaleDown();
      });

      addressElement.addEventListener("mouseenter", () => {
        if (!isHoveringMap) {
          isHoveringAddress = true;
          scaleUp();
        }
      });

      addressElement.addEventListener("mouseleave", () => {
        isHoveringAddress = false;
        if (!isHoveringMap) scaleDown();
      });
    };

    if (northMapRef.current && northAddressRef.current) {
      handleHover(northMapRef.current, northAddressRef.current);
    }

    if (southMapRef.current && southAddressRef.current) {
      handleHover(southMapRef.current, southAddressRef.current);
    }
  }, []);

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
                ref={northMapRef}
                className={"map-image-wrapper map-image-north"}
                href="https://maps.app.goo.gl/V99mxENYgtX7sw3X9"
                target="_blank"
                rel="noreferrer"
              >
                <img src={MapNorth} alt="Localização Norte" />
              </a>
              <div
                onClick={() =>
                  openLink("https://maps.app.goo.gl/V99mxENYgtX7sw3X9")
                }
                ref={northAddressRef}
                className={"map-address address-north"}
              >
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
                ref={southMapRef}
                className={"map-image-wrapper map-image-south"}
                href="https://maps.app.goo.gl/qDwMQZnpSivMpLRi7"
                target="_blank"
                rel="noreferrer"
              >
                <img src={MapSouth} alt="Localização Sul" />
              </a>
              <div
                ref={southAddressRef}
                className={"map-address address-south"}
                onClick={() =>
                  openLink("https://maps.app.goo.gl/qDwMQZnpSivMpLRi7")
                }
              >
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
            <div>
              <p className={"online-subtitle"}>
                <ScrollingHighlightText
                  threshold={0.3}
                  highlightColor="var(--beige)"
                >
                  Sessões 100% online para brasileiros em qualquer lugar do
                  mundo!
                </ScrollingHighlightText>
              </p>
            </div>
            <div className={"checks-phone-container"}>
              <div
                style={{ display: "flex", flex: 4, justifyContent: "flex-end" }}
              >
                <div className={"checks-container"}>
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
              <div className={"phone-wrapper"}>
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

export default SpaceDesktop;
