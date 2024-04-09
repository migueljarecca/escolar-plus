import axios from "axios"

const BASE_URL_SCHOOL = `${import.meta.env.VITE_API_BASE_URL}/school` 

//COMUNICACION CON EL BACKEND

//Creamos un colegio
export const save = async(formData) => {
    try {
        const response = await axios.post(BASE_URL_SCHOOL, formData);
        return response;  
    } catch (error) {
        console.log(error);
    }
}

//Traemos un Colegio desde la base de datos
export const findById = async(id) => {
    try {
        const response = await axios.get(`${BASE_URL_SCHOOL}/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const findAll = async() => {
    try {
        const response = await axios.get(BASE_URL_SCHOOL);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const update = async(formData, id) => {
    try {
        const response = await axios.put(`${BASE_URL_SCHOOL}/${id}`, formData);
        return response;
    } catch (error) {
        console.error(error);
        return { data: null }; // Devuelve algo para manejar los errores de manera
    }
}

export const remove = async(id) => {
    try {
        const response = await axios.delete(`${BASE_URL_SCHOOL}/${id}`);
    } catch (error) {
        console.log(error);
    }
}
