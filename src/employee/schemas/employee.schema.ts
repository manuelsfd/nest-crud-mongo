import { Schema } from 'mongoose';

export const EmployeeSchema = new Schema(
  {
    number_employee: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
