import * as repo from '../repositories/movie.repository.js';

export async function create(data) {
  return await repo.createMovie(data);
}

export async function list(query = {}) {
  const { sort = '-createdAt', ...filter } = query;
  return await repo.getMovies(filter, sort);
}

export async function get(id) {
  return await repo.getMovieById(id);
}

export async function update(id, data) {
  return await repo.updateMovieById(id, data);
}

export async function remove(id) {
  return await repo.deleteMovieById(id);
}
