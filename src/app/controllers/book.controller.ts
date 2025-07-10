import express, { NextFunction, Request, Response } from "express";
import Book from "../models/book.model";
import bookZodSchema from "../zodSchemas/book.zod";

// book router
const bookRouter = express.Router();

// create operations
{
  bookRouter.post(
    "/",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const body = await bookZodSchema.parseAsync(req.body);
        const result = await Book.create(body);
        res.json({
          success: true,
          message: "Book created successfully",
          data: result,
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

export default bookRouter;
