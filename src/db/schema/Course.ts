import { Schema, model } from 'mongoose';

interface IClassRef {
  _id: Schema.Types.ObjectId;
  name: string;
}

export interface ICourse {
  _id: Schema.Types.ObjectId;
  name: string;
  ageGroup?: string;
  classes: IClassRef[];
}

const ClassRefSchema = new Schema<IClassRef>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
});

const CourseSchema = new Schema<ICourse>({
  _id: { type: Schema.Types.ObjectId, required: true },
  name: { type: String, required: true },
  ageGroup: { type: String },
  classes: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
});

const Course = model<ICourse>('Course', CourseSchema);
export default Course;
