import { useState } from "react";
import Accordion from "../AccordionUi";
import "./Duvidas.css";

const dados = [
  {
    titulo: "Quem precisa de psicoterapia?",
    texto:
      "A procura por tratamento psicológico não deve restringir-se apenas a casos emergenciais. A qualquer momento da vida, em que sintamos necessidade desse suporte, é possível buscar ajuda. Seja quais forem suas angústias, sinta-se à vontade para conversar comigo.",
  },
  {
    titulo: "Um psicólogo resolverá todos meus problemas?",
    texto:
      "Não exatamente. A função do psicólogo é oferecer um suporte significativo para ajudá-lo a desenvolver ferramentas que o auxiliem no enfrentamento dos seus desafios emocionais e psicológicos, incentivando reflexões, confrontos internos para uma melhor compreensão e aceitação de si mesmo.",
  },
  {
    titulo: "Um psicólogo revelará meus segredos?",
    texto: "Não, todas as informações compartilhadas durante as sessões de terapia são mantidas em sigilo. A confidencialidade é um dos princípios éticos fundamentais da profissão, e cabe ao profissional garantir a privacidade e o sigilo das informações do paciente.",
  },
  {
    titulo: "Você atende convênio?",
    texto: "Não, mas com o recibo e relatório por mim expedidos, você poderá solicitar um reembolso ao seu Plano de Saúde.",
  },
  {
    titulo: "Quanto tempo dura o tratamento?",
    texto:
      "Não existe um prazo pré determinado. Cada pessoa tem seu tempo, a psicoterapia terá a duração que você necessitar :)",
  },
  {
    titulo: "Tem diferença entre o atendimento online e o presencial? ",
    texto:
      "Nenhuma! Ambos tem a mesma eficácia.",
  },
];

const Duvidas = () => {
  const [atualAberto, setAtualAberto] = useState(false);

  return (
    <div className="principal-duvidas">
        <div className="topo-duvidas">
            <h1>Dúvidas frequentes</h1>
        </div>
      <div className="duvidas">
        {dados.map((dados, i) => (
          <Accordion
            key={i}
            dados={dados}
            atualAberto={atualAberto}
            setAtualAberto={setAtualAberto}
            index={i}
          />
        ))}
      </div>
      <div className="rodape-duvidas">
        <h2>Para mais informações sobre o processo terapêutico, incluindo valores das consultas, entre em contato pelo WhatsApp.</h2>
      </div>
    <div className="btn-agendar-duvidas">
        <a href="https://wa.me/5561992081099" target="_blank" rel="noreferrer">AGENDAR</a>
    </div>
        
    </div>
  );
};

export default Duvidas;
