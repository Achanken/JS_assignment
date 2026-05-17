# The Global Kitchen API

A RESTful backend API for managing recipes in a digital cookbook.

## Tech Stack
- Runtime: Node.js
- Framework: Express
- Database: MongoDB with Mongoose
- Configuration: dotenv

## Features
- Create, read, update, and delete recipes
- Filter recipes by category
- Layered architecture with routes, controllers, services, and models
- Schema validation and indexing for performant lookups
- Global error handling

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone [your-repo-url]
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the project root and add:
   ```env
   PORT=3000
   MONGODB_URI=your-mongodb-connection-string
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints
- `GET /recipes` - Retrieve all recipes. Supports optional query `?category=...`
- `POST /recipes` - Create a new recipe
- `PATCH /recipes/:id` - Update specific fields on an existing recipe
- `DELETE /recipes/:id` - Remove a recipe

## Notes
- Do not commit `.env` or `node_modules`
- Use MongoDB Atlas or local MongoDB
- All database operations are performed asynchronously with `async/await`
