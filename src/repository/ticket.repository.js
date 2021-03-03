const ticket = require("../models/Ticket");
const ticketRepository = {};
ticketRepository.findByticketname = async (ticketname) => {
  return await ticket.findOne({ ticketname: ticketname });
};
ticketRepository.createticket = async (ticketObj) => {
  const ticket = new ticket(ticketObj);
  return await ticket.save();
};
module.exports = ticketRepository;
