/// <reference types="jest" />
const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  it("Obteniendo código 200", async () => {
    const response = await request(server).get("/cafes"); //Capturamos
    const status = response.statusCode;
    expect(status).toBe(200);
  });
});
