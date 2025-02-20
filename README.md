🎵 Indie Music Platform - Backend
📌 Overview

This is the backend for Indie Music Platform, a music streaming service exclusively for indie artists. The backend is built using Node.js, Express.js, and MongoDB, with Cloudinary for media storage.
🚀 Features

    User Authentication (Signup/Login with JWT)
    Song Uploading (Multer + Cloudinary)
    Streaming Songs
    Secure Routes with JWT Middleware

🛠️ Tech Stack

    Node.js
    Express.js
    MongoDB (Mongoose)
    Cloudinary (for storing songs)
    JWT Authentication
    Multer (for file uploads)

📂 Project Structure

INDIE-MUSIC-PLATFORM/
│── config/
│   ├── cloudinaryConfig.js
│   ├── db.js
│── models/
│   ├── Song.js
│   ├── User.js
│── routes/
│   ├── authRoutes.js
│   ├── songRoutes.js
│── .env (Not included in repo)
│── .gitignore
│── server.js
│── package.json
│── README.md

🔧 Installation & Setup
1️⃣ Clone the Repository

git clone https://github.com/yourusername/INDIE-MUSIC-PLATFORM.git
cd INDIE-MUSIC-PLATFORM

2️⃣ Install Dependencies

npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory and add the following:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

4️⃣ Start the Server

nodemon server.js

The backend should now be running at http://localhost:5000/.
🔥 API Endpoints
🎵 Authentication

    POST /api/auth/signup → Register a new user
    POST /api/auth/login → Login a user

🎼 Songs

    POST /api/songs/upload → Upload a song
    GET /api/songs/stream/:id → Stream a song


