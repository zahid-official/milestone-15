import express, { NextFunction, Request, Response } from "express";
import borrowZodSchema from "../zodSchemas/borrow.zod";
import Borrow from "../models/borrow.model";
import Book from "../models/book.model";

// borrow router
const borrowRouter = express.Router();

// create operations
{
  borrowRouter.post(
    "/",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const body = await borrowZodSchema.parseAsync(req.body);

        // check book availability and update database
        const book = await Book.borrowBook(body?.book, body?.quantity);

        const result = await Borrow.create(body);

        res.json({
          success: true,
          message: "Book borrowed successfully",
          data: result,
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

export default borrowRouter;
