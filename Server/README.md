# DogProfile Manager - Backend API

## Description
RESTful API server for managing user profiles with random dog images. Built with Node.js, Express, and MongoDB.

## Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- ES6 Modules

## Project Structure
```
Server/
├── app.js              # Express app configuration
├── server.js           # Server entry point
├── config/
│   └── database.js     # MongoDB connection setup
├── controllers/
│   └── userProfileController.js  # Business logic for user profiles
├── middlewares/
│   ├── corsMiddleware.js  # CORS configuration
│   └── errorHandler.js    # Global error handling
├── models/
│   └── UserProfile.js  # User profile schema
├── routes/
│   └── userProfileRoutes.js  # API route definitions
└── utils/
    └── dateHelpers.js  # Utility functions for date operations
```

## API Endpoints

### Health Check
- `GET /api/health` - Check server status

### User Profiles
- `GET /api/user-profiles` - Get all user profiles
- `PUT /api/user-profiles` - Create a new user profile
- `GET /api/user-profiles/:id` - Get profile by ID
- `DELETE /api/user-profiles/:id` - Delete profile by ID

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

3. Configure your MongoDB connection in `.env`

## Scripts

- `npm start` - Start the production server
- `npm run dev` - Start development server with nodemon

## Environment Variables

- `NODE_ENV` - Environment (development/production)
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string

## Data Model

### UserProfile Schema
```javascript
{
  firstName: String (required),
  lastName: String (required),
  dateOfBirth: Date (required),
  age: Number (calculated automatically),
  dogImage: String (required),
  timestamps: true
}
```

## Error Handling
The API uses a centralized error handling middleware that catches and formats errors consistently.