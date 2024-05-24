import axios from 'axios';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:8080/auth/register', userData , 
        {
            credentials: 'include',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
};

/* export const loginUser = async (credentials) => {
    try {
        const response = await axios.post('http://localhost:8080/auth/login', credentials);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
}; */