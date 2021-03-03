const ticketService = require("../../src/services/ticket.service");
const movieModel = require("../../src/models/Movie");
const ticketModel = require("../../src/models/Ticket");
const mockingoose = require("mockingoose").default;
jest.useFakeTimers();
test("error when owner is falsy", async () => {
  let ticket = {
    owner: "",
    movie: "tt0172495",
    bookDate: "2021-03-03 18:00:00",
  };
  mockingoose(movieModel).toReturn(
    {
      name: "Gladiator",
      code: "tt0172495",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      city: "CEN",
    },
    "findOne"
  );
  mockingoose(ticketModel).toReturn(ticket, "save");
  expect(() => ticketService.bookTicket(ticket)).rejects.toThrow();
});
test("error when movie is falsy", async () => {
  let ticket = { owner: "603fe1cca80c89aa08f150e4", movie: "", bookDate: "2021-03-03 18:00:00" };
  mockingoose(movieModel).toReturn(
    {
      name: "Gladiator",
      code: "tt0172495",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      city: "CEN",
    },
    "findOne"
  );
  mockingoose(ticketModel).toReturn(ticket, "save");
  expect(() => ticketService.bookTicket(ticket)).rejects.toThrow();
});

test("error when bookDate is falsy", async () => {
  let ticket = { owner: "603fe1cca80c89aa08f150e4", movie: "tt0172495", bookDate: "" };
  mockingoose(movieModel).toReturn(
    {
      name: "Gladiator",
      code: "tt0172495",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      city: "CEN",
    },
    "findOne"
  );
  mockingoose(ticketModel).toReturn(ticket, "save");
  expect(() => ticketService.bookTicket(ticket)).rejects.toThrow();
});

test("error when movie is invalid", async () => {
  let ticket = {
    owner: "603fe1cca80c89aa08f150e4",
    movie: "tt01724956",
    bookDate: "2021-03-03 18:00:00",
  };
  mockingoose(movieModel).toReturn(null, "findOne");
  mockingoose(ticketModel).toReturn(ticket, "save");
  expect(ticketService.bookTicket(ticket)).rejects.toThrow();
});

test("book new ticket", async () => {
  let ticket = {
    owner: "603fe1cca80c89aa08f150e4",
    movie: "tt0172495",
    bookDate: "2021-03-03 18:00:00",
  };
  mockingoose(movieModel).toReturn(
    {
      name: "Gladiator",
      code: "tt0172495",
      description:
        "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      city: "CEN",
    },
    "findOne"
  );
  mockingoose(ticketModel).toReturn(ticket, "save");
  expect(ticketService.bookTicket(ticket)).resolves.toBeTruthy();
});
