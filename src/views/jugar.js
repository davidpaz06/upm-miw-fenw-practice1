import { get } from "../api.js";

export default async (app) => {
  const colors = await get("/game/colors");
  const bg = (c) => `style="background:${colors[c].name}"`;
  const peg = (c) => `<span class="peg" ${bg(c)}></span>`;
  app.innerHTML = `<h1>Jugar</h1>${colors.map((_, c) => peg(c)).join("")}`;
};
