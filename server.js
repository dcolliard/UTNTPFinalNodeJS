import express from 'express';
import connectToMongoDB from './database.config.js';
import movie_router from './routes/movie.route.js';
import dotenv from 'dotenv'


dotenv.config()

const app = express()

app.use(express.json())

connectToMongoDB()

app.use('/api/movies', movie_router)


app.listen(8080, () => {
    console.log('Servidor escuchandose en el puerto ' + 8080)
})
