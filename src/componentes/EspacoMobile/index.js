import CheckUI from "../UI/check";
import LocIcon from "../UI/loc-icons";
import "./EspacoMobile.css";

const EspacoMobile = () => {
  return (
    <div className="espaco-mobile">
      {/* ASA NORTE */}

      <div className="espaco-local">
        <div className="conteudo-local">
          <h1>O espaço</h1>
          <div className="card-local">
            <div className="asa-norte-mbl"></div>
            <div className="card-local-textos">
              <h2>Asa Norte</h2>
              <p>Shopping ID</p>
            </div>
            <div className="card-local-btns">
              <a
                href="https://maps.app.goo.gl/V99mxENYgtX7sw3X9"
                target="_blank"
                rel="noreferrer"
              >
                Como chegar
              </a>
              <div className="card-local-icon">
                <LocIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ASA SUL */}

      <div className="espaco-local">
        <div className="conteudo-local">
          <h1>O espaço</h1>
          <div className="card-local">
            <div className="asa-sul-mbl"></div>
            <div className="card-local-textos">
              <h2>Asa Sul</h2>
              <p>Ed. San Marino - SEP Sul</p>
              <p>Quadra 707/907</p>
            </div>
            <div className="card-local-btns">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://maps.app.goo.gl/qDwMQZnpSivMpLRi7"
              >
                Como chegar
              </a>
              <div className="card-local-icon">
                <LocIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ATENDIMENTO ONLINE */}

      <div className="espaco-online-mbl">
        <div className="atd-online-mbl">
            <h2>Atendimento Online</h2>
            <div className="topicos-online-mbl">
                <CheckUI />
                <p>Acessibilidade</p>
            </div>
            <div className="topicos-online-mbl">
                <CheckUI />
                <p>Flexibilidade</p>
            </div>
            <div className="topicos-online-mbl">
                <CheckUI />
                <p>Segurança</p>
            </div>
            <div className="topicos-online-mbl">
                <CheckUI />
                <p>Conforto</p>
            </div>
            <div className="topicos-online-mbl">
                <CheckUI />
                <p>Conveniência</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EspacoMobile;
