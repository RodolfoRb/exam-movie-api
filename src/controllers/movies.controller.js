const movieService = require('../services/movie.service');
const moviesController = {};
// /api/movies
moviesController.getMovies =  async (req, res) => {
    let movies = await movieService.getMovies(); 
    res.json(movies);
};
moviesController.getMovie = async (req, res) => {
    res.send('get one movie');
};

module.exports = moviesController;
