import { Types } from "mongoose";
import { z } from "zod";

const borrowZodSchema = z.object({
  book: z
    .string({
      error: (issue) =>
        issue.input === undefined
          ? "Book is required"
          : "Book must be a string",
    })
    .refine((value) => Types.ObjectId.isValid(value), {
      error: "Invalid ObjectId",
    }),
  quantity: z.number({
    error: (issue) =>
      issue.input === undefined
        ? "Quantity is required"
        : "Quantity must be a number",
  }),
  dueDate: z.date({
    error: (issue) =>
      issue.input === undefined
        ? "Due date is required"
        : "Due date must be a valid date",
  }),
});

export default borrowZodSchema;
