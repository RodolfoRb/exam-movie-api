const movieRepository = require('../repository/movie.repository');
const cityRepository = require('../repository/city.repository');

const movieService = {};
movieService.getMovies = async (city) => {
    city = await cityRepository.findOneByCode(city);
    let movies = await movieRepository.getMovies(city._id);
    return movies;
};
movieService.saveMovie = async (movie) => {
    if (!movie.name) {
      throw new Error("The name is required");
    }
    if (!movie.code) {
      throw new Error("The code is required");
    }
    if (!movie.description) {
      throw new Error("The description is required");
    }
    if (!movie.city) {
      throw new Error("The city is required");
    }
    movie.city = await cityRepository.findOneByCode(movie.city);
    if (!movie.city) {
      throw new Error("The city is invalid");
    }
    await movieRepository.saveMovie(movie);
};

module.exports = movieService;
