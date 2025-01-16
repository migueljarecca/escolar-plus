import { useDispatch, useSelector } from "react-redux"
import { addToWishlist, clearWishlist, loadingToWishlist, removeToWishlist } from "../store/slices/wishlist/wishlistSlice";
import { findByIdUserFavorites, removeFavorite, saveWishlist } from "../services/favoriteService";

export const useWishlist = () => {
    
    const { wishlist } = useSelector(state => state.wishlist);
    // console.log('API response:', wishlist);

    const dispatch = useDispatch();

    const getFavorites = async(id) => {
        console.log('control de hook id ' +id)
        try {
            const result = await findByIdUserFavorites(id);

            const formattedResult = Object.values(result.data || {});
    console.log('API response:', formattedResult);

                if (JSON.stringify(wishlist) !== JSON.stringify(formattedResult)) {
                    dispatch(loadingToWishlist(formattedResult));
                }
                    
        } catch (error) {
            console.error(error);
        }
    }

    const handleAddToWishlist = async(favItem) => {

        const formData = new FormData();

        formData.append('id', favItem.id);
        formData.append('price', favItem.price);
        formData.append('product', favItem.product);
        formData.append('size', favItem.size);
        formData.append('gender', favItem.gender);
        formData.append('userId', favItem.userId);
        formData.append('schoolId', favItem.schoolId);

        // Convierte el contenido de la imagen a un archivo Blob y adjúntalo
        if (favItem.image && favItem.image.content && favItem.image.mime && favItem.image.name) {
            const imageBlob = base64ToBlob(favItem.image.content, favItem.image.mime);
            const file = new File([imageBlob], favItem.image.name, { type: favItem.image.mime });
            formData.append('file', file);
        } else {
            console.error('Error: La imagen no contiene los datos necesarios.');
        }

        if (!favItem.userId == '') {
            console.log('gfhj basck ' +favItem.userId);

            try {
                const result = await saveWishlist(formData);

                dispatch(addToWishlist({...result.data}));
                // console.log("item " +JSON.stringify(response.data, null, 2));

            } catch (error) {
                throw error;
            }
        } else {
            dispatch(addToWishlist(favItem));
        }

    }

    const handleRemoveToWishlist = async(ids) => {
    console.log("wishlist desde hook id " + ids.id);  
    console.log("wishlist desde hook idUser" + ids.userId);  

        if (!ids.userId == '') {
            await removeFavorite(ids.id);
            dispatch(removeToWishlist(ids.id));
        } else {
            dispatch(removeToWishlist(ids.id));
        }

    }

    //limpia el estado global de reducer
    const handleClearWishlist = () => {
        dispatch(clearWishlist());
    }

    // Función para convertir Base64 a un archivo Blob
    function base64ToBlob(base64, mime) {
        const byteCharacters = atob(base64);
        const byteNumbers = new Array(byteCharacters.length).fill(null).map((_, i) => byteCharacters.charCodeAt(i));
        const byteArray = new Uint8Array(byteNumbers);            return new Blob([byteArray], { type: mime });
    }

    return( 
        {
            wishlist,

            handleAddToWishlist,
            handleRemoveToWishlist,
            handleClearWishlist,
            getFavorites,
        }
    )

};