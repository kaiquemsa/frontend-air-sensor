import axios from 'axios';
import { enviroment } from '../env/enviroment';

const API_URL = enviroment.baseURL;

const setUser = async (forms:any) => {
  try {
    const response = await axios.post(`${API_URL}/user`, forms);
    return response.data;
  } catch (error) {
    console.error('Error fetching predictions:', error);
    throw error;
  }
};

export default {
    setUser,
};
