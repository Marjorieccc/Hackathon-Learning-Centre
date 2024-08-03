import { Schema, model, Types } from 'mongoose';

interface ICourseRef {
  courseId: Types.ObjectId;
  name: string;
}

export interface IClass {
  _id: Types.ObjectId;
  name: string;
  ageGroup?: string;
  schedule: string;
  course: ICourseRef;
  students?: Schema.Types.ObjectId[];
}

const CourseRefSchema = new Schema<ICourseRef>(
  {
    courseId: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
  },
  { _id: false }
);

const ClassSchema = new Schema<IClass>(
  {
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    ageGroup: { type: String },
    schedule: { type: String, required: true },
    course: CourseRefSchema,
    students: [{ type: Schema.Types.ObjectId }],
  },
  { collection: 'Classes' }
);

const ClassModel = model<IClass>('Classes', ClassSchema);
export default ClassModel;
