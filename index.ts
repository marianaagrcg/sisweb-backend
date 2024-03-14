// const express = require('express')
// const app = express()
// const port = 3000
// app.get('/', (req, res) => {
//  res.send('Hello World!')
// })
// app.listen(port, () => {
//  console.log(`Example app listening on port ${port}`)
// });


import express, {Express, Request, Response} from 'express';

import apiRouter from './src/resources/routes';

const morgan = require('morgan');

const app:Express = express();
const port = 3000;

app.use(morgan('dev'));

app.use(express.json());
app.use(apiRouter);

app.get('/', (req:Request, res:Response) => {
    res.send('Hello Madafaker!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
}) 

