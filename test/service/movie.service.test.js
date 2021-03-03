const movieService = require("../../src/services/movie.service");
const cityModel = require("../../src/models/City");
const movieModel = require("../../src/models/Movie");
const mockingoose = require("mockingoose").default;
jest.useFakeTimers();
test("error when name is falsy", async () => {
  let movie = {
    name: "",
    code: "tt0172495",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    city: "CEN",
  };
  expect(() => movieService.saveMovie(movie)).rejects.toThrow();
});

test("error when code is falsy", async () => {
  let movie = {
    name: "Gladiator",
    code: "",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    city: "CEN",
  };
  expect(() => movieService.saveMovie(movie)).rejects.toThrow();
});

test("error when description is falsy", async () => {
  let movie = {
    name: "Gladiator",
    code: "tt0172495",
    description: "",
    city: "CEN",
  };
  expect(() => movieService.saveMovie(movie)).rejects.toThrow();
});

test("error when city is falsy", async () => {
  let movie = {
    name: "Gladiator",
    code: "tt0172495",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    city: "",
  };
  expect(() => movieService.saveMovie(movie)).rejects.toThrow();
});

test("error when city is invalid", async () => {
  let movie = {
    name: "Gladiator",
    code: "tt0172495",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    city: "CENN",
  };
  mockingoose(cityModel).toReturn(null, "findOne");
  expect(() => movieService.saveMovie(movie)).rejects.toThrow(
    "The city is invalid"
  );
});

test("create new movie", async () => {
  let movie = {
    name: "Gladiator",
    code: "tt0172495",
    description:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    city: "CEN",
  };
  mockingoose(cityModel).toReturn(
    { name: "Ciudad Obregón", code: "CEN" },
    "findOne"
  );
  mockingoose(movieModel).toReturn(movie, "save");
  expect(movieService.saveMovie(movie)).resolves.toBeTruthy();
});
