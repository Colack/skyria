import mongoose from 'mongoose'

const TowerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    maxLength: 16,
  },
  floors: {
    type: Array,
    default: [],
  },
  bosses: {
    type: Array,
    default: [],
  },
  monsters: {
    type: Array,
    default: [],
  },
  rewards: {
    type: Array,
    default: [],
  },
})

export const Tower = mongoose.model('Tower', TowerSchema)
