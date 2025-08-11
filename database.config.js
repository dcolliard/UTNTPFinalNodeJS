import 'dotenv/config'
import mongoose from 'mongoose'

const { MONGO_URI, MONGO_DBNAME } = process.env

export default async function connectToMongoDB () {
  if (!MONGO_URI) throw new Error('MONGO_URI no definida en .env')

  const options = { serverSelectionTimeoutMS: 5000 }
  if (MONGO_DBNAME) options.dbName = MONGO_DBNAME  // usa esto SOLO si coincide con la de la URI

  await mongoose.connect(MONGO_URI, options)
  console.log('✅ Conectado:', mongoose.connection.host, 'db=', mongoose.connection.name)
}
