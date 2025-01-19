import axios from "axios"

const BASE_URL_CART = `${import.meta.env.VITE_API_BASE_URL}/shop-cart`

const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem('token'),
            "Content-type": 'multipart/form-data',
        }
    }
}

//COMUNICACIÓN CON EL BACKEND

export const saveCartItem = async(formData) => {
    console.log('control de services ' +`${BASE_URL_CART}`);

    try {
        const response = await axios.post(BASE_URL_CART, formData, config());
        return response;   
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const saveCartItemsList = async(formData) => {
    console.log('control de services ' +`${BASE_URL_CART}/add-cart-item`);

    try {
        const response = await axios.post(`${BASE_URL_CART}/add-cart-item`, formData, config());
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const findByIdUserCartItems = async(id) => {

    try {
        const response = await axios.get(`${BASE_URL_CART}/${id}`, config());
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const removeCartItem = async(id) => {
    // console.log('control de services ' +`${BASE_URL_FAVORITE}/add-favorites`)

    try {
        await axios.delete(`${BASE_URL_CART}/${id}`, config());
    } catch (error) {
        console.log(error);
        throw error;
    }
}