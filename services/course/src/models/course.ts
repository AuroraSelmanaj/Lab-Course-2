import mongoose, { Document, Schema } from "mongoose";

export interface ICourse extends Document {
  title: string;
  description: string;
  tags: string[];
  instructorId: string;
  createdAt: Date;
}

const CourseSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    tags: {
      type: [String],
      default: []
    },
    instructorId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const Course = mongoose.model<ICourse>(
  "Course",
  CourseSchema
);