import axios from 'axios';

const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random';

export const dogApiService = {
  async getRandomDogImage() {
    try {
      const response = await axios.get(DOG_API_URL);
      return response.data.message;
    } catch (error) {
      console.error('Error fetching dog image:', error);
      throw error;
    }
  }
};

export default dogApiService;