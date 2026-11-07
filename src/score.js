const count = (arr, c) => arr.filter((x) => x === c).length;

// Negras: mismo color y posición. Blancas: coincidencias de color totales
// (limitadas por las apariciones en cada combinación) menos las negras.
export const score = (secret, guess) => {
  const black = guess.filter((c, i) => c === secret[i]).length;
  const common = [...new Set(guess)].reduce(
    (n, c) => n + Math.min(count(secret, c), count(guess, c)),
    0,
  );
  return { black, white: common - black };
};
