import React from "react";
import "./mosaic.css";
import Doc from "../../assets/images/document.png";
import ArrowRightCircleOutlined from "../../shared/arrow-right-circle-outlined";

const defaultGap = "1rem";

const Mosaic = () => {
  return (
    <div className={"mosaic-section"}>
      <div
        className={"container-narrow"}
        style={{ flex: 1, display: "flex", gap: defaultGap }}
      >
        <div style={{ display: "flex", gap: defaultGap, flex: 3 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: defaultGap,
              flex: 1,
            }}
          >
            <div style={{ display: "flex", flex: 1 }}>
              <div className={"mosaic-card blog"}>
                <h3>BLOG</h3>
                <img src={Doc} alt="Documento" />
              </div>
            </div>
            <div style={{ display: "flex", flex: 4 }}>
              <div className={"mosaic-card article"}>
                <a
                  href="https://peerw.org/index.php/journals/article/view/2052/1172"
                  target="_blank"
                  rel="noreferrer"
                ></a>
                <h3>Artigo publicado:</h3>
                <p>Análise Fílmica De “Tudo Em Todo Lugar..."</p>
                <ArrowRightCircleOutlined />
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: defaultGap,
              flex: 1,
            }}
          >
            <div style={{ display: "flex", flex: 1 }}>
              <div className={"mosaic-card soon soon-green"}>
                <i className="fa-solid fa-circle-arrow-right"></i>
                <p>Em breve</p>
              </div>
            </div>
            <div style={{ display: "flex", flex: 1 }}>
              <div className={"mosaic-card soon soon-grey"}>
                <i className="fa-solid fa-circle-arrow-right"></i>
                <p>Em breve</p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: defaultGap,
              flex: 1,
            }}
          >
            <div style={{ display: "flex", flex: 1 }}>
              <div className={"mosaic-card soon soon-grey"}>
                <i className="fa-solid fa-circle-arrow-right"></i>
                <p>Em breve</p>
              </div>
            </div>
            <div style={{ display: "flex", flex: 1 }}>
              <div className={"mosaic-card soon soon-green"}>
                <i className="fa-solid fa-circle-arrow-right"></i>
                <p>Em breve</p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderLeft: "2px solid #eaeaea",
            height: "30rem",
            alignSelf: "center",
          }}
        ></div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            gap: defaultGap,
          }}
        >
          <div style={{ display: "flex", flex: 1 }}>
            <div className={"mosaic-card ebook"}>
              <h3>EBOOKS</h3>
              <span className="material-symbols-outlined">download</span>
            </div>
          </div>
          <div style={{ display: "flex", flex: 2 }}>
            <div className={"mosaic-card content content-love"}></div>
          </div>
          <div style={{ display: "flex", flex: 2 }}>
            <div className={"mosaic-card content content-grief"}></div>
          </div>
          <div style={{ display: "flex", flex: 2 }}>
            <div className={"mosaic-card content content-cycle"}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mosaic;
