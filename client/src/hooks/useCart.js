import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeCart } from "../store/slices/cart/cartSlice";

export const useCart = () => {

    const { cart } = useSelector(state => state.cart);
    // console.log('Cart data: ' + JSON.stringify(cart));
    console.log('Cart data: ' + cart);


    const dispatch = useDispatch();

    const handlerAddCart = (product) => {
        dispatch(addToCart(product));
    }

    const handleRemoveCart = (id) => {
        dispatch(removeCart(id));
    }

    return (
        {
            cart,

            handlerAddCart,
            handleRemoveCart,
        }
    );
};