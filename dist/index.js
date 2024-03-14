"use strict";
// const express = require('express')
// const app = express()
// const port = 3000
// app.get('/', (req, res) => {
//  res.send('Hello World!')
// })
// app.listen(port, () => {
//  console.log(`Example app listening on port ${port}`)
// });
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/resources/routes"));
const morgan = require('morgan');
const app = (0, express_1.default)();
const port = 2525;
app.use(morgan('dev'));
app.use(express_1.default.json());
app.use(routes_1.default);
app.get('/', (req, res) => {
    res.send('Hello Madafaker!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
