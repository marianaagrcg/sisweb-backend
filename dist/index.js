"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes"));
const app = (0, express_1.default)();
const morgan = require('morgan');
const port = 2525;
app.use(morgan('dev'));
app.use(express_1.default.json());
app.use(routes_1.default);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
