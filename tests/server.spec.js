// <reference types="jest" />
const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  //Bloque de tests
  /*  it("Tests ruta GET /cafes, código 200 + ser objeto + contener 1 obj al menos", async () => {
    const { statusCode, body: cafes } = await request(server).get("/cafes"); //Extraemos el statuscode y el objeto con los datos de cafes de la respuesta de la API
    expect(statusCode).toBe(200); //Comprobamos si el statuscode que devuelve es el 200
    expect(cafes).toBeInstanceOf(Object); //Comprobamos si los datos de cafes es un objeto
    expect(cafes.length).toBeGreaterThanOrEqual(1); //Comprobamos si el arreglo contiene 1 o más objetos
  });
  it("Test ruta DELETE /cafes/:id, error 404", async () => {
    const jwt = "token"; //Creamos un token porque lo necesita la ruta
    const idNoExistente = Math.floor(Math.random() * 999); //Generamos un id aleatorio (difícil que exista en la BD)
    const { statusCode } = await request(server) //Extraemos statuscode de la respuesta enviando token e id aleatorio (no existente)
    .delete(`/cafes/${idNoExistente}`)
    .set("Authorization", jwt);
    expect(statusCode).toBe(404); //Comprobamos que devuelve error 404
  }); */
  it("Test ruta POST /cafes, café agregado + código 201", async () => {
    const id = Math.floor(Math.random() * 999); //Generamos un id aleatorio
    const nuevoCafe = { id, nombre: "Café Expreso" }; //Creamos objeto con un café a mandar en el body
    const { statusCode, body: cafeAgregado } = await request(server).post("/cafes").send(nuevoCafe); //Extraemos el statuscode y el objeto devuelto por la ruta de la peticion donde mandamos el cafe creado
    expect(cafeAgregado).toContainEqual(nuevoCafe); //Comprobamos que el objeto agregado a la BD es el mismo que le mandamos en la solicitud
    expect(statusCode).toBe(201);
  });
});
