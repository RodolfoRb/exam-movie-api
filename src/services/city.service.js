const cityRepository = require('../repository/city.repository');

const cityService = {};
cityService.getCities = async () => {
    let cities = await cityRepository.getCities();
    return cities;
};
cityService.saveCity = async (cityObj) => {
    if (!cityObj.name) {
      throw new Error("The name is required");
    }
    if (!cityObj.code) {
      throw new Error("The code is required");
    }
    await cityRepository.saveCity(cityObj);
};

module.exports = cityService;
