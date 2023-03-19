import "jasmine";
import request = require("request-promise");

const baseUrl = "http://localhost:3000";
const carsUrl = `${baseUrl}/cars`;

describe("O servidor", () => {
  var server: any;

  beforeAll(() => {
    server = require("../server");
  });

  it("inicialmente retorna uma lista de alunos vazia", () => {
    return request
      .get(carsUrl)
      .then((body) => expect(body).toBe("[]"))
      .catch((e) => expect(e).toEqual(null));
  });

  it("só cadastra com preco positivo", () => {
    const body = {
      name: "Lancer",
      brand: "Mitsubishi",
      price: -100,
      color: "BLACK",
    };
    const options: any = { method: "POST", uri: carsUrl, body, json: true };
    return request(options).catch(({ statusCode }) => {
      expect(statusCode).toBe(400);
    });
  });

  it("cadastra carro com sucesso", () => {
    const body = {
      name: "Lancer",
      brand: "Mitsubishi",
      price: 90,
      color: "BLACK",
    };
    const options: any = { method: "POST", uri: carsUrl, body, json: true };
    const newCar = { id: 0, ...body };
    return request(options).then((body) => {
      expect(body).toEqual(newCar);
    });
  });
});
