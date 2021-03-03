const { Router } = require('express');
const movieController = require('../controllers/movies.controller');
const authenticateToken = require('../middleware/autorized.middleware');

const router = new Router();
module.exports = router;

router.get('/city/:city', movieController.getMovies);
router.post('/', authenticateToken, movieController.saveMovie);

