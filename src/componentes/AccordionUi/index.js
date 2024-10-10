import "./Accordion.css";

function Accordion({ dados, atualAberto, setAtualAberto, index }) {
  const aberto = atualAberto === index;

  const { titulo, texto } = dados;

  const handleClick = () => {
    if (aberto) {
      setAtualAberto(null);
    } else {
      setAtualAberto(index);
    }
  };

  return (
    <div
      className={`accordion ${aberto ? "aberto" : ""}`}
      onClick={handleClick}
    >
      <div className="topo-accordion">
        <p className="titulo-accordion">{titulo}</p>
        {aberto ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-chevron-compact-up"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-chevron-compact-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"
            />
          </svg>
        )}
      </div>
      {aberto && (
        <div className="texto-accordion">
          <p>{texto}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;
