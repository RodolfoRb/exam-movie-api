const ticketRepository = require("../repository/ticket.repository");
const movieRepository = require("../repository/movie.repository");

const ticketService = {};
ticketService.bookTicket = async (ticket) => {
  if (!ticket.movie) {
    throw new Error("The movie is required");
  }
  if (!ticket.bookDate) {
    throw new Error("The book date is required");
  }
  if (!ticket.owner) {
    throw new Error("The owner is required");
  }
  ticket.movie = await movieRepository.findOneByCode(ticket.movie);
  if (!ticket.movie) {
    throw new Error("The movie is ivalid");
  }
  await ticketRepository.bookTicket(ticket);
};
ticketService.getTickets = async (owner) => {
  let tickets = await ticketRepository.getTickets(owner);
  return tickets;
};
module.exports = ticketService;
