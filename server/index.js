/*
    This is the Skyria Dungeons backend server entry point.
    This file is responsible for setting up the server and connecting to the database.
*/

/*
    NPM Packages
*/
import express from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import envalid from 'envalid';

/*
    Local Imports
*/ 
import { createConnection } from './database/connect.js';
import { logColor } from './utility/logColor.js';

/*
    Constants
*/
const { str } = envalid;
const app = express();

dotenv.config();

envalid.cleanEnv(process.env, {
    MONGO_URI: str()
});

const uri = process.env.MONGO_URI;
const port = process.env.PORT || 3000;

/*
    Middleware
*/
app.use(express.json());
app.use(cors());
app.use(cookieParser());

/*
    Routes
*/

/*
    Database Connection
*/
const client = createConnection(uri);
client.connect();

/*
    Server Start
*/ 
app.listen(port, () => {
    logColor(`Server is running on port ${port}`, 'green');
});

app.get('/health', (req, res) => {
    res.status(200).send({ status: 'ok' });
});

app.get((err, req, res, next) => {
    res.status(500).send({ error: err });
});