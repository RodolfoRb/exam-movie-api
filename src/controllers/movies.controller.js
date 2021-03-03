const movieService = require('../services/movie.service');
const moviesController = {};
// /api/movies
moviesController.getMovies =  async (req, res) => {
    let movies = await movieService.getMovies(req.params.city); 
    res.json(movies);
};
moviesController.saveMovie = async (req, res) => {
    let movie = req.body;
    await movieService.saveMovie(movie); 
    res.json();
};

module.exports = moviesController;
