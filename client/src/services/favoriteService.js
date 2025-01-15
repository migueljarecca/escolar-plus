import axios, { Axios } from "axios"


const BASE_URL_FAVORITE = `${import.meta.env.VITE_API_BASE_URL}/favorites`

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
export const saveWishlist = async(formData) => {
    
    // for (let pair of formData.entries()) {
    //     if (!pair[1]) {
    //         console.error(`Error: ${pair[0]} está vacío o indefinido`);
    //     }
    //     console.log(`${pair[0]}: ${pair[1]}`);
    // }

      // Verifica la URL
    // console.log('URL:', BASE_URL_FAVORITE);

    try {
        const response = await axios.post(BASE_URL_FAVORITE, formData, config());
        return response;
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}

//tramemos los uniformes favoritos por el id de usuario
export const findByIdUserFavorites = async(id) => {
    console.log('control de services id ' +`${BASE_URL_FAVORITE}/by-user/${id}`)

    try {
        const response = await axios.get(`${BASE_URL_FAVORITE}/by-user/${id}`, config());

        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

//eliminamos un uniforme por id
export const removeFavorite = async(id) => {

    try {
        await axios.delete(`${BASE_URL_FAVORITE}/${id}`, config());
    } catch (error) {
        throw error;
    }
}
