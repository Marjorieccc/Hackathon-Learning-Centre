import { Schema, model } from 'mongoose';

interface IGuardian {
  fullName: string;
  relationshipToStudent: string;
}

interface IEmergency {
  fullName: string;
  phone: number;
}

interface IClassEnrolled {
  classId: Schema.Types.ObjectId;
  className: string;
  courseName: string;
  schedule: string;
  enrolledTime: Date;
  beforeAfterCamp?: string;
  pickUpArrange?: string;
  fee: number;
  status?: string;
  [key: string]: any;
}

export interface IStudent {
  _id: Schema.Types.ObjectId;
  firstName: string;
  lastName: string;
  gender: string;
  dob?: Date;
  phone: number;
  email: string;
  address: string;
  specialNeeds?: string;
  guardian?: IGuardian;
  emergency: IEmergency;
  classEnrolled: IClassEnrolled;
}

const GuardianSchema = new Schema<IGuardian>(
  {
    fullName: { type: String, required: true },
    relationshipToStudent: { type: String, required: true },
  },
  { _id: false }
);

const EmergencySchema = new Schema<IEmergency>(
  {
    fullName: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  { _id: false }
);

const ClassEnrolledSchema = new Schema<IClassEnrolled>({
  classId: { type: Schema.Types.ObjectId, ref: 'Class', required: true },
  className: { type: String, required: true },
  courseName: { type: String, required: true },
  schedule: { type: String, required: true },
  enrolledTime: { type: Date, required: true },
  beforeAfterCamp: { type: String },
  pickUpArrange: { type: String },
  fee: { type: Number, required: true },
  status: { type: String },
  additionalProperties: { type: Map, of: Schema.Types.Mixed, default: {} },
});

const StudentSchema = new Schema<IStudent>({
  _id: { type: Schema.Types.ObjectId, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date },
  phone: { type: Number, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  specialNeeds: { type: String },
  guardian: { type: GuardianSchema },
  emergency: { type: EmergencySchema, required: true },
  classEnrolled: ClassEnrolledSchema,
});

const StudentModel = model<IStudent>('Student', StudentSchema);
export default StudentModel;
