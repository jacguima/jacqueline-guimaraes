import "./cards.css";
import React from "react";
import DoctaraliaIcon from "../../assets/images/doctoria.png";
import GoogleIcon from "../UI/google";
import BgReviewImage from "../../assets/images/bg-review.png";

const OpinioesCards = ({ author, content, source }) => {
  const renderSourceIcon = () => {
    switch (source) {
      case "google":
        return <GoogleIcon />;
      case "doctoralia":
        return (
          <img
            src={DoctaraliaIcon}
            alt="doctoralia"
            className="doctoralia-icon"
          />
        );

      default:
        return null;
    }
  };

  let google =
    "https://www.google.com/search?q=psic%C3%B3loga+jacqueline+guimar%C3%A3es";
  let doctoralia =
    "https://www.doctoralia.com.br/jacqueline-guimaraes-3/psicologo/brasilia";
  const renderSourceLink = () => {
    switch (source) {
      case "google":
        return google;
      case "doctoralia":
        return doctoralia;
      default:
        return null;
    }
  };

  return (
    <div className="card-review-container">
      <div className="card-review">
        <img
          className="card-bg-image"
          src={BgReviewImage}
          alt="Review Background"
        />
        <div className="review-content">
          <div className="source-icon">
            <a target="_blank" rel="noreferrer" href={renderSourceLink()}>
              {renderSourceIcon()}
            </a>
          </div>
          <p>{content}</p>
          <h3>– {author}</h3>
        </div>
      </div>
    </div>
  );
};

export default OpinioesCards;
