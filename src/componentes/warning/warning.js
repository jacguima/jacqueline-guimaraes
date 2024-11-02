import "./warning.css";

const Warning = () => {
  return (
    <div className={"container-narrow"}>
      <div className={"warning-section"}>
        <p>
          Atenção: Se você estiver em crise, com ideação ou planejamento
          suicida, ligue para o Centro de Valorização da Vida - CVV (188). Em
          caso de emergência, procure o hospital mais próximo. Havendo risco de
          morte, ligue imediatamente para o SAMU (192), ou para o Corpo de
          Bombeiros (193).
        </p>
      </div>
    </div>
  );
};

export default Warning;
