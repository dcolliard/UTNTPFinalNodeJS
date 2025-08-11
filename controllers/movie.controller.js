import * as service from '../services/movie.service.js';

export async function createMovie(req, res) {
  const movie = await service.create(req.body);
  res.status(201).json(movie);
}

export async function listMovies(req, res) {
  const movies = await service.list(req.query);
  res.json(movies);
}

export async function getMovie(req, res) {
  const movie = await service.get(req.params.id);
  res.json(movie);
}

export async function updateMovie(req, res) {
  const movie = await service.update(req.params.id, req.body);
  res.json(movie);
}

export async function deleteMovie(req, res) {
  const movie = await service.remove(req.params.id);
  res.json({ ok: true });
}
