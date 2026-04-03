# Blog App using MERN Stack

A full-stack blog application built with the MERN (MongoDB, Express.js, React, Node.js) stack. This application allows users to create, read, update, and delete blog posts with user authentication.

## 🚀 Features

- **User Authentication**: Secure signup and login functionality
- **CRUD Operations**: Create, read, update, and delete blog posts
- **User Dashboard**: View and manage your own blogs
- **Public Blog Viewing**: Browse blogs from all users
- **Responsive Design**: Mobile-friendly interface using Material-UI
- **Docker Support**: Easy deployment with Docker Compose

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Redux Toolkit** - State management
- **Material-UI (MUI)** - Component library
- **React Router** - Client-side routing
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📁 Project Structure

```
Blog-App-MERN/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── store/          # Redux store
│   │   ├── utils/          # Utility functions
│   │   └── ...
│   ├── Dockerfile
│   └── package.json
├── server/                 # Node.js backend
│   ├── config/             # Database configuration
│   ├── controller/         # Route controllers
│   ├── model/              # Mongoose models
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yaml     # Docker Compose configuration
└── README.md
```

## 🔌 API Endpoints

### User Routes (`/api/users`)
- `GET /` - Get all users
- `POST /signup` - User registration
- `POST /login` - User login

### Blog Routes (`/api/blogs`)
- `GET /` - Get all blogs
- `POST /add` - Create a new blog
- `PUT /update/:id` - Update a blog
- `GET /:id` - Get blog by ID
- `DELETE /:id` - Delete a blog
- `GET /user/:id` - Get blogs by user ID


## 📱 Screenshots

## 📸 App Preview
![MERN Blog Demo](https://github.com/Kavipriya-Ramanathan/blog-app/blob/main/demo.gif?raw=true)


