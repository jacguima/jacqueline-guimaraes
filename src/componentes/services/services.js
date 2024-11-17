import React from "react";
import "./services.css";
import BikeImgBg from "../../assets/images/services-bike-img-bg.png";
import BoatImgBg from "../../assets/images/services-boat-img-bg.png";
import ChatImgBg from "../../assets/images/services-chat-img-bg.png";
import BoatGuy from "../../assets/images/boat-guy.png";
import BikeGuy from "../../assets/images/bike-guy.png";
import ChatLeft from "../../assets/images/chat-left.png";
import ChatRight from "../../assets/images/chat-right.png";
import NumberOne from "../../assets/images/1.png";
import NumberTwo from "../../assets/images/2.png";
import NumberThree from "../../assets/images/3.png";
import CheckCircleIcon from "../../shared/check-circle-icon";
import ScrollingHighlightText from "../../shared/scrolling-highlight-text/scrolling-highlight-text";

const Services = () => {
  return (
    <div className={"services-section"}>
      <div className={"container-narrow"}>
        <div className={"header"}>
          <h2 className={"title"}>Meus serviços</h2>
          <div className={"services-list"}>
            <div className={"services-list-line"}>
              <div className={"services-list-item"}>
                <CheckCircleIcon />
                <h3>Adolescente</h3>
              </div>
              <div className={"services-list-item"}>
                <CheckCircleIcon />
                <h3>Adulto</h3>
              </div>
            </div>
            <div className={"services-list-line"}>
              <div className={"services-list-item"}>
                <CheckCircleIcon />
                <h3>Casal</h3>
              </div>
              <div className={"services-list-item"}>
                <CheckCircleIcon />
                <h3>Orientação Profissional</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"body"}>
        <div className={"container-narrow"}>
          <div className={"services-detailed-list"}>
            {/* Service 1 */}
            <div className={"service-details"}>
              <div className={"number-container"}>
                <img className={"number-img"} src={NumberOne} alt="Número 1" />
              </div>
              <div className={"service-details-content"}>
                <h2 className={"services-detailed-title"}>
                  Psicoterapia individual
                </h2>
                <h3 className={"online-on-site"}>
                  <ScrollingHighlightText
                    highlightColor="var(--main-green-really-light)"
                    textPadding="0 .75rem"
                    threshold={0.3}
                  >
                    online e presencial
                  </ScrollingHighlightText>
                </h3>
                <p className={"service-details-paragraph"}>
                  Imagine um espaço seguro e acolhedor, onde você recebe suporte
                  profissional e especializado para explorar seus pensamentos e
                  sentimentos, entender melhor a si mesmo e desenvolver
                  estratégias para lidar com desafios. Um caminho para o
                  autoconhecimento e bem-estar emocional.
                </p>
              </div>
              <div className={"service-img-container img-container-individual"}>
                <img
                  className={"service-img-bg"}
                  src={BoatImgBg}
                  alt="background"
                />
                <img
                  className={"service-img service-img-boat"}
                  src={BoatGuy}
                  alt="boat guy"
                />
              </div>
            </div>

            {/* Service 2 */}
            <div className={"service-details details-couple"}>
              <div className={"number-container"}>
                <img className={"number-img"} src={NumberTwo} alt="Número 2" />
              </div>
              <div className={"service-details-content"}>
                <h2 className={"services-detailed-title"}>
                  Psicoterapia de casal
                </h2>
                <p className={"service-details-paragraph"}>
                  Meu papel profissional aqui é ajudar o casal a comunicar-se
                  melhor, resolver conflitos e explorar os desafios juntos. É um
                  investimento no bem-estar do relacionamento, promovendo uma
                  convivência mais saudável e satisfatória.
                </p>
              </div>
              <div className={"service-img-container img-container-couple"}>
                <img
                  className={"service-img-bg"}
                  src={ChatImgBg}
                  alt="background"
                />
                {/* Left Chat Balloon */}
                <img
                  className={"service-img service-img-chat img-chat-left"}
                  src={ChatLeft}
                  alt="chat baloon left"
                />
                {/* Right Chat Balloon */}
                <img
                  className={"service-img service-img-chat img-chat-right"}
                  src={ChatRight}
                  alt="chat baloon right"
                />
              </div>
            </div>

            {/* Service 3 */}
            <div className={"service-details"}>
              <div className={"number-container"}>
                <img
                  className={"number-img"}
                  src={NumberThree}
                  alt="Número 3"
                />
              </div>
              <div className={"service-details-content"}>
                <h2 className={"services-detailed-title"}>
                  Orientação profissional
                </h2>
                <p className={"service-details-paragraph"}>
                  Juntos, compreenderemos suas habilidades, interesses, valores
                  e sonhos pessoais, com o objetivo de identificar propósitos de
                  vida que se alinhem às suas preferências e aptidões, buscando,
                  assim, sucesso e satisfação no caminho escolhido. O projeto de
                  vida é um processo contínuo de desenvolvimento e tomada de
                  decisões.
                </p>
              </div>
              <div
                className={"service-img-container img-container-professional"}
              >
                <img
                  className={"service-img-bg img-bg-bike"}
                  src={BikeImgBg}
                  alt="background"
                />
                <img
                  className={"service-img service-img-bike"}
                  src={BikeGuy}
                  alt="bike guy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
