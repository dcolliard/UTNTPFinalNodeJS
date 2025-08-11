
import mongoose from "mongoose";

const MoviesSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        year:  { type: Number, min: 1888, max: 2025, required: true },
        genre: { type: String, required: true, trim: true }, 
        durationMin: { type: Number, min: 1 },
    },
    { timestamps: true }
)

const Movie = mongoose.model('Movie', MoviesSchema)

export default Movie