import axios from "axios"

const BASE_URL_SCHOOL = `${import.meta.env.VITE_API_BASE_URL}/school` 
import { update } from './userService';

//COMUNICACION CON EL BACKEND

//Creamos un usuario
export const save = async({name, address, schoolCode}) => {
    try {
        const response = await axios.post(BASE_URL_SCHOOL,{
            name,
            address,
            schoolCode
        });
    } catch (error) {
        console.log(error);
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

export const update = async({id, name, address, schoolCode}) => {
    try {
        const response = await axios.put(`${BASE_URL_SCHOOL}/${id}`,{
            name,
            address,
            schoolCode,
        });
    } catch (error) {
        console.log(error);
    }
}

export const remove = async(id) => {
    try {
        const response = await axios.delete(`${BASE_URL_SCHOOL}/${id}`);
    } catch (error) {
        console.log(error);
    }
}
