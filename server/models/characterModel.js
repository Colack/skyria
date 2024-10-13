/*
    Character Model
*/

import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 16
    },
    level: {
        type: Number,
        default: 1
    },
    experience: {
        type: Number,
        default: 0
    },
    health: {
        type: Number,
        default: 100
    },
    mana: {
        type: Number,
        default: 100
    },
    strength: {
        type: Number,
        default: 10
    },
    intelligence: {
        type: Number,
        default: 10
    },
    agility: {
        type: Number,
        default: 10
    },
    stamina: {
        type: Number,
        default: 10
    },
    gold: {
        type: Number,
        default: 0
    },
    inventory: {
        type: Array,
        default: []
    },
    equipment: {
        type: Object,
        default: {
            head: null,
            chest: null,
            legs: null,
            feet: null,
            hands: null,
            weapon: null,
            shield: null
        }
    },
    skills: {
        type: Array,
        default: []
    },
    quests: {
        type: Array,
        default: []
    },
    location: {
        type: Array,
        default: [0, 0, 0]
    },
    lastLogin: {
        type: Date,
        default: Date.now
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export const Character = mongoose.model('Character', CharacterSchema);