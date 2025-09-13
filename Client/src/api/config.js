export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://algooceantask-backend.onrender.com/api';

export const API_ENDPOINTS = {
  USER_PROFILES: '/user-profiles',
  USER_PROFILE_BY_ID: (id) => `/user-profiles/${id}`,
  HEALTH_CHECK: '/health'
};
