import express from 'express'
import {
  createMovie,
  listMovies,
  getMovie,
  updateMovie,
  deleteMovie
} from '../controllers/movie.controller.js'

/* Manejando la ruta de películas: todas las consultas relacionadas con movies se manejan aquí */

// Se crea un enrutador
const movie_router = express.Router()

// LISTAR TODAS
movie_router.get(
  '/',
  (request, response, next) => listMovies(request, response, next)
)

// CREAR
movie_router.post(
  '/',
  (request, response, next) => createMovie(request, response, next)
)

// OBTENER POR ID
movie_router.get(
  '/:id',
  (request, response, next) => getMovie(request, response, next)
)

// ACTUALIZAR POR ID
movie_router.put(
  '/:id',
  (request, response, next) => updateMovie(request, response, next)
)

// ELIMINAR POR ID
movie_router.delete(
  '/:id',
  (request, response, next) => deleteMovie(request, response, next)
)

export default movie_router
