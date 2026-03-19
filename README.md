# Scalable REST API with Authentication

## 🚀 Features
- User Registration & Login (JWT)
- Role-Based Access (Admin/User)
- CRUD APIs (Tasks)
- Secure Password Hashing (bcrypt)
- API Versioning (/api/v1)
- Error Handling & Validation

## 🛠 Tech Stack
- Node.js, Express.js
- MongoDB (Mongoose)
- JWT Authentication
- React.js (Frontend)

## 📦 Installation

### Backend
cd backend
npm install
npm run dev

### Frontend
cd frontend
npm install
npm start

## 🔐 API Endpoints

### Auth
POST /api/v1/auth/register  
POST /api/v1/auth/login  

### Tasks
GET /api/v1/tasks  
POST /api/v1/tasks  
DELETE /api/v1/tasks/:id  

## 📄 API Docs
(Postman Collection Link Here)

## ⚡ Scalability
- Modular architecture
- Can scale to microservices
- Redis caching can be added
- Load balancer supported
