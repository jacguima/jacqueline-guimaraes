import "./Psicoterapia.css";
import Posicao1 from "../../assets/images/1.png";
import Posicao2 from "../../assets/images/2.png";
import Posicao3 from "../../assets/images/3.png";

const Psicoterapia = () => {
  return (
    <div className="principal-psicoterapia">
      <div className="topo-psicoterapia">
        <h1>Meus serviços</h1>
        <div className="topicos-topo">
          <div className="topico-topo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
            <p>adolescente</p>
          </div>
          <div className="topico-topo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
            <p>adulto</p>
          </div>
          <div className="topico-topo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
            <p>casal</p>
          </div>
          <div className="topico-topo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
            <p>orientação profissional</p>
          </div>
        </div>
      </div>
      <div className="topicos-psicoterapia">
        <div className="topico-psicoterapia">
          <div className="passo-psi">
            <div className="num-pis">
              <img src={Posicao1} alt="1" />
            </div>
            <div className="textos-psi">
              <h1>Psicoterapia individual</h1>
              <h2>online e presencial</h2>
              <p>
                Imagine um espaço seguro e acolhedor, onde você recebe suporte
                profissional e especializado para explorar seus pensamentos e
                sentimentos, entender melhor a si mesmo e desenvolver
                estratégias para lidar com desafios. Um caminho para o
                autoconhecimento e bem-estar emocional.
              </p>
            </div>
          </div>
          <div className="img-psi-barco">
            <div className="img-barco"></div>
          </div>
        </div>
        <div className="topico-psicoterapia2">
          <div className="img-psi-chat">
            <div className="img-chat"></div>
          </div>
          <div className="passo-psi">
            <div className="num-pis">
              <img src={Posicao2} alt="2" />
            </div>
            <div className="textos-psi">
              <h1>Psicoterapia de casal</h1>
              <p>
                Meu papel profissional aqui é ajudar o casal a comunicar-se
                melhor, resolver conflitos e explorar os desafios juntos. É um
                investimento no bem-estar do relacionamento, promovendo uma
                convivência mais saudável e satisfatória.
              </p>
            </div>
          </div>
        </div>
        <div className="topico-psicoterapia">
          <div className="passo-psi">
            <div className="num-pis">
              <img src={Posicao3} alt="3" />
            </div>
            <div className="textos-psi">
              <h1>Orientação profissional</h1>
              <p>
                Juntos, compreenderemos suas habilidades, interesses, valores e
                sonhos pessoais, com o objetivo de identificar propósitos de
                vida que se alinhem às suas preferências e aptidões, buscando,
                assim, sucesso e satisfação no caminho escolhido. O projeto de
                vida é um processo contínuo de desenvolvimento e tomada de
                decisões.
              </p>
            </div>
          </div>
          <div className="img-psi-bike">
            <div className="img-bike"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Psicoterapia;
