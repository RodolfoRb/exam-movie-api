const ticketService = require("../services/ticket.service");
const ticketsController = {};
ticketsController.bookTicket = async (req, res) => {
  let ticket = req.body;
  ticket.owner = req.user._id;
  await ticketService.bookTicket(ticket);
  res.json();
};
ticketsController.getTickets = async (req, res) => {
  let owner = req.user._id;
  let tickets = await ticketService.getTickets(owner);
  res.json(tickets);
};
module.exports = ticketsController;
