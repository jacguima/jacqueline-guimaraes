import "./schedule-button.css";
import { openLink } from "../utils";

const ScheduleButton = () => {
  return (
    <button
      className="schedule-btn"
      onClick={() => openLink("https://wa.me/5561992081099")}
    >
      AGENDAR
    </button>
  );
};

export default ScheduleButton;
