import { get } from "../api.js";

export default async (app) => {
  const scores = await get("/scores");
  app.innerHTML = `
    <h1>Records</h1>
    <table>
      <tr><th>#</th><th>Usuario</th><th>Puntos</th><th>Intentos</th><th>Fecha</th></tr>
      ${scores
        .map(
          (s, i) => `<tr>
            <td>${i + 1}</td><td>${s.username.replace(/</g, "&lt;")}</td><td>${s.score}</td><td>${s.attempts}</td>
            <td>${new Date(s.recordDate).toLocaleDateString()}</td></tr>`,
        )
        .join("")}
    </table>`;
};
