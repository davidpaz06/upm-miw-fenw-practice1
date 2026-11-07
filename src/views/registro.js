export default (app) => {
  app.innerHTML = `
    <h1>Registro</h1>
    <form>
      <label>Usuario <input name="username" required /></label>
      <label>Email <input name="email" type="email" required /></label>
      <label>Contraseña <input name="password" type="password" required /></label>
      <label>Repetir contraseña <input name="repeat" type="password" required /></label>
      <button>Registrarse</button>
    </form>
    <p id="result"></p>`;

  // Sin proceso en esta práctica: el envío a la API llega en la segunda.
  app.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    app.querySelector("#result").textContent = "Datos válidos.";
  };
};
