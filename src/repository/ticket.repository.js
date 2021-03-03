const Ticket = require("../models/Ticket");
const ticketRepository = {};
ticketRepository.bookTicket = async (ticketObj) => {
  const ticket = new Ticket(ticketObj);
  return await ticket.save();
};
ticketRepository.getTickets = async (owner) => {
  return await Ticket.find({ owner: owner }).populate('movie');
};
module.exports = ticketRepository;
