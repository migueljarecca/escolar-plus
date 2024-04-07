
import { axios } from 'axios';

const BASE_URL_UNIFORM = `${import.meta.env.VITE_API_BASE_URL}/uniform`

//COMUNICACION CON EL BACKEND

//Creamos un uniforme
export const create = (formData) => {

    try {
        const response = axios.post(BASE_URL_UNIFORM, formData)
        
    } catch (error) {
        console.error(error)
    }
}

