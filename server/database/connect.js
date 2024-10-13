import mongoose from 'mongoose'
mongoose.set('strictQuery', true)

export const createConnection = async uri => {
  return mongoose.connect(uri)
}
