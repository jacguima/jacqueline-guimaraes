import "./cards.css";
import React from 'react';
import DoctaraliaIcon from "../../assets/images/doctoria.png";
import GoogleIcon from "../UI/google";

const OpinioesCards = ({ author, content, source }) => {
 

  const renderSourceIcon = () => {
    switch (source) {
      case 'google':
        return <GoogleIcon />;
      case 'doctoralia':
        return <img src={DoctaraliaIcon} alt="doctoralia" className="doctoralia-icon"/> 
        
      default:
        return null;
    }
  };

  let google = 'https://www.google.com/search?q=psic%C3%B3loga+jacqueline+guimar%C3%A3es'
  let doctoralia = 'https://www.doctoralia.com.br/jacqueline-guimaraes-3/psicologo/brasilia'
  const renderSourceLink = () => {
      switch (source) {
        case 'google': 
          return google
        case 'doctoralia':
          return doctoralia
        default: 
        return null
      }
  }

  return (
    <div className="card-review">
    <div className="review-card">
      <div className="source-icon"><a target="_blank" rel="noreferrer" href={renderSourceLink()}>{renderSourceIcon()}</a></div>
      <p>{content}</p>
      <h3>– {author}</h3>
    </div>
    </div>
  );
};

export default OpinioesCards;
