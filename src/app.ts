import express, { Application, NextFunction, Request, Response } from "express";
import bookRouter from "./app/controllers/book.controller";
import { ZodError } from "zod";

// application
const app: Application = express();

// middleware
app.use(express.json());
app.use("/api/books", bookRouter);

// root route
app.get("/", (req: Request, res: Response) => {
  res.send("Server connected successfully");
});

// handle route error
app.use((req: Request, res: Response) => {
  res.status(404).json({
    message: "Route not found",
    success: false,
    error: {
      name: "404 Not found",
      message: "The requested route does not exist on the server",
      path: req.originalUrl,
    },
  });
});

// global error
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(error);
  }

  // Zod Validation Error Handling
  if (error instanceof ZodError) {
    return res.status(400).json({
      message: "Validation failed",
      success: false,
      error: {
        name: "ValidationError",
        errors: error.issues,
      },
    });
  }

  // mongoose validation error
  if (error.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      success: false,
      error: {
        name: error.name,
        errors: error.errors,
      },
    });
  }

  // mongoDB duplicate key error
  if (error.name === "MongoServerError" && error.code === 11000) {
    return res.status(400).json({
      message: "Duplicate key error",
      success: false,
      error: {
        name: error.name,
        message: `Duplicate value for field ${Object.keys(error.keyValue).join(
          ", "
        )}`,
        keyValue: error.keyValue,
      },
    });
  }

  // Fallback for others
  res.status(error.status || 500).json({
    message: error.message || "Something went wrong",
    success: false,
    error: {
      name: error.name || "InternalServerError",
      description: error.description || "An unexpected error occurred.",
      type: error.type,
    },
  });
});

export default app;
