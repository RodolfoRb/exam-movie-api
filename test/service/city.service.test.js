const cityService = require("../../src/services/city.service");
const cityModel = require("../../src/models/City");
const mockingoose = require('mockingoose').default;
jest.useFakeTimers();
test("error when name is falsy", async () => {
  let city = { name: "", code: "CEN" };
  expect(() => cityService.saveCity(city)).rejects.toThrow();
});

test("error when code is falsy", async () => {
    let city = { name: "Ciudad Obregón", code: "" };
  expect(() => cityService.saveCity(city)).rejects.toThrow();
});

test("create new city", async () => {
  let city = { name: "Ciudad Obregón", code: "CEN" };
  mockingoose(cityModel).toReturn(city, 'save');
  expect(cityService.saveCity(city)).resolves.toBeTruthy();
});
