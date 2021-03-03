const { Router } = require('express');
const citiesController = require('../controllers/cities.controller');
const authenticateToken = require('../middleware/autorized.middleware');

const router = new Router();
module.exports = router;

router.get('/', citiesController.getCities);
router.post('/', authenticateToken, citiesController.saveCity);

