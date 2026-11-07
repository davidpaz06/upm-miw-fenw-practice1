export default (app) => {
  app.innerHTML = `
    <h1>Adivina los colores</h1>
    <p>Descubre la combinación secreta de 4 colores en el menor número de intentos.</p>
    <h2>Reglas</h2>
    <ul>
      <li>Los colores pueden repetirse.</li>
      <li>🟢 Color correcto en la posición correcta.</li>
      <li>🟡 Color correcto en otra posición.</li>
      <li>Las fichas no indican a qué color corresponden.</li>
    </ul>
    <a class="cta" href="#jugar">Jugar</a>`;
};
