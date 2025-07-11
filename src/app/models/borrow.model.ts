import { model, Schema } from "mongoose";
import BorrowInterface from "../interfaces/borrow.interface";

// borrow schema
const borrowSchema = new Schema<BorrowInterface>(
  {
    book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
    quantity: { type: Number, required: true },
    dueDate: { type: Date, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// borrow model instance
const Borrow = model("Borrow", borrowSchema, "borrowCollection");

export default Borrow;
