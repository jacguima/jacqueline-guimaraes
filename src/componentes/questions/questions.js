import React, { useState, useRef, useEffect } from "react";
import "./questions.css";

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
      </div>
    </div>
  );
};

const accordionData = [
  {
    question: "Quem precisa de psicoterapia?",
    answer: "Pessoas que precisam de suporte emocional...",
  },
  {
    question: "Um psicólogo resolverá todos meus problemas?",
    answer: "O psicólogo auxilia no processo...",
  },
  {
    question: "Um psicólogo revelará meus segredos?",
    answer:
      "Não, todas as informações são mantidas em sigilo conforme ética profissional. Não, todas as informações são mantidas em sigilo conforme ética profissional. Não, todas as informações são mantidas em sigilo conforme ética profissional. Não, todas as informações são mantidas em sigilo conforme ética profissional.",
  },
  {
    question: "Você atende convênio?",
    answer: "Sim, atendemos vários convênios.",
  },
  {
    question: "Quanto tempo dura o tratamento?",
    answer: "A duração do tratamento varia de pessoa para pessoa...",
  },
  {
    question: "Tem diferença entre o atendimento online e o presencial?",
    answer: "Sim, há algumas diferenças...",
  },
];

export default Questions;
