const hasDuplicateMovie = (movies, title, director) => {
  return movies.some(
    (movie) =>
      movie.title.toLowerCase() === title.toLowerCase() &&
      movie.director.toLowerCase() === director.toLowerCase()
  );
};

const findMovieByTitle = (movies, title) => {
  return movies.find(
    (movie) => movie.title.toLowerCase() === title.toLowerCase()
  );
};

module.exports = {
  hasDuplicateMovie,
  findMovieByTitle,
};
