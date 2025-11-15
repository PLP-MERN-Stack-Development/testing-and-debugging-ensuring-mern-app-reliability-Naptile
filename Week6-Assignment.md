# MERN Bug Tracker - Testing and Debugging

This project is a **MERN stack application** for tracking bugs in a project, with a focus on **testing and debugging best practices**. Users can create, update, view, and delete bugs. The project includes comprehensive **unit, integration, and end-to-end testing**, along with debugging techniques.

---

## Table of Contents

- [Project Structure](#project-structure)  
- [Installation](#installation)  
- [Running the Application](#running-the-application)  
- [Testing](#testing)  
  - [Server Tests](#server-tests)  
  - [Client Tests](#client-tests)  
- [Debugging Techniques](#debugging-techniques)  
- [Error Handling](#error-handling)  
- [Testing Strategy](#testing-strategy)  
- [Screenshots](#screenshots)  

---

## Project Structure

mern-bug-tracker/
├── client/
│ ├── src/
│ │ ├── components/
│ │ └── tests/
├── server/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ └── middleware/
│ └── tests/
├── jest.config.js
└── package.json

yaml
Copy code

---

## Installation

1. Clone your repository:

```bash
git clone <your-repo-url>
cd mern-bug-tracker
Install dependencies for server:

bash
Copy code
cd server
npm install
Install dependencies for client:

bash
Copy code
cd ../client
npm install
Running the Application
Backend server and frontend client are separate.

Start the server:

bash
Copy code
cd server
npm start
Start the client (if React frontend is used):

bash
Copy code
cd client
npm start
Testing
Server Tests
Unit tests: Test individual functions and helpers.

Integration tests: Test API endpoints (POST, GET, PUT, DELETE) with Supertest and in-memory MongoDB.

Run server tests:

bash
Copy code
cd server
npm test
All integration tests for posts.test.js are passing.

Client Tests
Unit tests: Test React components with React Testing Library and Jest.

Example: Button component test covers rendering, variants, sizes, disabled state, click handler, and additional props.

Run client tests:

bash
Copy code
cd client
npm test
All Button component tests are passing.

Debugging Techniques
Server-side:

Console logs for tracking variables and API flow.

Node.js inspector for debugging server functions.

MongoDB Memory Server to isolate database issues during testing.

Client-side:

React Testing Library to check rendering and events.

Jest error messages for failing tests.

Console logs for component state debugging.

Error Handling
Backend: Express middleware handles errors and returns proper HTTP status codes (400, 401, 403, 404).

Frontend: React error boundaries catch component crashes and display fallback UI.

Testing Strategy
Unit Tests: Verify individual functions or components work as expected.

Integration Tests: Verify interactions between components or API endpoints.

End-to-End Tests (optional): Simulate user workflows like creating, updating, and deleting bugs.



Server tests:


