import { get } from "../api.js";

export default async (app) => {
  const colors = await get("/game/colors");
  const bg = (c) => `style="background:${colors[c].name}"`;
  const peg = (c) => `<span class="peg" ${bg(c)}></span>`;
  app.innerHTML = `<h1>Jugar</h1><button id="start">Empezar</button><div id="game"></div>`;

  app.querySelector("#start").onclick = () => {
    const secret = Array.from({ length: 4 }, () => Math.floor(Math.random() * colors.length));
    const game = app.querySelector("#game");
    game.innerHTML = `<p>Combinación generada (oculta).</p>`;
  };
};
