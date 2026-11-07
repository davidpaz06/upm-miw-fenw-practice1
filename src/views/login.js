export default (app) => {
  app.innerHTML = `
    <h1>Login</h1>
    <form>
      <label>Usuario <input name="username" required /></label>
      <label>Contraseña <input name="password" type="password" required /></label>
      <button>Entrar</button>
    </form>
    <p id="result"></p>`;

  app.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
  };
};
