const cityService = require('../services/city.service');
const citiesController = {};
// /api/citys
citiesController.getCities =  async (req, res) => {
    let citys = await cityService.getCities(); 
    res.json(citys);
};
citiesController.saveCity = async (req, res) => {
    let city = req.body;
    await cityService.saveCity(city); 
    res.json();
};

module.exports = citiesController;
