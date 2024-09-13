import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/db.js';
import dotenv from 'dotenv';

dotenv.config();

export const registerUser = (role) => async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO users (firstName, lastName, email, password, role) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [firstName, lastName, email, hashedPassword, role], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err.message);
      return res.status(500).json({ message: 'Error registering user' });
    }

    console.log('User registered successfully with ID:', result.insertId);
    res.status(201).json({ message: 'Registration successful' });
  });
};

export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = 'SELECT * FROM users WHERE email = ? AND role = "admin"';
    db.query(query, [email], async (err, results) => {
      if (err) {
        console.error('Database error:', err.message);
        return res.status(500).json({ message: 'Internal server error' });
      }

      if (results.length === 0) {
        console.log('Invalid credentials or not an admin');
        return res.status(401).json({ message: 'Invalid credentials or not an admin' });
      }

      const user = results[0];
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        console.log('Invalid credentials');
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ token, message: 'Admin logged in successfully' });
    });
  } catch (err) {
    console.error('Error in admin login:', err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const loginCustomer = async (req, res) => {
  const { email, password } = req.body;

  try {
    const query = 'SELECT * FROM users WHERE email = ? AND role = "customer"';
    db.query(query, [email], async (err, results) => {
      if (err) {
        console.error('Database error:', err.message);
        return res.status(500).json({ message: 'Internal server error' });
      }

      if (results.length === 0) {
        console.log('You are not allowed to login from here');
        return res.status(401).json({ message: 'You are not allowed to login from here' });
      }

      const user = results[0];
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        console.log('Invalid credentials');
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      res.status(403).json({ message: 'You are not allowed to login from this page' });
    });
  } catch (err) {
    console.error('Error in customer login:', err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};
