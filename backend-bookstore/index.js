import express from 'express';
import Connection from './database/db.js';

const PORT = 3000;
const app = express();
app.listen((PORT),()=>{
    console.log("Listening on port");
}) 

Connection();