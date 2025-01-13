
import axios from 'axios';

const BASE_URL_UNIFORM = `${import.meta.env.VITE_API_BASE_URL}/uniforms`

const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-type": 'multipart/form-data',
        }
    }
}

//COMUNICACION CON EL BACKEND

//Creamos un uniforme
export const create = async(formData) => {

    try {
        const response = await axios.post(BASE_URL_UNIFORM, formData, config());
        return response;
        
    } catch (error) {
        console.error(error)
        throw error;
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
        const response = await axios.put(`${BASE_URL_UNIFORM}/${id}`, formData, config());
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const remove = async(id) => {

    try {
        const response = await axios.delete(`${BASE_URL_UNIFORM}/${id}`,config());
    } catch (error) {
        console.log(error);
    }
}

export const getUniformBySchoolId = async(id) => {

    try {
        const response = await axios.get(`${BASE_URL_UNIFORM}/by-school/${id}`);
        return response;
    } catch (error) {
        console.console.error(error);
    }
}

 

