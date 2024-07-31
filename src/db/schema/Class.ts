import { Schema, model } from 'mongoose';

interface ICourseRef {
  _id: Schema.Types.ObjectId;
  name: string;
}

interface IStudentRef {
  _id: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  status?: string;
}

export interface IClass {
  _id: Schema.Types.ObjectId;
  name: string;
  ageGroup?: string;
  schedule: string;
  course: ICourseRef;
  students: IStudentRef[];
}

const CourseRefSchema = new Schema<ICourseRef>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
});

const StudentRefSchema = new Schema<IStudentRef>({
  _id: { type: Schema.Types.ObjectId, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  status: { type: String },
});

const ClassSchema = new Schema<IClass>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  ageGroup: { type: String },
  schedule: { type: String, required: true },
  course: CourseRefSchema,
  students: [StudentRefSchema],
});

const Class = model<IClass>('Class', ClassSchema);
export default Class;
