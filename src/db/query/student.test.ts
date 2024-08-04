import mongoose from 'mongoose';
import {
  getStudents,
  searchStudentById,
  searchStudentByName,
} from './student.js';

export async function testStudent() {
  const student = await getStudents();
  // Search by id
  const student2Id = new mongoose.Types.ObjectId('64c0f90a7e6b9e2b90234567');
  const student2 = await searchStudentById(student2Id);
  const student3Id = new mongoose.Types.ObjectId('64c0f92d7e6b9e2b90234568');
  const student3 = await searchStudentById(student3Id);

  console.log(`Get all student: ${student}`);
  console.log(`student2: ${student2}`);
  console.log(`student3: ${student3}`);

  // Search by name
  const studByName = await searchStudentByName('J');
  const stud2ByName = await searchStudentByName('oE');
  console.log(`search student by 'J': ${studByName}`);
  console.log(`search student by 'oE': ${stud2ByName}`);
}
