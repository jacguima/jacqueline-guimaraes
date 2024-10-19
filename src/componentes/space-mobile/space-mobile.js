import "./space-mobile.css";
import MapSouth from "../../assets/images/south.png";
import MapNorth from "../../assets/images/north.png";
import Pin from "../../assets/images/pin.png";
import Phone from "../../assets/images/celular.png";
import CheckIcon from "../../shared/check-icon";

const SpaceMobile = () => {
  return (
    <div className="space-section-mobile">
      <div
        className={"container-narrow"}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h2 className={"title"}>O espaço</h2>
      </div>
    </div>
  );
};

export default SpaceMobile;
