import "./online-mobile.css";
import Phone from "../../assets/images/phone-vertical.png";
import CheckIcon from "../../shared/check-icon";
import ScrollingHighlightText from "../../shared/scrolling-highlight-text/scrolling-highlight-text";

const OnlineMobile = () => {
  return (
    <div className="online-section-mobile">
      <div className={"container-narrow"}>
        <p className={"online-subtitle"}>
          <ScrollingHighlightText threshold={0.3} highlightColor="#d6dbc1">
            Sessões 100% online para brasileiros em qualquer lugar do mundo!
          </ScrollingHighlightText>
        </p>
      </div>
      <div style={{ display: "flex" }}>
        <div className={"phone-img-wrapper"}>
          <img className={"phone-img"} src={Phone} alt="Celular" />
        </div>
        <div className={"content-container"}>
          <h3 className={"title"}>Atendimento Online</h3>
          <div className={"checklist-container"}>
            <div className={"checklist-item-container"}>
              <CheckIcon />
              <h3 className={"checklist-item-text"}>Accessibilidade</h3>
            </div>
            <div className={"checklist-item-container"}>
              <CheckIcon />
              <h3 className={"checklist-item-text"}>Flexibilidade</h3>
            </div>
            <div className={"checklist-item-container"}>
              <CheckIcon />
              <h3 className={"checklist-item-text"}>Segurança</h3>
            </div>
            <div className={"checklist-item-container"}>
              <CheckIcon />
              <h3 className={"checklist-item-text"}>Conforto</h3>
            </div>
            <div className={"checklist-item-container"}>
              <CheckIcon />
              <h3 className={"checklist-item-text"}>Conveniência</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineMobile;
