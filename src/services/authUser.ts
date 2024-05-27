import axios from 'axios';

const API_URL = 'http://localhost:8000';

const authUser = async (forms:any) => {
  try {
    const response = await axios.post(`${API_URL}/authUser`, forms);
    return response.data;
  } catch (error) {
    console.error('Error fetching predictions:', error);
    throw error;
  }
};

export default {
  authUser,
};
