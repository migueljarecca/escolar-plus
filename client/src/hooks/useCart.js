import { useDispatch, useSelector } from "react-redux"
import { addToCart, calculateTotal, removeCart, updateDecreaseQuantity, updateIncreaseQuantity } from "../store/slices/cart/cartSlice";

export const useCart = () => {

    const { cart } = useSelector(state => state.cart);
    const { priceTotal } = useSelector(state => state.cart);

    // console.log('Cart data: ' + JSON.stringify(cart,null,2));
    const dispatch = useDispatch();

    const handlerAddCart = (product) => {
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