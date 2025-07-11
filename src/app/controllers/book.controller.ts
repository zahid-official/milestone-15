import express, { NextFunction, Request, Response } from "express";
import Book from "../models/book.model";
import bookZodSchema from "../zodSchemas/book.zod";

// book router
const bookRouter = express.Router();

// get operations
{
  bookRouter.get(
    "/",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const filter = req.query.filter || "";
        const sort = req.query.sort || "asc";
        const sortBy = req.query.sortBy || "createdAt";
        const limit = Number(req.query.limit || "100");

        // filter condition
        const query =
          typeof filter === "string" && filter.trim() !== ""
            ? { genre: filter }
            : {};

        // sortBy field
        const sortField = typeof sortBy === "string" ? sortBy : "createdAt";

        // sort in accending or decending
        const sortOrder =
          typeof sort === "string" &&
          (sort.toLowerCase() === "desc" || sort === "-1")
            ? -1
            : 1;

        const result = await Book.find(query)
          .sort({
            [sortField]: sortOrder,
          })
          .limit(limit);
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
