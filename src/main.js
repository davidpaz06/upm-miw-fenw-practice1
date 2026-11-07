import "./style.css";
import inicio from "./views/inicio.js";
import jugar from "./views/jugar.js";
import records from "./views/records.js";
import registro from "./views/registro.js";
import login from "./views/login.js";

const views = { inicio, jugar, records, registro, login };
const app = document.querySelector("#app");

function render() {
  const name = location.hash.slice(1);
  const view = views[name] ? name : "inicio";
  views[view](app);
  document.querySelectorAll(".menu a").forEach((a) => {
    a.toggleAttribute("aria-current", a.hash === "#" + view);
  });
}

window.addEventListener("hashchange", render);
render();
