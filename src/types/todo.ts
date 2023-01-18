import { Document } from "mongoose";

// Todo interface that extends the Document typed provided by mongoose - to interact with MongoDB.
// The Todo model should look like this type:
export interface ITodo extends Document {
  name: string;
  description: string;
  status: boolean;
}
