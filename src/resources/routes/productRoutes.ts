import { Router, Request, Response } from "express";
const productRouter = Router();

productRouter.get("/", (req: Request, res: Response) => {
  res.send(`Get a list of products`);
});

productRouter.get("/:id", (req: Request, res: Response) => {
  res.send(`Get the product ${req.params.id}`);
});

productRouter.post(`/`, (req: Request, res: Response) => {
  res.send(`Create a new product with ID ${req.body.id}`);
});

productRouter.patch("/:id", (req: Request, res: Response) => {
  res.send(`Update the product ${req.params.id} with the values of ${req.body.name}`);
});

productRouter.delete("/:id", (req: Request, res: Response) => {
  res.send(`Deleting the product ${req.body.id}`);
});

export default productRouter;

