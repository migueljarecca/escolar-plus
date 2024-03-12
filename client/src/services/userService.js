import axios from "axios"

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/users`
console.log("base ", BASE_URL);

//COMUNICACION CON EL BACKEND
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