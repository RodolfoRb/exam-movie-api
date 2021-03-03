const ticketRepository = require('../repository/ticket.repository');

const ticketService = {};
ticketService.getTickets = async () => {
    let tickets = await ticketRepository.getTickets();
    return tickets;
};
module.exports = ticketService;
