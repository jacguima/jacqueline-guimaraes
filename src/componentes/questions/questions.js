import React, { useState, useRef, useEffect } from "react";
import "./questions.css";
import ScheduleButton from "../../shared/schedule-button/schedule-button";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (index === activeIndex) {
          ref.style.maxHeight = ref.scrollHeight + 32 + "px"; // + 32 because of the padding
        } else {
          ref.style.maxHeight = "0";
        }
      }
    });
  }, [activeIndex]);

  return (
    <div className="questions-section">
      <div className="container-narrow">
        <h2 className={"title"}>Dúvidas frequentes</h2>
        <div
          className={`accordion ${activeIndex !== null ? "active-gap" : ""}`}
        >
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-wrapper">
              <div className="accordion-item">
                <button
                  className={`accordion-button ${activeIndex === index ? "active" : ""}`}
                  onClick={() => handleToggle(index)}
                >
                  {item.question}
                  <i
                    className={`fas fa-chevron-right ${activeIndex === index ? "rotate" : ""}`}
                  ></i>
                </button>
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className="accordion-content"
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={"schedule-container"}>
          <p className={"schedule-text"}>
            Para mais informações sobre o processo terapêutico, incluindo
            valores das consultas, entre em contato pelo WhatsApp.
          </p>
          <ScheduleButton />
        </div>
      </div>
    </div>
  );
};

const accordionData = [
  {
    question: "Quem precisa de psicoterapia?",
    answer:
      "A procura por tratamento psicológico não deve restringir-se apenas a casos emergenciais. A qualquer momento da vida, em que sintamos necessidade desse suporte, é possível buscar ajuda. Seja quais forem suas angústias, sinta-se à vontade para conversar comigo.",
  },
  {
    question: "Um psicólogo resolverá todos meus problemas?",
    answer:
      "Não exatamente. A função do psicólogo é oferecer um suporte significativo para ajudá-lo a desenvolver ferramentas que o auxiliem no enfrentamento dos seus desafios emocionais e psicológicos, incentivando reflexões, confrontos internos para uma melhor compreensão e aceitação de si mesmo.",
  },
  {
    question: "Um psicólogo revelará meus segredos?",
    answer:
      "Não, todas as informações compartilhadas durante as sessões de terapia são mantidas em sigilo. A confidencialidade é um dos princípios éticos fundamentais da profissão, e cabe ao profissional garantir a privacidade e o sigilo das informações do paciente.",
  },
  {
    question: "Você atende convênio?",
    answer:
      "Não, mas com o recibo e relatório por mim expedidos, você poderá solicitar um reembolso ao seu Plano de Saúde.",
  },
  {
    question: "Quanto tempo dura o tratamento?",
    answer:
      "Não existe um prazo pré determinado. Cada pessoa tem seu tempo, a psicoterapia terá a duração que você necessitar :)",
  },
  {
    question: "Tem diferença entre o atendimento online e o presencial?",
    answer: "Nenhuma! Ambos tem a mesma eficácia.",
  },
];

export default Questions;
