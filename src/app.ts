import express, { Application, Request, Response } from "express";
import bookRouter from "./app/controllers/book.controller";
import borrowRouter from "./app/controllers/borrow.controller";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import routeNotFoundHandler from "./app/middlewares/routeNotFoundHandler";

// application
const app: Application = express();

// middleware
app.use(express.json());
app.use("/api/books", bookRouter);
app.use("/api/borrow", borrowRouter);

// root route
app.get("/", (req: Request, res: Response) => {
  res.send("Server connected successfully");
});

// handle route error
app.use(routeNotFoundHandler);

// global error
app.use(globalErrorHandler);

export default app;
