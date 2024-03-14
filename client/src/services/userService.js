import axios from "axios"

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/users`

//COMUNICACION CON EL BACKEND

//Creamos un usuario
export const save = async ({name, lastname, email, password}) => {
    try {
        const response = await axios.post(BASE_URL, {
            name,
            lastname,
            email,
            password,
        });
        
    } catch (error) {
        console.error(error);
    }
}

//Traemos todos los usuarios
export const findAll = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.log(error);
    }
}