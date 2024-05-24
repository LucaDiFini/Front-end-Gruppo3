import axios from 'axios';

//API Register
export const registerUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:8080/auth/register', userData,
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

// API Login
export const loginUser = async (formData) => {
    try {
        console.log("ciao1");
        const response = await fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData).toString(), // Converti formData in una stringa nel formato corretto
        });
        console.log("fetch fatta");
        if (response.ok) {
            console.log("dentro response");
            const responseData = await response.json();
            if (Object.keys(responseData).length === 0) {
                //questo non è il problema
                console.log("dentro errore1");
                throw new Error('Risposta vuota ricevuta');
            }
            console.log("dentro response2 response:"+ responseData);
            return responseData;
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Errore durante il login');
        }
    } catch (error) {
        throw new Error('Errore di rete. Si prega di riprovare.');
    }
};
