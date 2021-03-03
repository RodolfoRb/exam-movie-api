const movieRepository = require('../repository/movie.repository');

const movieService = {};
movieService.getMovies = async () => {
    let movies = await movieRepository.getMovies();
    return movies;
};
module.exports = movieService;
