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

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Docker (optional, for containerized setup)

### Manual Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Blog-App-using-MERN-stack.git
   cd Blog-App-using-MERN-stack
   ```

2. **Install dependencies**

   **Backend:**
   ```bash
   cd server
   npm install
   ```

   **Frontend:**
   ```bash
   cd ../client
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the `server` directory:
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/BlogApp
   PORT=5001
   ```

4. **Start MongoDB**

   Make sure MongoDB is running locally, or update `MONGO_URI` for MongoDB Atlas.

5. **Start the servers**

   **Backend:**
   ```bash
   cd server
   npm start
   ```

   **Frontend:**
   ```bash
   cd client
   npm start
   ```

6. **Access the application**

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Setup

1. **Ensure Docker is installed and running**

2. **Build and run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

3. **Access the application**

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Stop the containers**
   ```bash
   docker-compose down
   ```

## 🔧 Available Scripts

### Client
- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

### Server
- `npm start` - Start server with nodemon
- `npm test` - Run tests

## 📱 Screenshots

![Screenshot 1](https://user-images.githubusercontent.com/67452985/172217325-4378400e-60a0-4364-aadb-89e900886a1c.png)

![Screenshot 2](https://user-images.githubusercontent.com/67452985/172217368-76264e6e-8373-484d-9cd0-3af5920754b1.png)

![Screenshot 3](https://user-images.githubusercontent.com/67452985/172217649-238abde0-1b29-40fe-a46e-1b5bb03678c8.png)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

6. Start the backend server:

```bash
cd server && npm start
```

7. Start the frontend application:

```bash
cd client && npm start
```


8. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).


## Using Docker

1. Docker should be set up and installed.


2. Run the following command from the root of your project:

```bash
docker-compose up --build
```

3. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).


4. Stop the containers:

```bash
docker-compose down
```
