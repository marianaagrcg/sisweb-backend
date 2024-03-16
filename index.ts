// const express = require('express')
// const morgan = require('morgan')
// const app = express()
// const port = 2525
// app.use(morgan('dev'))
// app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
//  res.send('Up and running!!')
// })
// app.listen(port, () => {
//  console.log(`Example app listening on port ${port}`)
// })

import express, { Express, Request, Response } from "express";
import apiRouter from './src/routes';
const app: Express = express();
const morgan = require('morgan');
const port = 2525;
app.use(morgan('dev'));
app.use(express.json());
app.use(apiRouter);
app.listen(port, () => {
console.log(`Example app listening on port ${port}`);
});