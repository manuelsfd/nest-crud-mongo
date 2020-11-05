import { Document } from "mongoose";

export interface Employee extends Document {
    readonly number_employee: string;
    readonly name: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
