
import axios from 'axios';

export const authService = async({email, password}) => {
    console.log('control del envio desde front email ' +email);
    console.log('control del envio desde front password ' +password);


    try {
        return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/login`, {
            email,
            password,
        });
    } catch (error) {
        throw(error);
    }
}