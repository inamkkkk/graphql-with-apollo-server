# GraphQL with Apollo Server

This project demonstrates a GraphQL API built with Apollo Server. It includes authentication with JWT and a simple database integration (using an in-memory array for simplicity).

## Project Structure


├── README.md
├── server.js
├── routes
│   └── auth.js
├── controllers
│   └── authController.js
├── models
│   └── userModel.js
├── middlewares
│   └── authMiddleware.js
├── utils
│   └── jwt.js


## Running the Application

1.  Install dependencies: `npm install`
2.  Start the server: `npm start`

The GraphQL playground will be available at `http://localhost:4000`.

## Authentication

The API includes endpoints for:

*   `signup`: Creates a new user.
*   `login`: Authenticates a user and returns a JWT.

The JWT is required for accessing protected resources.
