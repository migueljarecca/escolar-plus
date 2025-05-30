import axios from "axios"

const BASE_URL_SCHOOL = `${import.meta.env.VITE_API_BASE_URL}/schools`

const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-type": 'multipart/form-data',
        }
    }
}

//COMUNICACION CON EL BACKEND

//Creamos un colegio
export const save = async(formData) => {

    try {
        const response = await axios.post(BASE_URL_SCHOOL, formData, config());
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

    // for (let pair of formData.entries()) {
    //     console.log(`${pair[0]}: ${pair[1]}`);
    // }
    try {
        const response = await axios.put(`${BASE_URL_SCHOOL}/${id}`, formData, config());
        return response;
    } catch (error) {
        console.error(error);
    }
}

export const remove = async(id) => {
    try {
        const response = await axios.delete(`${BASE_URL_SCHOOL}/${id}`,config());
    } catch (error) {
        console.log(error);
    }
}
