import axios from 'axios';
import { enviroment } from '../env/enviroment';

const API_URL = enviroment.baseURL;

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
