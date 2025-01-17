import { useDispatch, useSelector } from "react-redux"
import { addToWishlist, clearWishlist, loadingToWishlist, removeToWishlist } from "../store/slices/wishlist/wishlistSlice";
import { findByIdUserFavorites, removeFavorite, saveFavorites, saveWishlist } from "../services/favoriteService";

export const useWishlist = () => {
    
    const { wishlist } = useSelector(state => state.wishlist);
    // console.log('API response:', wishlist);

    const dispatch = useDispatch();

    const getFavorites = async(id) => {

        try {
            const result = await findByIdUserFavorites(id);

            const formattedResult = Object.values(result.data || {});

            //Mesclar las listas de favoritos eliminando duplicados
            const mergedWishlist = [
                ...wishlist,
                ...formattedResult.filter(
                    (backendItem) => !wishlist.some((localItem)=>localItem.id === backendItem.id)
                ),
            ];

            //Actualizar el estado si hay cambios
            if (JSON.stringify(wishlist) !== JSON.stringify(mergedWishlist)) {
                dispatch(loadingToWishlist(mergedWishlist));
            }

            console.log('Lista actual:', wishlist);
            console.log('Datos del backend:', formattedResult);
            console.log('Lista combinada:', mergedWishlist);

            //Filtramos los items locales que no estan en el backend
            const newItems = wishlist.filter(
                (localItem) => !formattedResult.some((backendItem) => backendItem.id === localItem.id)
            );

            //Insertamos los ítems locales en el backend
            if (newItems.length > 0) {
                await saveMissingItems(newItems, id);
            }
                    
        } catch (error) {
            console.error(error);
        }
    }

    // Función auxiliar para guardar ítems que no están en el backend
    const saveMissingItems = async (items, id) => {
        
        const formData = new FormData();

        // Agregar cada objeto del array al FormData
        items.forEach((item, index) => {
            // Agregar campos simples
            formData.append(`favorites[${index}].id`, item.id);
            formData.append(`favorites[${index}].price`, item.price);
            formData.append(`favorites[${index}].product`, item.product);
            formData.append(`favorites[${index}].size`, item.size);
            formData.append(`favorites[${index}].gender`, item.gender);
            formData.append(`favorites[${index}].userId`, id);
            formData.append(`favorites[${index}].schoolId`, item.schoolId);

            // Agregar archivo (convertir base64 a Blob si es necesario)
            const fileBlob = base64ToBlob(item.image.content, item.image.mime);
            const file = new File([fileBlob], item.image.name, { type: item.image.mime });
            formData.append(`favorites[${index}].file`, file);
        });

        try {

            const result = await saveFavorites(formData);
            console.log('Nuevos ítems guardados en el backend:', result.data);

        } catch (error) {
            console.error('Error al guardar nuevos ítems:', error);
        }
    };

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
            try {
                const result = await saveWishlist(formData);

                dispatch(addToWishlist({...result.data}));

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
        const byteArray = new Uint8Array(byteNumbers);            
        return new Blob([byteArray], { type: mime });
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