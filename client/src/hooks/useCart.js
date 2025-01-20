import { useDispatch, useSelector } from "react-redux"
import { addToCart, calculateTotal, clearCart, loadingToCart, removeCart, updateDecreaseQuantity, updateIncreaseQuantity } from "../store/slices/cart/cartSlice";
import { findByIdUserCartItems, removeCartItem, saveCartItem, saveCartItemsList } from "../services/cartItemServie";

export const useCart = () => {

    const { cart } = useSelector(state => state.cart);
    const { priceTotal } = useSelector(state => state.cart);

    // console.log('Cart data: ' ,cart);
    const dispatch = useDispatch();

    const getCartItems = async(id) => {

        try {
            const response = await findByIdUserCartItems(id);

            const formattedResult = Object.values(response.data || {});

            //Mesclar las listas de favoritos eliminando duplicados
            const merged = [
                ...cart,
                ...formattedResult.filter(
                    (backendItem) => !cart.some((localItem) => localItem.id == backendItem.id)
                )
            ]
            
            //Actualizar el estado si hay cambios
            if (JSON.stringify(cart) !== JSON.stringify(merged)) {
                dispatch(loadingToCart(merged));
            }

            console.log('Lista actual:', cart);
            console.log('Datos del backend:', formattedResult);
            console.log('Lista combinada:', merged);

            //Filtramos los items locales que no estan en el backend
            const newItems = cart.filter(
                    (localItem) => !formattedResult.some((backendItem) => backendItem.id == localItem.id) 
            );
            
            //Insertamos los ítems locales en el backend
            if (newItems.length > 0) {
                await saveMissingItems(newItems, id);
            }

        } catch (error) {
            console.log(error);
            throw error;
        }

    }

    // Función auxiliar para guardar ítems que no están en el backend
    const saveMissingItems = async(items, id) => {

        const formData = new FormData();

        // Agregar cada objeto del array al FormData
        items.forEach((item, index) => {
            // Agregar campos simples
            formData.append(`cartItem[${index}].id`, item.id);
            formData.append(`cartItem[${index}].price`, item.price);
            formData.append(`cartItem[${index}].product`, item.product);
            formData.append(`cartItem[${index}].size`, item.size);
            formData.append(`cartItem[${index}].gender`, item.gender);
            formData.append(`cartItem[${index}].userId`, id);
            formData.append(`cartItem[${index}].schoolId`, item.schoolId);

            // Agregar archivo (convertir base64 a Blob si es necesario)
            const fileBlob = base64ToBlob(item.image.content, item.image.mime);
            const file = new File([fileBlob], item.image.name, { type: item.image.mime });
            formData.append(`cartItem[${index}].file`, file);
        });

        try {
            const response = await saveCartItemsList(formData); 
            console.log('Nuevos ítems guardados en el backend:', response.data);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    //Insertamos un item cart al backend
    const handlerAddCart = async(cartItem) => {

        const formData = new FormData();

        formData.append('id', cartItem.id);
        formData.append('price', cartItem.price);
        formData.append('product', cartItem.product);
        formData.append('size', cartItem.size);
        formData.append('gender', cartItem.gender);
        formData.append('userId', cartItem.userId);
        formData.append('schoolId', cartItem.schoolId);

        // Convierte el contenido de la imagen a un archivo Blob y adjúntalo
        if (cartItem.image && cartItem.image.content && cartItem.image.mime && cartItem.image.name) {
            const imageBlob = base64ToBlob(cartItem.image.content, cartItem.image.mime);
            const file = new File([imageBlob], cartItem.image.name, { type: cartItem.image.mime });
            formData.append('file', file);
        } else {
            console.error('Error: La imagen no contiene los datos necesarios.');
        }

        if (!cartItem.userId == '') {
            try {
                const response = await saveCartItem(formData);
                dispatch(addToCart({...response.data}));

            } catch (error) {
                throw error;
            }

        } else {
            dispatch(addToCart(cartItem));
        }

    }

    const handleRemoveCart = async(ids) => {
        console.log("usecart desde hook id " + ids.id);  
        console.log("usecart desde hook idUser" + ids.userId);  
    
        if (!ids.userId == '') {
            await removeCartItem(ids.id);
            dispatch(removeCart(ids.id));
        } else {
            dispatch(removeCart(ids.id));
        }
    }
    
    //limpia el estado global de reducer
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const HandleCalculateTotal = () => {
        dispatch(calculateTotal());
    }

    const handleIncreaseQuantity = (id) => {
        dispatch(updateIncreaseQuantity(id));
    }

    const handleDecreaseQuantity = (id) => {
        dispatch(updateDecreaseQuantity(id));
    }

     // Función para convertir Base64 a un archivo Blob
     function base64ToBlob(base64, mime) {
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length).fill(null).map((_, i) => byteCharacters.charCodeAt(i));
        const byteArray = new Uint8Array(byteNumbers);            
        return new Blob([byteArray], { type: mime });
    }

    return (
        {
            cart,
            priceTotal,

            getCartItems,
            handlerAddCart,
            handleRemoveCart,
            handleClearCart,
            HandleCalculateTotal,
            handleIncreaseQuantity,
            handleDecreaseQuantity,
        }
    );
};