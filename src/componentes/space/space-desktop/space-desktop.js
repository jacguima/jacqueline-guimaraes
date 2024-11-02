import "./space-desktop.css";
import MapSouth from "../../../assets/images/south.png";
import MapNorth from "../../../assets/images/north.png";
import Pin from "../../../assets/images/pin.png";
import Phone from "../../../assets/images/phone.png";
import CheckIcon from "../../../shared/check-icon";
import { useEffect, useRef } from "react";

const SpaceDesktop = () => {
  const highlightRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (highlightRef.current) {
            const rect = highlightRef.current.getBoundingClientRect();
            const windowHeight =
              window.innerHeight || document.documentElement.clientHeight;

            const startPoint = windowHeight * 0.95;
            const endPoint = windowHeight * 0.5;

            const progress = (startPoint - rect.top) / (startPoint - endPoint);
            const clampedProgress = Math.max(0, Math.min(progress, 1));

            const highlightBg =
              highlightRef.current.querySelector(".highlight-bg");
            if (highlightBg) {
              highlightBg.style.width = `${clampedProgress * 100}%`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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
            <div>
              <p style={{ textAlign: "center" }}>
                <span className="highlight-text" ref={highlightRef}>
                  <span className="highlight-bg"></span>
                  Sessões 100% online para brasileiros em qualquer lugar do
                  mundo!
                </span>
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
