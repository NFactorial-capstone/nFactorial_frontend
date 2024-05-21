import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://52.68.188.192:8080/backend/',
    timeout: 1000,
  });
  

export const storeData = async () => {
        try {
            const response = await axios.post('http://52.68.188.192:8080/backend/exercise/search');
            const nameList = response.data.map(item => item.name);
            console.log(nameList);
        } catch (error) {
            console.error('Error posting data:', error);
        }
};

export const postData = async (endpoint, data) => {
    try {
      const response = await apiClient.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error('An error occurred:', error);
      throw error;
    }
  };




