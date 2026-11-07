const BASE = "http://fenw.etsisi.upm.es:4500";

export const get = (path) => fetch(BASE + path).then((r) => r.json());
