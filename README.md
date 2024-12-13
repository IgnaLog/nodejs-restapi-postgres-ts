<h1 align="center">REST API Using Node.js and PostgreSQL with TypeScript</h1>

## Introduction

This project is a backend REST API built with **Node.js**, **TypeScript**, and **PostgreSQL**, utilizing the **MVC architecture** to perform typical CRUD operations on a user database.

## 🔬 Project Structure

The project is organized as follows:

- **src**: Contains the main application logic
  - **controllers**: Handles business logic for each API endpoint
  - **routes**: Defines API endpoints
  - **database**: Contains database connection configuration
- **dist**: Contains the transpiled JavaScript files
- **public**: Static files (if applicable)

## Features

- **CRUD operations** for managing users:
  - Create a new user
  - Read all users or a specific user
  - Update user details
  - Delete a user
- **Database integration** with PostgreSQL using `pg` library.
- **TypeScript** for strong typing and better developer experience.
- Development mode with hot-reload enabled using `nodemon` and `concurrently`.

## 📐 Installation and Configuration

### 1. Clone the Repository

```bash
git clone https://github.com/IgnaLog/nodejs-restapi-postgres-ts.git
cd nodejs-restapi-postgres-ts
```

### 2. Install Dependencies

Ensure you have **Node.js** installed. Then, run:

```bash
npm install
```

### 3. Configure the Database

Create a PostgreSQL database named `tsdatabase` and set up the `users` table using the following SQL:

```sql
CREATE DATABASE tsdatabase;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  email TEXT
);

INSERT INTO users (name, email)
VALUES ('joe', 'joe@gmail.com'), ('ryan', 'ryan@gmail.com');
```

Update the `pool` configuration in `src/database.ts` with your database credentials.

### 4. Start the Server

#### Development Mode

Run the following command to start the server in development mode with hot-reload:

```bash
npm run dev
```

#### Production Mode

Build the project and start the production server:

```bash
npm run build
node dist/index.js
```

The server will start on `http://localhost:3000`.

## 🛠️ Usage

### API Endpoints

- **GET /users**: Retrieve all users
- **GET /users/:id**: Retrieve a user by ID
- **POST /users**: Create a new user (body: `{ name, email }`)
- **PUT /users/:id**: Update a user's details (body: `{ name, email }`)
- **DELETE /users/:id**: Delete a user by ID

### Example Request

#### Create a User

```bash
curl -X POST http://localhost:3000/users \
  -H 'Content-Type: application/json' \
  -d '{"name": "Alice", "email": "alice@example.com"}'
```

#### Response

```json
{
  "message": "User created successfully",
  "body": {
    "user": {
      "name": "Alice",
      "email": "alice@example.com"
    }
  }
}
```

## 📂 Scripts and Commands

- `npm run dev`: Starts the development server with hot-reload.
- `npm run build`: Builds the TypeScript files into JavaScript in the `dist` folder.
- `node dist/index.js`: Starts the production server.

## 💻 Technologies Used

- **Node.js**: Runtime environment
- **TypeScript**: Superset of JavaScript with strong typing
- **PostgreSQL**: Relational database
- **Express**: Web framework for Node.js
- **pg**: PostgreSQL client for Node.js
- **concurrently**: Run multiple commands concurrently
- **nodemon**: Automatically restart the server on code changes
