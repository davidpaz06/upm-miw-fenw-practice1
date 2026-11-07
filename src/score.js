const count = (arr, c) => arr.filter((x) => x === c).length;

export const score = (secret, guess) => {
  const black = guess.filter((c, i) => c === secret[i]).length;
  const common = [...new Set(guess)].reduce(
    (n, c) => n + Math.min(count(secret, c), count(guess, c)),
    0,
  );
  return { black, white: common - black };
};
