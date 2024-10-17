import "./services.css";
import BikeImage from "../../assets/images/bike.png";
import BoatImage from "../../assets/images/barco.png";
import ChatImage from "../../assets/images/chat.png";
import NumberOne from "../../assets/images/1.png";
import NumberTwo from "../../assets/images/2.png";
import NumberThree from "../../assets/images/3.png";
import CheckIcon from "../../shared/check-icon";

const Psicoterapia = () => {
  return (
    <div className={"services-section"}>
      <div className={"container-narrow"}>
        <div className={"header"}>
          <h2 className={"title"}>Meus serviços</h2>
          <div className={"services-list"}>
            <div className={"services-list-line"}>
              <div className={"services-list-item"}>
                <CheckIcon />
                <h3>Adolescente</h3>
              </div>
              <div className={"services-list-item"}>
                <CheckIcon />
                <h3>Adulto</h3>
              </div>
            </div>
            <div className={"services-list-line"}>
              <div className={"services-list-item"}>
                <CheckIcon />
                <h3>Casal</h3>
              </div>
              <div className={"services-list-item"}>
                <CheckIcon />
                <h3>Orientação Profissional</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={"body"}>
        <div className={"container-narrow"}>
          <div className={"services-detailed-list"}>
            <div className={"service-details"}>
              <div className={"number-container"}>
                <img className={"number-img"} src={NumberOne} alt="Número 1" />
              </div>
              <div className={"service-details-content"}>
                <h2 className={"services-detailed-title"}>
                  Psicoterapia individual
                </h2>
                <h3 className={"online-on-site"}>online e presencial</h3>
                <p className={"service-details-paragraph"}>
                  Imagine um espaço seguro e acolhedor, onde você recebe suporte
                  profissional e especializado para explorar seus pensamentos e
                  sentimentos, entender melhor a si mesmo e desenvolver
                  estratégias para lidar com desafios. Um caminho para o
                  autoconhecimento e bem-estar emocional.
                </p>
              </div>
              <div className={"service-img-container img-container-individual"}>
                <img className={"service-img"} src={BoatImage} alt="Barco" />
              </div>
            </div>
            <div className={"service-details details-couple"}>
              <div className={"number-container"}>
                <img className={"number-img"} src={NumberTwo} alt="Número 1" />
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
                <img className={"service-img"} src={ChatImage} alt="Chat" />
              </div>
            </div>
            <div className={"service-details"}>
              <div className={"number-container"}>
                <img
                  className={"number-img"}
                  src={NumberThree}
                  alt="Número 1"
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
                <img className={"service-img"} src={BikeImage} alt="Chat" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="principal-psicoterapia">
    //   <div className="topo-psicoterapia">
    //     <h1>Meus serviços</h1>
    //     <div className="topicos-topo">
    //       <div className="topico-topo">
    //         <CheckIcon />
    //         <p>adolescente</p>
    //       </div>
    //       <div className="topico-topo">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="16"
    //           height="16"
    //           fill="currentColor"
    //           class="bi bi-check-circle"
    //           viewBox="0 0 16 16"
    //         >
    //           <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    //           <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
    //         </svg>
    //         <p>adulto</p>
    //       </div>
    //       <div className="topico-topo">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="16"
    //           height="16"
    //           fill="currentColor"
    //           class="bi bi-check-circle"
    //           viewBox="0 0 16 16"
    //         >
    //           <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    //           <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
    //         </svg>
    //         <p>casal</p>
    //       </div>
    //       <div className="topico-topo">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="16"
    //           height="16"
    //           fill="currentColor"
    //           class="bi bi-check-circle"
    //           viewBox="0 0 16 16"
    //         >
    //           <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
    //           <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
    //         </svg>
    //         <p>orientação profissional</p>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="topicos-psicoterapia">
    //     <div className="topico-psicoterapia">
    //       <div className="passo-psi">
    //         <div className="num-pis">
    //           <img src={Posicao1} alt="1" />
    //         </div>
    //         <div className="textos-psi">
    //           <h1>Psicoterapia individual</h1>
    //           <h2>online e presencial</h2>
    //           <p>
    //             Imagine um espaço seguro e acolhedor, onde você recebe suporte
    //             profissional e especializado para explorar seus pensamentos e
    //             sentimentos, entender melhor a si mesmo e desenvolver
    //             estratégias para lidar com desafios. Um caminho para o
    //             autoconhecimento e bem-estar emocional.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="img-psi-barco">
    //         <div className="img-barco"></div>
    //       </div>
    //     </div>
    //     <div className="topico-psicoterapia2">
    //       <div className="img-psi-chat">
    //         <div className="img-chat"></div>
    //       </div>
    //       <div className="passo-psi">
    //         <div className="num-pis">
    //           <img src={Posicao2} alt="2" />
    //         </div>
    //         <div className="textos-psi">
    //           <h1>Psicoterapia de casal</h1>
    //           <p>
    //             Meu papel profissional aqui é ajudar o casal a comunicar-se
    //             melhor, resolver conflitos e explorar os desafios juntos. É um
    //             investimento no bem-estar do relacionamento, promovendo uma
    //             convivência mais saudável e satisfatória.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="topico-psicoterapia">
    //       <div className="passo-psi">
    //         <div className="num-pis">
    //           <img src={Posicao3} alt="3" />
    //         </div>
    //         <div className="textos-psi">
    //           <h1>Orientação profissional</h1>
    //           <p>
    //             Juntos, compreenderemos suas habilidades, interesses, valores e
    //             sonhos pessoais, com o objetivo de identificar propósitos de
    //             vida que se alinhem às suas preferências e aptidões, buscando,
    //             assim, sucesso e satisfação no caminho escolhido. O projeto de
    //             vida é um processo contínuo de desenvolvimento e tomada de
    //             decisões.
    //           </p>
    //         </div>
    //       </div>
    //       <div className="img-psi-bike">
    //         <div className="img-bike"></div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Psicoterapia;
