import express, { Application, Request, Response } from "express";

// application
const app: Application = express();

// middleware
app.use(express.json());

// root route
app.get("/", (req: Request, res: Response) => {
  res.send("Server connected successfully");
});

export default app;
