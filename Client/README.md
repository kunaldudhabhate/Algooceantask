# DogProfile Manager - Frontend

## Description
Modern React application for creating and managing user profiles with random dog images. Features a beautiful, responsive UI with gradient designs and smooth animations.

## Tech Stack
- React 19
- Vite
- Tailwind CSS
- Axios
- ES6+ JavaScript

## Project Structure
```
Client/
├── src/
│   ├── api/
│   │   └── config.js           # API configuration and endpoints
│   ├── components/
│   │   ├── Form.jsx            # Profile creation form
│   │   └── Profile.jsx         # Profile gallery display
│   ├── services/
│   │   ├── userProfileService.js  # User profile API calls
│   │   └── dogApiService.js       # Dog API integration
│   ├── styles/
│   │   ├── App.css             # App-specific styles
│   │   └── index.css           # Global styles
│   ├── App.jsx                 # Main app component
│   └── main.jsx               # Application entry point
├── public/                     # Static assets
└── vite.config.js             # Vite configuration
```

## Features

### Form Component
- Clean, modern form design with gradient styling
- Input validation
- Icon-enhanced input fields
- Automatic dog image fetching from Dog CEO API
- Form reset after successful submission

### Profile Component
- Beautiful card grid layout
- Hover animations and effects
- Age badge overlay
- Responsive design (1-4 columns based on screen size)
- Empty state handling
- Refresh functionality

### Navigation
- Sticky header with backdrop blur
- Smooth toggle between views
- Gradient button styling
- App branding and logo

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env` file in the root directory:
```
VITE_API_URL=http://localhost:5000/api
```

## API Integration

The app integrates with two APIs:
1. **Backend API** - For user profile CRUD operations
2. **Dog CEO API** - For fetching random dog images

## Styling Features

- Gradient color scheme (blue to purple)
- Smooth hover animations
- Card-based layouts
- Responsive design
- Loading and error states
- Animated background blobs

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled