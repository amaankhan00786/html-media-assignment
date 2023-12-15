# User Authentication System

Welcome to the User Authentication System project! This repository contains the code for a simple user registration and login system built using Node.js, Express, and MongoDB.


## Technologies Used

### Backend

The backend of this project is built using the following technologies:

- Node.js: JavaScript runtime used for building server-side applications.
- Express: Web application framework for Node.js that simplifies routing and middleware.
- MongoDB: NoSQL database used to store user data securely.
- Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
- Bcrypt: Library for hashing and salting passwords.
- JSON Web Tokens (JWT): Used for generating and verifying authentication tokens.
- dotenv: Module for loading environment variables from a .env file.

### Frontend

The frontend of this project is built using the following technologies:

- HTML: Markup language for structuring the web content.
- CSS: Stylesheet language for styling the web content.
- JavaScript: Programming language for adding interactivity and logic.
- Axios: Promise-based HTTP client for making requests to the backend server.


## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Features](#features)
  - [Signup Page](#signup-page)
  - [Login Page](#login-page)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Before running the project, make sure you have the following installed on your system:

- Node.js (v18.17.0 or compatible)
- MongoDB

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Rishabh6306/Assignments/tree/master/3-July%20Auth%20with%20Express%20Assignment ```

2. Navigate to the project directory:
    cd user-authentication-system

3. Install the required dependencies:
   npm install 

4. Configuration
Rename the .env and fill in the necessary configuration values:
PORT=8081
MONGODB_URI=your_mongodb_connection_string
SACRET_CODE=SACRET_CODE
Replace your_mongodb_connection_string with your actual MongoDB connection string.

5. Running the Application
Start the server:  
npm run start or nodemon start


6. The application will run at http://localhost:8081. You can access it using your web browser.


### Features
## Signup Page
The signup page allows users to create a new account by providing their name, email, and password. It validates the user's input and stores the encrypted password in the database.


## Login Page
The login page allows registered users to log in using their email and password. It validates the user's input, compares the encrypted passwords, and provides access to the user's dashboard upon successful login.

## Contributing
Contributions are welcome! If you find any issues or want to enhance the project, feel free to open a pull request.
