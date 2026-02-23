import mongoose, { Document, Schema } from "mongoose";

export interface IEnroll extends Document {
  title: string;
  description: string;
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
    instructorId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const Enroll = mongoose.model<IEnroll>(
  "Enroll",
  CourseSchema
);