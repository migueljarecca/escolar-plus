import { useDispatch, useSelector } from "react-redux"
import { addToCart, calculateTotal, removeCart, updateDecreaseQuantity, updateIncreaseQuantity } from "../store/slices/cart/cartSlice";
import { saveCartItem } from "../services/cartItemServie";

export const useCart = () => {

    const { cart } = useSelector(state => state.cart);
    const { priceTotal } = useSelector(state => state.cart);

    // console.log('Cart data: ' + JSON.stringify(cart,null,2));
    const dispatch = useDispatch();

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
                const response = await saveCartItem(cartItem); 
            } catch (error) {
                
            }
        } else {
            
        }

        dispatch(addToCart(product));
    }

    const handleRemoveCart = (id) => {
        dispatch(removeCart(id));
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

            handlerAddCart,
            handleRemoveCart,
            HandleCalculateTotal,
            handleIncreaseQuantity,
            handleDecreaseQuantity,
        }
    );
};