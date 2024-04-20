

# Authentication System

This project is a full-stack authentication system implemented using Node.js, Express.js, MongoDB, React, and various other libraries and frameworks.

## Features

- **User Registration**: Users can register with unique usernames and email addresses. Passwords are securely hashed using bcrypt before being stored in the database.
  
- **User Login**: Registered users can log in using their email and password. Passwords are compared against the hashed version stored in the database to authenticate users.

- **User Listing**: An admin or authenticated user with appropriate privileges can list all registered users.

- **Forgot Password**: Users can request a password reset by providing their email address. A reset link is sent to the user's email, allowing them to set a new password.

- **Reset Password**: Users can reset their password by following the link sent to their email and providing a new password.

## Technologies Used

### Backend
- **Node.js**: Runtime environment for server-side code.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing user information.
- **bcrypt**: Library for hashing passwords securely.
- **nodemailer**: Library for sending emails for password reset functionality.
- **dotenv**: Module for loading environment variables from a .env file.

### Frontend
- **React**: JavaScript library for building user interfaces.
- **Formik**: Library for building forms in React with validation.
- **Yup**: Library for schema validation used with Formik.
- **React Router**: Library for routing in a React application.
- **axios**: Library for making HTTP requests from the browser.

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/shimamuzavvir/Password-Reset-Node-4-backend
   ```
2. Install dependencies for both backend and frontend:
   ```bash
   cd authentication-system
   cd backend && npm install
   cd ../frontend && npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the `backend` directory and define the following variables:
     ```
     PORT=4000
     MONGODBCONNECTIONSTRING=your-mongodb-connection-string
     EmailAppCode=your-email-app-code
     EmailId=your-email-id
     Reset_Link=https://reset-password-frontend-shima.netlify.app/resetpassword
     ```
4. Start the backend server:
   ```bash
   cd ../backend
   npm start
   ```
5. Start the frontend development server:
   ```bash
   cd ../frontend
   npm start
   ```
6. Access the application in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to help improve this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

