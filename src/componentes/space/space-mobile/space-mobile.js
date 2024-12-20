import "./space-mobile.css";
import MapSouth from "../../../assets/images/south.png";
import MapNorth from "../../../assets/images/north.png";

const SpaceMobile = () => {
  const openNorthMap = () => {
    window.open(
      "https://maps.app.goo.gl/V99mxENYgtX7sw3X9",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const openSouthMap = () => {
    window.open(
      "https://maps.app.goo.gl/qDwMQZnpSivMpLRi7",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <div className="space-section-mobile">
      <div
        className={"container-narrow"}
        style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        <h2 className={"title"}>O espaço</h2>
        <div className={"cards-container"}>
          <div className={"card"}>
            <div className={"card-map-img-wrapper"}>
              <img
                className={"card-map-img map-img-north"}
                src={MapNorth}
                alt="Mapa"
              />
            </div>
            <div className={"address"}>
              <h2 className={"address-title"}>Asa Norte</h2>
              <h3 className={"address-details"}>Shopping ID</h3>
            </div>
            <button className={"card-button"} onClick={openNorthMap}>
              Como chegar
            </button>
          </div>
          <div className={"card"}>
            <div className={"card-map-img-wrapper"}>
              <img className={"card-map-img"} src={MapSouth} alt="Mapa" />
            </div>
            <div className={"address"}>
              <h2 className={"address-title"}>Asa Sul</h2>
              <h3 className={"address-details"}>
                Ed. San Marino - SEP Sul <br /> Quadra 707/907
              </h3>
            </div>
            <button className={"card-button"} onClick={openSouthMap}>
              Como chegar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceMobile;
