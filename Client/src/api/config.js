// Use production URL by default, development URL only in dev mode
export const API_BASE_URL = import.meta.env.VITE_API_URL ||
  (import.meta.env.MODE === 'development'
    ? 'http://localhost:5000/api'
    : 'https://algooceantask-backend-production.up.railway.app/api');

// Debug logging
console.log('Environment mode:', import.meta.env.MODE);
console.log('VITE_API_URL from env:', import.meta.env.VITE_API_URL);
console.log('Final API_BASE_URL:', API_BASE_URL);

export const API_ENDPOINTS = {
  USER_PROFILES: '/user-profiles',
  USER_PROFILE_BY_ID: (id) => `/user-profiles/${id}`,
  HEALTH_CHECK: '/health'
};