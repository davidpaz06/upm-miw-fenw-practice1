import { get } from "../api.js";
import { score } from "../score.js";

const MAX_ATTEMPTS = 10;

export default async (app) => {
  const colors = await get("/game/colors");
  const $ = (s) => app.querySelector(s);
  const bg = (c) => `style="background:${colors[c].name}"`;
  const peg = (c) => `<span class="peg" ${bg(c)}></span>`;
  app.innerHTML = `<h1>Jugar</h1><button id="start">Empezar</button><div id="game"></div>`;

  $("#start").onclick = () => {
    const secret = Array.from({ length: 4 }, () => Math.floor(Math.random() * colors.length));
    const guess = [0, 0, 0, 0];
    $("#game").innerHTML = `<p>Pulsa cada ficha para cambiar su color.</p>
      <div id="guess">${guess.map((c) => `<button class="peg" aria-label="Cambiar color" ${bg(c)}></button>`).join("")}</div>
      <button id="try">Probar</button>
      <ol id="history"></ol>
      <p id="result"></p>`;

    $("#guess").onclick = (e) => {
      const i = [...e.currentTarget.children].indexOf(e.target);
      if (i < 0) return;
      guess[i] = (guess[i] + 1) % colors.length;
      e.target.style.background = colors[guess[i]].name;
    };

    $("#try").onclick = (e) => {
      const { black, white } = score(secret, guess);
      $("#history").innerHTML +=
        `<li>${guess.map(peg).join("")} ${"🟢".repeat(black)}${"🟡".repeat(white)}</li>`;
      if (black === 4 || $("#history").children.length === MAX_ATTEMPTS) {
        e.target.disabled = true;
        $("#result").innerHTML =
          black === 4 ? "¡Has ganado!" : `Has perdido. Era: ${secret.map(peg).join("")}`;
      }
    };
  };
};
