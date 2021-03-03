const { Router } = require('express');
const ticketsController = require('../controllers/ticket.controller');
const authenticateToken = require('../middleware/autorized.middleware');

const router = new Router();
module.exports = router;

router.get('/', authenticateToken, ticketsController.getTickets);
router.post('/book-ticket', authenticateToken, ticketsController.bookTicket);

