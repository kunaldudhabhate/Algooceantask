# DogProfile Manager - Full Stack Application

A modern full-stack web application for creating and managing user profiles with random dog images. Built with React, Node.js, Express, and MongoDB.

## 🚀 Live Demo

### 🌐 Frontend (GitHub Pages)
**[🔗 View Live Application](https://kunaldudhabhate.github.io/Algooceantask/)**

### 🖥️ Backend API (Railway)
**[🔗 API Base URL](https://algooceantask-backend-production.up.railway.app/api)**
- Health Check: [/api/health](https://algooceantask-backend-production.up.railway.app/api/health)
- User Profiles: [/api/user-profiles](https://algooceantask-backend-production.up.railway.app/api/user-profiles)

### 🚀 One-Click Backend Deployment
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/eJu5hE?referralCode=kunaldudhabhate)

## 📋 Features

- **Profile Creation**: Create user profiles with personal information
- **Random Dog Images**: Automatically fetch and assign random dog images to profiles
- **Age Calculation**: Automatic age calculation from date of birth
- **Beautiful UI**: Modern gradient design with smooth animations
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Data Persistence**: All profiles stored in MongoDB database

## 🏗️ Project Structure

```
Agloocean-Task/
├── Client/                 # Frontend React application
│   ├── src/
│   │   ├── api/           # API configuration
│   │   ├── components/    # React components
│   │   ├── services/      # API service layer
│   │   └── styles/        # CSS files
│   └── package.json
├── Server/                 # Backend Node.js API
│   ├── config/            # Database configuration
│   ├── controllers/       # Business logic
│   ├── middlewares/       # Custom middleware
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API routes
│   └── utils/             # Utility functions
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- ES6 Modules

### External APIs
- Dog CEO API for random dog images

## 📦 Installation & Setup

### Prerequisites
- Node.js (v20+ recommended)
- MongoDB (local or cloud)
- Git

### Backend Setup
```bash
cd Server
npm install
cp .env.example .env
# Configure your MongoDB URI in .env
npm start
```

### Frontend Setup
```bash
cd Client
npm install
cp .env.example .env
# Configure API URL in .env if needed
npm run dev
```

## 🎯 API Endpoints

### User Profiles
- `GET /api/user-profiles` - Get all profiles
- `PUT /api/user-profiles` - Create new profile
- `GET /api/user-profiles/:id` - Get profile by ID
- `DELETE /api/user-profiles/:id` - Delete profile

### Health Check
- `GET /api/health` - Check server status

## 🚀 Deployment

### Backend Deployment (Railway)
1. Click the "Deploy on Railway" button above
2. Connect your GitHub repository
3. Railway will automatically:
   - Detect the Node.js project
   - Install dependencies
   - Create a MongoDB database
   - Deploy your backend
4. Copy the generated URL and update frontend config if needed

### Frontend Deployment (GitHub Pages)
- Automatically deploys via GitHub Actions on every push to `master`
- Live at: https://kunaldudhabhate.github.io/Algooceantask/

## 💻 Development

### Running Locally
1. Start MongoDB service
2. Run backend: `cd Server && npm run dev`
3. Run frontend: `cd Client && npm run dev`
4. Open http://localhost:5173

### Building for Production
```bash
cd Client
npm run build
```

## 🎨 UI Features

- **Gradient Color Scheme**: Modern blue-to-purple gradient design
- **Smooth Animations**: Hover effects and transitions
- **Card-based Layout**: Clean profile cards with hover effects
- **Responsive Grid**: Adaptive layout for different screen sizes
- **Loading States**: Beautiful loading and empty states

## 🌟 Key Highlights

- **Professional Architecture**: MVC pattern with separated concerns
- **Modern UI/UX**: Beautiful gradient design with smooth animations
- **Age Calculation**: Automatic age computation from date of birth
- **Error Handling**: Comprehensive error handling throughout the application
- **Clean Date Format**: Stores dates in YYYY-MM-DD format
- **API Documentation**: Well-documented RESTful API endpoints

## 👤 Author

**Kunal Dudhabhate**
- GitHub: [@kunaldudhabhate](https://github.com/kunaldudhabhate)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

🐕 **Made with ❤️ and lots of dog pictures!**