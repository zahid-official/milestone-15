<div align="center">

<img src="https://cdn-icons-png.flaticon.com/512/2702/2702134.png" alt="Library Logo" width="50" />

# Library Management API - Express, TypeScript & MongoDB

A comprehensive library management system with book CRUD operations, borrowing workflows, aggregation pipelines, and strict business logic enforcement.

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zahid-official/milestone-15)
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
<img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
<img src="https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />

</div>

<br/>

## 🔍 Overview

**Library Management API** is a RESTful backend service for managing books and tracking borrowing activities. It features schema validation with Zod, MongoDB aggregation pipelines for borrowed books summaries, Mongoose static methods and middleware hooks, and comprehensive business logic enforcement — ensuring data consistency from borrow to return.

> _Where every book finds its reader, and every reader finds their book._

<br/>

## ✨ Key Features

### 📚 Book Management

<table align="center">
<thead>
<tr><th align="left">Feature</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><b>Full CRUD Operations</b></td><td>Create, read, update, and delete books with complete lifecycle management</td></tr>
<tr><td><b>Genre-Based Filtering</b></td><td>Filter books by genre — Fiction, Non-Fiction, Science, History, Biography, Fantasy</td></tr>
<tr><td><b>Advanced Sorting</b></td><td>Sort results by any field in ascending or descending order with configurable limits</td></tr>
<tr><td><b>ISBN Uniqueness</b></td><td>Enforce unique ISBN constraints to prevent duplicate book entries</td></tr>
</tbody>
</table>

### 🔄 Borrowing System

<table align="center">
<thead>
<tr><th align="left">Feature</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><b>Quantity-Aware Borrowing</b></td><td>Borrow multiple copies at once with automatic stock deduction</td></tr>
<tr><td><b>Availability Control</b></td><td>Books automatically become unavailable when all copies are borrowed</td></tr>
<tr><td><b>Aggregation Summary</b></td><td>MongoDB aggregation pipeline provides a grouped summary of all borrowed books</td></tr>
<tr><td><b>Due Date Validation</b></td><td>Enforce future-dated due dates to maintain borrowing integrity</td></tr>
</tbody>
</table>

### 🛡️ Validation & Error Handling

<table align="center">
<thead>
<tr><th align="left">Feature</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><b>Zod Schema Validation</b></td><td>Strong input validation with custom error messages for every field</td></tr>
<tr><td><b>Global Error Handler</b></td><td>Centralized middleware catches and formats all errors consistently</td></tr>
<tr><td><b>Route Protection</b></td><td>Custom middleware for handling undefined routes with clear feedback</td></tr>
<tr><td><b>Business Logic Errors</b></td><td>Descriptive error responses for insufficient copies, invalid IDs, and more</td></tr>
</tbody>
</table>

<br/>

## 🛠️ Tech Stack

<table align="center">
<thead>
<tr><th align="left">Technology</th><th align="center">Version</th><th align="left">Purpose</th></tr>
</thead>
<tbody>
<tr><td><b>Node.js</b></td><td align="center"><code>v18+</code></td><td>JavaScript runtime environment</td></tr>
<tr><td><b>Express</b></td><td align="center"><code>^5.1.0</code></td><td>Minimal and flexible web framework</td></tr>
<tr><td><b>TypeScript</b></td><td align="center"><code>^5.8.3</code></td><td>Static type checking and enhanced DX</td></tr>
<tr><td><b>MongoDB</b></td><td align="center"><code>^6.17.0</code></td><td>NoSQL document database driver</td></tr>
<tr><td><b>Mongoose</b></td><td align="center"><code>^8.16.2</code></td><td>Elegant MongoDB object modeling</td></tr>
<tr><td><b>Zod</b></td><td align="center"><code>^4.0.3</code></td><td>TypeScript-first schema validation</td></tr>
<tr><td><b>dotenv</b></td><td align="center"><code>^17.2.0</code></td><td>Environment variable management</td></tr>
<tr><td><b>@types/express</b></td><td align="center"><code>^5.0.3</code></td><td>TypeScript type definitions for Express</td></tr>
</tbody>
</table>

<br/>

## 🏗️ Architecture

<div>
<pre>
                      ┌──────────────────────────────────────────────────────────────┐
                      │                         Client                               │
                      │              (Postman / cURL / Frontend)                     │
                      └─────────────────────────────┬────────────────────────────────┘
                                                    │  HTTP Requests
                                                    ▼
                      ┌──────────────────────────────────────────────────────────────┐
                      │               Express Server (TypeScript)                    │
                      │  ┌────────────────────────────────────────────────────────┐  │
                      │  │                    Middleware Layer                    │  │
                      │  │  • Zod Schema Validation                               │  │
                      │  │  • Global Error Handler                                │  │
                      │  │  • Route Not Found Handler                             │  │
                      │  └───────────────────────────┬────────────────────────────┘  │
                      │                              ▼                               │
                      │              ┌──────────────┐  ┌──────────────┐              │
                      │              │  Controllers │  │  Controllers │              │
                      │              │  (Book)      │  │  (Borrow)    │              │
                      │              └──────┬───────┘  └──────┬───────┘              │
                      │                     │                 │                      │
                      │                     ▼                 ▼                      │
                      │  ┌──────────────────────────────────────────────────────┐    │
                      │  │      Mongoose Models + Static Methods + Middleware   │    │
                      │  │  • Pre-save hooks (availability toggle)              │    │
                      │  │  • Static method: borrowBook()                       │    │
                      │  │  • Aggregation pipeline (borrow summary)             │    │
                      │  └───────────────────────────┬──────────────────────────┘    │
                      │                              │                               │
                      └──────────────────────────────┼───────────────────────────────┘
                                                    ▼
                                    ┌─────────────────────────────┐
                                    │         MongoDB Atlas       │
                                    │       (Books + Borrows)     │
                                    └─────────────────────────────┘
</pre>
</div>

<br/>

## 📂 Project Structure

```
milestone-15/
│
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
├── vercel.json                    # Vercel deployment config
├── .env                           # Environment variables (not committed)
│
└── src/
    ├── server.ts                  # MongoDB connection and server bootstrap
    ├── app.ts                     # Express app setup and route mounting
    │
    └── app/
        ├── controllers/           # Route handlers — book.controller, borrow.controller
        ├── interfaces/            # TypeScript interfaces — book.interface, borrow.interface
        ├── models/                # Mongoose schemas, static methods, and middleware
        ├── middlewares/           # Global error handler and route-not-found handler
        └── zodSchemas/            # Zod validation schemas — book.zod, borrow.zod
```

<br/>

## 🚀 Getting Started

### Prerequisites

<table align="center">
<thead>
<tr><th align="left">Requirement</th><th align="left">Details</th></tr>
</thead>
<tbody>
<tr><td><b>Node.js</b></td><td>v18 or higher recommended</td></tr>
<tr><td><b>npm</b></td><td>Comes bundled with Node.js</td></tr>
<tr><td><b>MongoDB Atlas</b></td><td>Cloud database account (or local MongoDB instance)</td></tr>
</tbody>
</table>

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/zahid-official/milestone-15.git

# 2. Navigate to the project directory
cd milestone-15

# 3. Install dependencies
npm install

# 4. Set up environment variables (see section below)

# 5. Start the development server
npm run dev
```

The server will start on `http://localhost:3000` by default.

<br/>

## 🔑 Environment Variables

Create a `.env` file in the project root with the following credentials:

```env
PORT=3000
DB_USER=your_mongodb_username
DB_PASSWORD=your_mongodb_password
DB_NAME=your_database_name
```

> **Note:** Never commit `.env` to version control. The `.gitIgnore` already excludes it.

<br/>

## 📜 Available Scripts

<table align="center">
<thead>
<tr><th align="left">Command</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><code>npm run dev</code></td><td>Start the dev server with <code>ts-node-dev</code> (auto-restart on changes)</td></tr>
<tr><td><code>npm test</code></td><td>Run the test suite (placeholder)</td></tr>
</tbody>
</table>

<br/>

## ⚙️ How It Works

<div align="center">
<pre>
Client sends request ──► Express Router matches endpoint
                                     │
                    ┌────────────────┘
                    ▼
          Zod validates request body
           ┌──── Pass ────┐
           ▼              ▼
        Valid          Invalid
           │              │
           ▼              ▼
     Controller       Return 400
     executes         Validation Error
           │
           ▼
   Mongoose Model ──► MongoDB
   (Static methods,
    Pre-save hooks)
           │
           ▼
   Return JSON response
   { success, message, data }
</pre>
</div>

1. **Request Arrives** — The client hits an endpoint like `POST /api/books` or `POST /api/borrow`.
2. **Validation Gate** — Zod schemas validate the incoming request body, rejecting malformed data with descriptive errors.
3. **Controller Logic** — The matched controller processes the request using Mongoose models and static methods.
4. **Business Rules** — Pre-save middleware auto-toggles book `available` status; the `borrowBook()` static method enforces copy limits.
5. **Aggregation** — The borrow summary endpoint uses `$group`, `$lookup`, `$unwind`, and `$project` stages for a clean report.
6. **Response** — All responses follow a consistent `{ success, message, data }` JSON structure.

<br/>

## 📡 API Reference

### Base URL

```
http://localhost:3000/api
```

### Books Endpoints

<table align="center">
<thead>
<tr><th align="left">Method</th><th align="left">Endpoint</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><code>GET</code></td><td><code>/api/books</code></td><td>Get all books (supports <code>filter</code>, <code>sort</code>, <code>sortBy</code>, <code>limit</code>)</td></tr>
<tr><td><code>GET</code></td><td><code>/api/books/:bookId</code></td><td>Get a single book by ID</td></tr>
<tr><td><code>POST</code></td><td><code>/api/books</code></td><td>Create a new book</td></tr>
<tr><td><code>PUT</code></td><td><code>/api/books/:bookId</code></td><td>Update a book by ID</td></tr>
<tr><td><code>DELETE</code></td><td><code>/api/books/:bookId</code></td><td>Delete a book by ID</td></tr>
</tbody>
</table>

### Borrow Endpoints

<table align="center">
<thead>
<tr><th align="left">Method</th><th align="left">Endpoint</th><th align="left">Description</th></tr>
</thead>
<tbody>
<tr><td><code>GET</code></td><td><code>/api/borrow</code></td><td>Get borrowed books summary (aggregation pipeline)</td></tr>
<tr><td><code>POST</code></td><td><code>/api/borrow</code></td><td>Borrow a book (deducts copies, enforces availability)</td></tr>
</tbody>
</table>

### Request & Response Format

All responses follow this structure:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

Error responses include additional context:

```json
{
  "success": false,
  "message": "Error message",
  "error": {
    "name": "ErrorName",
    "description": "Detailed error description"
  }
}
```

<br/>

## 🌟 Author

<div align="center">
  <a href="https://github.com/zahid-official">
    <img src="https://github.com/zahid-official.png" width="100" height="100" style="border-radius: 50%;" alt="Zahid Official" />
  </a>

  <h3>Zahid Official</h3>
  <p><b>Web Developer | Tech Enthusiast</b></p>

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zahid-official)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/zahid-web)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:zahid.official8@gmail.com)

  <p>Creating impactful digital experiences with passion and purposeful design</p>
</div>

<br/>

## 🤝 Contributing

Contributions are welcome and appreciated! Here's how you can help improve **Library Management API**:

```bash
# 1. Fork the repository

# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes and commit
git commit -m "feat: add your feature description"

# 4. Push to your fork
git push origin feature/your-feature-name

# 5. Open a Pull Request against the main branch
```

<p align="center"><b>Library Management API</b> — <i>Where every book finds its reader, and every reader finds their book.</i></p>