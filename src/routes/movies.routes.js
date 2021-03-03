const { Router } = require('express');
const movieController = require('../controllers/movies.controller');
const authenticateToken = require('../policies/autorized.policy');

const router = new Router();
module.exports = router;

router.get('/', authenticateToken, movieController.getMovies);
router.get('/:id', movieController.getMovie);

