# Techerudite Task

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   cd backend

2. Install backend dependencies:
   npm install

3. Set up environment variables:
   Create a .env file in the backend directory with the following content:
   DB_HOST=localhost
   DB_USER=your_mysql_user
   DB_PASSWORD=your_mysql_password
   DB_NAME=your_database_name
   JWT_SECRET=your_jwt_secret
   (optional)
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USER=your_smtp_user
   SMTP_PASS=your_smtp_password

5. Create the database and tables:
   Run the following SQL command in your MySQL database:
   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     firstName VARCHAR(50),
     lastName VARCHAR(50),
     email VARCHAR(100) UNIQUE,
     password VARCHAR(255),
     role ENUM('admin', 'customer') NOT NULL,
     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

6. Start the backend server:
   npm start

### Frontend Setup

1. Navigate to the frontend directory:
   cd ../frontend

2. Install frontend dependencies:
   npm install

3. Start the frontend development server:
   npm start

## Usage

- The backend will be available at http://localhost:6000
- The frontend will be available at http://localhost:3000

