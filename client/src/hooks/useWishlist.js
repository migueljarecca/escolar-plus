import { useDispatch, useSelector } from "react-redux"
import { addToWishlist, removeToWishlist } from "../store/slices/wishlist/wishlistSlice";

export const wishlist = () => {
    
    const { wishlist } = useSelector(state => state.wishlist);

    console.log("control de la lista de deseros" +JSON.stringify(wishlist));
    
    const dispatch = useDispatch();

    const handleAddToWishlist = (item) => {
        dispatch(addToWishlist(item));
    }

    const handleRemoveToWishlist = (id) => {
        dispatch(removeToWishlist(id));
    }


    return( 
        {
            wishlist,

            handleAddToWishlist,
            handleRemoveToWishlist,
        }
    )

};