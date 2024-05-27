import axios from 'axios';

const API_URL = 'http://localhost:8000';

const getAllSensors = async () => {
  try {
    const response = await axios.get(`${API_URL}/sensor`);
    return response.data;
  } catch (error) {
    console.error('Error fetching predictions:', error);
    throw error;
  }
};

export default {
  getAllSensors,
};
