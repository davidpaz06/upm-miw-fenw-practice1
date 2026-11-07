import "./style.css";

const views = import.meta.glob("./views/*.js", { eager: true, import: "default" });
const app = document.querySelector("#app");

function render() {
  const view = views[`./views/${location.hash.slice(1)}.js`];
  if (!view) return location.replace("#inicio");
  app.textContent = "Cargando...";
  Promise.resolve(view(app)).catch(() => {
    app.textContent = "No se pudo conectar con el servidor.";
  });
  document.querySelectorAll(".menu a").forEach((a) => {
    a.toggleAttribute("aria-current", a.hash === location.hash);
  });
}

window.addEventListener("hashchange", render);
render();
