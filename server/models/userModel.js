import mongoose from 'mongoose'
import { CharacterSchema } from './characterModel'

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    collation: { locale: 'en', strength: 2 },
    required: true,
    maxLength: 16,
  },
  email: {
    type: String,
    unique: true,
    maxLength: 500,
  },
  password: {
    type: String,
    minLength: 8,
    maxLength: 100,
    required: true,
  },
  character: {
    type: CharacterSchema,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  online: {
    type: Boolean,
    default: false,
  },
  banned: {
    type: Boolean,
    default: false,
  },
  permissions: {
    type: Array,
    default: [],
  },
  friends: {
    type: Array,
    default: [],
  },
  friendRequests: {
    type: Array,
    default: [],
  },
  friendRequestsSent: {
    type: Array,
    default: [],
  },
  friendRequestsReceived: {
    type: Array,
    default: [],
  },
  messages: {
    type: Array,
    default: [],
  },
  notifications: {
    type: Array,
    default: [],
  },
})

export const User = mongoose.model('User', UserSchema)
