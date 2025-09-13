import axios from 'axios';
import { API_BASE_URL, API_ENDPOINTS } from '../api/config';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userProfileService = {
  async createProfile(profileData) {
    try {
      const response = await api.put(API_ENDPOINTS.USER_PROFILES, profileData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  async getProfiles() {
    try {
      const response = await api.get(API_ENDPOINTS.USER_PROFILES);
      return response.data.data || response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  async getProfileById(id) {
    try {
      const response = await api.get(API_ENDPOINTS.USER_PROFILE_BY_ID(id));
      return response.data.data || response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  async deleteProfile(id) {
    try {
      const response = await api.delete(API_ENDPOINTS.USER_PROFILE_BY_ID(id));
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};

export default userProfileService;