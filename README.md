# JWT Authentication with React, Express, and MongoDB

A simple and secure authentication system that uses **JWT (JSON Web Tokens)** to protect routes in a **React** frontend with an **Express** backend and **MongoDB** database. Users can register, log in, access protected routes, and log out, with their session persisting across page reloads.

## Features

- **User Authentication**: Users can register and log in with a secure password.
- **JWT-Based Authorization**: Uses JSON Web Tokens to manage user sessions, allowing access to protected routes.
- **Protected Routes**: Only authenticated users can access specific pages like the dashboard.
- **Persistent Sessions**: Users remain logged in across page reloads until they explicitly log out.
- **Logout Functionality**: Users can easily log out, which clears their token and redirects them to the login page.
- **Responsive UI**: Built with React, ensuring a user-friendly experience across devices.

## Tech Stack

- **Frontend**: React, React Router
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **HTTP Client**: Axios

## Getting Started

Follow the instructions below to set up the project locally.

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- **MongoDB** server (local or cloud instance).

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/jwt-auth-react-express.git
    cd jwt-auth-react-express
    ```

2. **Set up the backend:**

    ```bash
    cd backend
    npm install
    ```

3. **Set up environment variables:** Create a `.env` file in the `backend` directory and add your MongoDB URI and JWT secret:

    ```env
    MONGODB_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret
    ```

4. **Start the backend server:**

    ```bash
    npm start
    ```

    The backend will run on `http://localhost:5000`.

5. **Set up the frontend:**

    ```bash
    cd ../frontend
    npm install
    ```

6. **Start the frontend server:**

    ```bash
    npm start
    ```

    The frontend will run on `http://localhost:3000`.

### API Endpoints

- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Log in a user and receive a JWT token.
- **GET** `/api/auth/dashboard`: Access the protected dashboard with a valid JWT token.

### Usage

- **Register** a new account on the registration page.
- **Log in** with your credentials. If successful, you will be redirected to the **dashboard**.
- If you **refresh** the page or **revisit** the website without logging out, you will remain authenticated and have access to the dashboard.
- Click **Logout** to end your session and be redirected to the login page.


## Contributing

Feel free to fork this project and submit pull requests. Contributions are welcome!

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- **React Router** for managing client-side routing.
- **Express** for a flexible backend.
- **jsonwebtoken** for generating and verifying tokens.
- **MongoDB** for storing user data.



