import "./style.css";

const views = {
  inicio: () => `
    <section>
      <h1>Adivina los colores</h1>
      <p>Descubre la combinación secreta de 4 colores en el menor número de intentos.</p>
    </section>`,
  jugar: () => `<section><h1>Jugar</h1></section>`,
  records: () => `<section><h1>Records</h1></section>`,
  registro: () => `<section><h1>Registro</h1></section>`,
  login: () => `<section><h1>Login</h1></section>`,
};

const app = document.querySelector("#app");

function render() {
  const name = location.hash.slice(1);
  const view = views[name] ? name : "inicio";
  app.innerHTML = views[view]();
  document.querySelectorAll(".menu a").forEach((a) => {
    a.toggleAttribute("aria-current", a.dataset.view === view);
  });
}

window.addEventListener("hashchange", render);
render();
