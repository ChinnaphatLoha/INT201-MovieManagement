// 65130500100 Chinnaphat Lohasangsuwan
const { hasDuplicateMovie, findMovieByTitle } = require('./utils');

class Movies {
  constructor() {
    this.movies = [];
  }

  getAllMovies() {
    return this.movies;
  }

  addMovie(title, director, year, genre) {
    if (
      !title ||
      !director ||
      !year ||
      !genre ||
      hasDuplicateMovie(this.movies, title, director)
    ) {
      return undefined;
    }
    const newMovie = { title, director, year, genre };
    this.movies.push(newMovie);
    return newMovie;
  }

  updateMovie(title, updateDetails) {
    const movie = findMovieByTitle(this.movies, title);
    if (!movie) return undefined;
    Object.assign(movie, updateDetails);
    return movie;
  }

  deleteMovieByTitle(title) {
    const initialLength = this.movies.length;
    this.movies = this.movies.filter(
      (movie) => movie.title.toLowerCase() !== title.toLowerCase()
    );
    return initialLength !== this.movies.length;
  }
}

module.exports = Movies;
