const Movie = require('../models/Movie')
const movieRepository = {};
movieRepository.getMovies = async () => {
    return await Movie.find();
};
module.exports = movieRepository;
