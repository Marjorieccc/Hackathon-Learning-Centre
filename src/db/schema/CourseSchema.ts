import { Schema, model } from 'mongoose';

interface IClassRef {
  classId: Schema.Types.ObjectId;
  name: string;
}

export interface ICourse {
  _id: Schema.Types.ObjectId;
  name: string;
  ageGroup?: string;
  classes: IClassRef[];
}

const ClassRefSchema = new Schema<IClassRef>(
  {
    classId: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
  },
  { _id: false }
);

const CourseSchema = new Schema<ICourse>(
  {
    _id: { type: Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    ageGroup: { type: String },
    classes: [{ type: ClassRefSchema }],
  },
  { collection: 'Courses' }
);

const CourseModel = model<ICourse>('Courses', CourseSchema);
export default CourseModel;
