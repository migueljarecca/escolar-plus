import axios, { Axios } from "axios"


const BASE_URL_FAVORITE = `${import.meta.env.BASE_URL_FAVORITE}/favorites`

const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-type": 'multipart/form-data',
        }
    }
}
// COMUNICACIÓN CON EL BACKEND

//creamos un uniforme favorito
export const save = async(formData) => {
    
    try {
        const response = await axios.post(BASE_URL_FAVORITE, formData, config());
        return response;
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}

//tramemos los uniformes favoritos por el id de usuario
export const findByIdUser = async(id) => {
    try {
        const response = await axios.get(`${BASE_URL_FAVORITE}/by-user/${id}`, config());
        return response;
    } catch (error) {
        throw error;
    }
}

//eliminamos un uniforme por id
export const remove = async(id) => {

    try {
        await axios.delete(`${BASE_URL_FAVORITE}/${id}`, config());
    } catch (error) {
        throw error;
    }
}
