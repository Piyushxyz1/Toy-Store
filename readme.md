# Toy Store - MERN Stack 

A full-stack toy e-commerce application built with the MERN stack. The application allows users to browse toys, securely create an account, manage their cart, and place orders. It also includes Stripe test payment integration for a complete checkout experience.

## Features

- User registration and login
- JWT-based authentication
- Browse and search toys
- Add and remove items from the cart
- Update cart quantities
- Secure checkout with Stripe (Test Mode)
- Prices displayed in Indian Rupees (INR)
- Order placement and management
- Responsive user interface
- Admin panel for managing products and orders

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- bcrypt

### Payment
- Stripe (Test Mode)



## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/toy-store.git
cd toy-store
```

### Install dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

## Environment Variables

Create a `.env` file inside the server directory.

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
PORT=5000
```

## Running the Project

Start the backend

```bash
cd server
npm run server
```

Start the frontend

```bash
cd client
npm run dev
```

Frontend:

```
http://localhost:5173
```

Backend:

```
http://localhost:5000
```

## Authentication

Authentication is implemented using JSON Web Tokens (JWT). After logging in, a token is generated and used to protect routes such as the cart, checkout, and order history.

## Payments

The project integrates **Stripe Checkout in Test Mode**, allowing users to simulate payments using Stripe's test cards.

Although Stripe internally processes the payment amount in its supported currency, the application displays product prices in **Indian Rupees (INR)** by converting the original dollar values before presenting them to users, providing a localized shopping experience.


## What I Learned

- Building REST APIs with Express.js
- MongoDB data modeling with Mongoose
- JWT authentication and protected routes
- React state management and API integration
- Stripe payment gateway integration
- Currency conversion and displaying prices in INR
- Developing and connecting a complete MERN stack application

## Note

This project was built for learning and portfolio purposes.
