//Anomalia intenional 1: Campos Vacios

const login = require("js/Login.js");

test("No se permitira campos vacios", () => {
  const username = "";
  const password = "";
  const result = login(username, password);
  expect(result).toBe("Error: Campos vacíos");
});
