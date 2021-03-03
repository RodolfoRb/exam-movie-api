const Movie = require("../models/Movie");

const movieRepository = {};
movieRepository.getMovies = async (city) => {
  return await Movie.find({ city: city });
};
movieRepository.findOneByCode = async (movie) => {
  return await Movie.findOne({ code: movie });
};
movieRepository.saveMovie = async (movieObj) => {
  const movie = new Movie(movieObj);
  return await movie.save();
};

module.exports = movieRepository;
