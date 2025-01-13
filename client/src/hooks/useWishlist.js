import { useDispatch, useSelector } from "react-redux"
import { addToWishlist, removeToWishlist } from "../store/slices/wishlist/wishlistSlice";

export const useWishlist = () => {
    
    const { wishlist } = useSelector(state => state.wishlist);

    const dispatch = useDispatch();

    const handleAddToWishlist = (item) => {
        console.log("item " +JSON.stringify(item, null, 2));
        dispatch(addToWishlist(item));

        if (!item.userId == '') {
            console.log('gfhj basck ' +item.userId);
        }
    }

    

    const handleRemoveToWishlist = (id) => {
        dispatch(removeToWishlist(id));
    }
    // console.log("wishlist desde hook " + wishlist.lenght);  


    return( 
        {
            wishlist,

            handleAddToWishlist,
            handleRemoveToWishlist,
        }
    )

};