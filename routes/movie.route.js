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

// DEBUG primero, para que no lo capture :id
movie_router.get('/debug', async (req, res) => {
  const db = mongoose.connection
  const info = {
    connected: db.readyState === 1,
    host: db.host,
    dbName: db.name,
    collection: Movie.collection.name,
    count: await Movie.estimatedDocumentCount()
  }
  res.json(info)
})

// CRUD
movie_router.get('/', listMovies)
movie_router.post('/', createMovie)

// A PARTIR DE ACÁ las rutas con :id
movie_router.get('/:id', getMovie)
movie_router.put('/:id', updateMovie)
movie_router.delete('/:id', deleteMovie)

export default movie_router
