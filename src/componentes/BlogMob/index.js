/* eslint-disable jsx-a11y/anchor-has-content */
import "./BlogMob.css";
import Ebook from "../../assets/images/EBOOKS.png";
import Doc from "../../assets/images/document.png";

const BlogMob = () => {
  return (
    <div className="blog-mob-principal">
      <div className="blog-mob">
        <div className="divisor-blog-mob">
          <div className="card-blog-mob">
            <h2>BLOG</h2>
            <img className="doc" src={Doc} alt="doc" />
          </div>
          <div className="card-breve-mob">
            <div className="seta-breve">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </div>
            <div className="text-breve-branco">
              <p>Em breve</p>
            </div>
          </div>
        </div>
        <div className="divisor-blog-mob">
          <div className="card-breve2-mob">
            <div className="seta-breve">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                class="bi bi-arrow-right-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
              </svg>
            </div>
            <div className="text-breve-branco">
              <p>Em breve</p>
            </div>
          </div>
          <div className="card-artigo-mob">
            <div className="topo-artigo">
              <p>Artigo publicado:</p>
            </div>
            <div className="link-artigo-mob">
              <a
                href="https://peerw.org/index.php/journals/article/view/2052/1172"
                target="_blank"
                rel="noreferrer"
              >
                Análise Fílmica De “Tudo Em Todo Lugar...
              </a>
            </div>
            <div className="seta-artigo">
              <a
                href="https://peerw.org/index.php/journals/article/view/2052/1172"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  fill="black"
                  class="bi bi-arrow-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* PARTE DO EBOOK */}
      <div className="ebook-mob">
        <div className="ebook-logo-mob">
          <img src={Ebook} alt="ebook" />
        </div>
        <div className="cards-ebook-mob">
          <a
            className="emocional-mob"
            href="/files/linguagensdoamor.pdf"
            download="linguagensdoamor.pdf"
          >
            <div className="div-icon-download">
              <div className="icon-download-mob">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  class="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
              </div>
            </div>
          </a>
          <a className="luto-mob" href="/files/luto.pdf" download="luto.pdf">
            <div className="div-icon-download">
              <div className="icon-download-mob">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  class="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
              </div>
            </div>
          </a>
          <div className="ciclo-mob">
            <div className="div-icon-download">
              <div className="icon-download-mob">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="currentColor"
                  class="bi bi-download"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMob;
