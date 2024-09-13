import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const connectToDatabase = async () => {
  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    
    console.log('Connected to the database');
    return db;
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    throw error;  // Rethrow to handle it where this module is used
  }
};

const db = await connectToDatabase();

export default db;
