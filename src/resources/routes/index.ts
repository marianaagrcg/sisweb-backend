import { Router, Request, Response } from "express";

import productRoutes from "./productRoutes";

const apiRouter = Router();

apiRouter.use("/products", productRoutes);

apiRouter.get("/", (req: Request, res: Response) => {
  res.send(`Welcome to the API`);
});

export default apiRouter;
