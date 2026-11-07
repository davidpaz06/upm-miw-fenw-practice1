import { api } from "../api.js";

export default (app) => {
  app.innerHTML = `
    <h1>Login</h1>
    <form>
      <label>Usuario <input name="username" required /></label>
      <label>Contraseña <input name="password" type="password" required /></label>
      <button>Entrar</button>
    </form>
    <p id="result"></p>`;

  app.querySelector("form").onsubmit = async (e) => {
    e.preventDefault();
    const query = new URLSearchParams(new FormData(e.target));
    const res = await api(`/users/login?${query}`).catch(() => ({}));
    const token = res.ok && res.headers.get("Authorization");
    if (token) localStorage.setItem("token", token);
    app.querySelector("#result").textContent = token
      ? "Sesión iniciada."
      : "Error de inicio de sesión.";
  };
};
