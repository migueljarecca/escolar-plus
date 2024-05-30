import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeCart } from "../store/slices/cart/cartSlice";

export const useCart = () => {

    const { cart } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const handlerAddCart = (product) => {
        dispatch(addToCart(product));
    }

    const handlerRemoveCart = (id) => {
        dispatch(removeCart(id));
    }

    return (
        {
            cart,

            handlerAddCart,
            handlerRemoveCart,
        }
    );
};