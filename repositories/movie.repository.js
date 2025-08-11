import Movie from '../models/MovieModel.js';

export async function createMovie(data) {
  return await Movie.create(data);
}

export async function getMovies(filter = {}, sort = '-createdAt') {
  return await Movie.find(filter).sort(sort);
}

export async function getMovieById(id) {
  return await Movie.findById(id);
}

export async function updateMovieById(id, data) {
  return await Movie.findByIdAndUpdate(id, data, { new: true });
}

export async function deleteMovieById(id) {
  return await Movie.findByIdAndDelete(id);
}
