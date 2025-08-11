// routes/movie.route.js
import express from 'express'
import mongoose from 'mongoose'
import {
  createMovie,
  listMovies,
  getMovie,
  updateMovie,
  deleteMovie
} from '../controllers/movie.controller.js'
import Movie from '../models/MovieModel.js'

const movie_router = express.Router()

movie_router.get('/', listMovies)
movie_router.post('/', createMovie)

movie_router.get('/:id', getMovie)
movie_router.put('/:id', updateMovie)
movie_router.delete('/:id', deleteMovie)

export default movie_router
