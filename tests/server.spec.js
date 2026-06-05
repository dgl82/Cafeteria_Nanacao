// <reference types="jest" />
const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  //Bloque de tests
  it("Tests ruta GET /cafes", async () => {
    const { statusCode, body: cafes } = await request(server).get("/cafes"); //Extraemos el statuscode y el objeto con los datos de cafes de la respuesta de la API
    expect(statusCode).toBe(200); //Comprobamos si el statuscode que devuelve es el 200
    expect(cafes).toBeInstanceOf(Object); //Comprobamos si los datos de cafes es un objeto
    expect(cafes.length).toBeGreaterThanOrEqual(1); //Comprobamos si el arreglo contiene 1 o más objetos
  });
  it("Test ruta DELETE /cafes/:id", async () => {
    const jwt = "token"; //Creamos un token porque lo necesita la ruta
    const idNoExistente = Math.floor(Math.random() * 999); //Generamos un id aleatorio (difícil que exista en la BD)
    const { statusCode } = await request(server).delete(`/cafes/${idNoExistente}`).set("Authorization", jwt);
    expect(statusCode).toBe(404);
  });
});
