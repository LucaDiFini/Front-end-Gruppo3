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
export const loginUser = async (userData) => {
    console.log("ciao");
    try {
        console.log("Invio richiesta di login...");
        const response = await axios.post('http://localhost:8080/auth/login', userData, {
            withCredentials: true, // Includi i cookie nella richiesta
            headers: { 'Content-Type': 'application/json' }
        });
        

        // SERVIRA' PER SPOSTARE L'UTENTE SE IL LOGIN E' ANDATO A BUON FINE 
        const responseData = response.data;
        /*if (!responseData || Object.keys(responseData).length === 0) {
            console.error("Errore: Risposta vuota ricevuta");
            throw new Error('Risposta vuota ricevuta');
        }*/

        console.log("Login avvenuto con successo:", responseData+" ruolo:"+responseData.ruolo);
        return { token: responseData.token, role: responseData.ruolo };  

        //sposta     utente in un altra pagina

    } catch (error) {
        //errore1
        console.error("Errore durante il login:", error);
        throw error.response ? new Error(error.response.data.message || 'Errore durante il login') : new Error('Errore di rete. Si prega di riprovare.');
    }
};