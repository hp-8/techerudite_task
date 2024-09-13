# Techerudite Task

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   cd backend

2. Install backend dependencies:
   npm install

3. Set up environment variables:
   Create a .env file in the backend directory with the following content: <br/>
   DB_HOST=localhost <br/>
   DB_USER=your_mysql_user<br/>
   DB_PASSWORD=your_mysql_password<br/>
   DB_NAME=your_database_name<br/>
   JWT_SECRET=your_jwt_secret<br/>
   (optional)<br/><br/>
   SMTP_HOST=your_smtp_host<br/>
   SMTP_PORT=your_smtp_port<br/>
   SMTP_USER=your_smtp_user<br/>
   SMTP_PASS=your_smtp_password<br/>

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

