import "./style.css";
import { IconoHtml } from "../logo/logo.jsx";
import { IconoCss } from "../logo/logo.jsx";
import { IconoJavascript } from "../logo/logo.jsx";
import { IconoReact } from "../logo/logo.jsx";
import { Icononode } from "../logo/logo.jsx";
import { IconoTailwind } from "../logo/logo.jsx";

export function Projects() {
  return (
    <div className={"projectWrapper"}>
      <div className={"mainProjectWrapper"}>
        <div className={"project"}>
          <div className={"imgProjectWrapper"}>
            <a href="https://dubo-martial-paula.vercel.app/" target="_blank">
              <img
                className={"imgProject"}
                src="/img/duboMartial.webp"
                alt="img de prueba"
              />
            </a>
          </div>
          <div className={"infoProject gap-5"}>
            <h3 className={"textProjects text-2xl font-bold"}>
              Dubo Martial Arts
            </h3>
            <h4 className={"textProjects"}>
              Web multipagina, con conexión a Mongo Atlas y gestión de sesiones
            </h4>
            <div className={"iconosProjects"}>
              <IconoHtml width={35} height={35} />
              <IconoCss width={35} height={35} />
              <IconoJavascript width={35} height={35} />
              <Icononode width={35} height={35} />
            </div>
          </div>
        </div>

        <div className={"project"}>
          <div className={"imgProjectWrapper"}>
            <img
              className={"imgProject"}
              src="/img/imgPortfolio.webp"
              alt="img de prueba"
              onClick={() => {
                scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            />
          </div>
          <div className={"infoProject gap-5"}>
            <h3 className={"textProjects text-2xl font-bold"}>
              Potfolio personal
            </h3>
            <h4 className={"textProjects"}>
              Portfolio de presentación hecho con react.
            </h4>
            <div className={"iconosProjects"}>
              <IconoJavascript width={35} height={35} />
              <IconoReact width={35} height={35} />
              <IconoTailwind width={35} height={35} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
