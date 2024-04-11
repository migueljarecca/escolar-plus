
import { axios } from 'axios';

const BASE_URL_UNIFORM = `${import.meta.env.VITE_API_BASE_URL}/uniforms`

//COMUNICACION CON EL BACKEND

//Creamos un uniforme
export const create = async(formData) => {

    try {
        const response = await axios.post(BASE_URL_UNIFORM, formData);
        return response;
        
    } catch (error) {
        console.error(error)
    }
}

export const findAll = async() => {

    try {
        const response =  await axios.get(BASE_URL_UNIFORM);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const update = async(formData, id) => {

    try {
        const response = await axios.put(`${BASE_URL_UNIFORM}/${id}`, formData);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const remove = async(id) => {

    try {
        const response = await axios.delete(`${BASE_URL_UNIFORM}/${id}`);
    } catch (error) {
        console.error(error);
    }
}

 

