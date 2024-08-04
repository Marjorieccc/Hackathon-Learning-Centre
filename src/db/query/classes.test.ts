import mongoose from 'mongoose';
import {
  getClasses,
  searchClassById,
  searchClassByName,
  searchClassesByCourse,
} from './classes.js';

export async function testClasses() {
  // Get all classes
  const classList = await getClasses();
  console.log(`List all classes: ${classList}`);
  // Search by id
  const natureClass = await searchClassById(
    new mongoose.Types.ObjectId('64c0f8d7fd6f9d3c123f45ac')
  );
  console.log(`Search by id: ${natureClass}`);

  // Search by name
  const classByName = await searchClassByName('seekers');
  const classByName2 = await searchClassByName('Kids can');
  console.log(`Search by name: ${classByName}`);
  console.log(`Search by name2: ${classByName2}`);

  // Search by courses
  const classByCourse = await searchClassesByCourse(
    new mongoose.Types.ObjectId('64c0f8bdfd6f9d3c123f45ab')
  );
  console.log(`Search classes by course id: ${classByCourse}`);
}
