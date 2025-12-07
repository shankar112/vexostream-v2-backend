const movies = require('../utils/data');

const getMovies = (req, res) => {
  res.json(movies);
};

const getMovieById = (req, res) => {
  const movie = movies.find((m) => m.id === req.params.id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ message: 'Movie not found' });
  }
};

module.exports = {
  getMovies,
  getMovieById,
};