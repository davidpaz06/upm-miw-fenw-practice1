import { get } from "../api.js";

export default async (app) => {
  const colors = await get("/game/colors");
  const bg = (c) => `style="background:${colors[c].name}"`;
  const peg = (c) => `<span class="peg" ${bg(c)}></span>`;
  app.innerHTML = `<h1>Jugar</h1><button id="start">Empezar</button><div id="game"></div>`;

  app.querySelector("#start").onclick = () => {
    const secret = Array.from({ length: 4 }, () => Math.floor(Math.random() * colors.length));
    const guess = [0, 0, 0, 0];
    const game = app.querySelector("#game");
    game.innerHTML = `<p>Pulsa cada ficha para cambiar su color.</p>
      <div id="guess">${guess.map((c) => `<button class="peg" ${bg(c)}></button>`).join("")}</div>`;

    game.querySelector("#guess").onclick = (e) => {
      const i = [...e.currentTarget.children].indexOf(e.target);
      if (i < 0) return;
      guess[i] = (guess[i] + 1) % colors.length;
      e.target.style.background = colors[guess[i]].name;
    };
  };
};
