import { Types } from 'mongoose';
import StudentModel, { IStudent } from './schema/StudentSchema.js';

/**
 * Add one or more students into the database.
 * @async
 * @param {IStudent | IStudent[]} students students to be added
 * @returns {Promise<any>} Promise
 */
export async function addStudents(
  students: IStudent | IStudent[]
): Promise<any> {
  const result = await StudentModel.create(students);
  return result;
}

/**
 * Retrieves all students from the database.
 * @async
 * @returns {Promise<IStudent | IStudent[] | null>} A promise of a student or an array of students, or null if no result found.
 */
export async function getStudents(): Promise<IStudent | IStudent[] | null> {
  const students = await StudentModel.find();
  return students;
}

/**
 * Searches for a student by id
 * @async
 * @param {Types.ObjectId} id id of the student
 * @returns {Promise<IStudent | null>} A promise of a student object or null if not found
 */
export async function searchStudentById(
  id: Types.ObjectId
): Promise<IStudent | null> {
  const student = await StudentModel.findById(id);
  return student;
}

/**
 * Searches for students by their first name or last name, using a partial match.
 * @async
 * @param name - search term
 * @returns {Promise<IStudent | IStudent[] | null>} A promise that resolves to an array of student objects matching the search criteria,
 *                                      or null if no matches are found.
 */
export async function searchStudentByName(
  name: string
): Promise<IStudent | IStudent[] | null> {
  const students = await StudentModel.find({
    $or: [
      { firstName: { $regex: name, $options: 'i' } },
      { lastName: { $regex: name, $options: 'i' } },
    ],
  });
  return students;
}
