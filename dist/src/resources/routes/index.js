"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRoutes_1 = __importDefault(require("./productRoutes"));
const apiRouter = (0, express_1.Router)();
apiRouter.use("/products", productRoutes_1.default);
apiRouter.get("/", (req, res) => {
    res.send(`Welcome to the API`);
});
exports.default = apiRouter;
