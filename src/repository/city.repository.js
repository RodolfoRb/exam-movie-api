const City = require("../models/City");
const cityRepository = {};
cityRepository.getCities = async () => {
  return await City.find();
};
cityRepository.saveCity = async (cityObj) => {
  const city = new City(cityObj);
  return await city.save();
};
cityRepository.findOneByCode = async (city) => {
  return await City.findOne({ code: city });
};

module.exports = cityRepository;
