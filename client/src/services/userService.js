import axios from "axios"

const BASE_URL_USER = `${import.meta.env.VITE_API_BASE_URL}/users`

const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-type": "application/json",
        }
    }
}

//COMUNICACION CON EL BACKEND

//Creamos un usuario
export const save = async ({name, lastname, email, password}) => {
    try {
        return await axios.post(BASE_URL_USER,{
            name,
            lastname,
            email,
            password,
        },config());
        
    } catch (error) {
        console.error(error);
    }
}

//Traemos todos los usuarios
export const findAll = async () => {
    try {
        const response = await axios.get(BASE_URL_USER);
        return response;
    } catch (error) {
        console.log(error);
    }
}

//Actualizamos un usuario
export const update = async ({id, name, lastname, email}) => {
    console.log("url ", `${BASE_URL_USER}/${id}`);
    console.log("url ", name, lastname, email);
    console.log("url ", config());

    try {
        return await axios.put(`${BASE_URL_USER}/${id}`,{
            name,
            lastname,
            email,
        },config());

    } catch (error) {
        console.log(error);
    }
}

//Eliminar un usuario
export const remove = async (id) => {
    console.log("controlll ", id);
    try {
        axios.delete(`${BASE_URL_USER}/${id}`,config());
    } catch (error) {
        console.log(error);
    }
}