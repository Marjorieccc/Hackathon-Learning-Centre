import mongoose from 'mongoose';
import Logging from '../logging/logging.js';
import { config } from './config.js';

export async function connectDb() {
  try {
    await mongoose.connect(config.mongo.uri, {
      retryWrites: true,
      w: 'majority',
    });
    Logging.info('Connected to MongoDB successfully.');
  } catch (error) {
    Logging.error(`Error connecting to MongoDB: ${error}`);
    process.exit(1);
  }
}
