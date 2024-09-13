import connection from '../config/db.js';

// Find user by email
const findUserByEmail = (email) => {
  const query = 'SELECT * FROM users WHERE email = ?';
  return new Promise((resolve, reject) => {
    connection.query(query, [email], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

// Create a new user
const createUser = (user) => {
  const query = 'INSERT INTO users (first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?)';
  return new Promise((resolve, reject) => {
    connection.query(query, [user.firstName, user.lastName, user.email, user.password, user.role], (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

export default {
  findUserByEmail,
  createUser,
};
