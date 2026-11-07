export const api = (path) => fetch("http://fenw.etsisi.upm.es:4500" + path);

export const get = (path) => api(path).then((r) => r.json());
