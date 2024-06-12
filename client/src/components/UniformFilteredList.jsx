import { useUniform } from '../hooks/useUniform';
import { useWishlist } from '../hooks/useWishlist';
import { UniformFilteredCard } from './UniformFilteredCard';


export const UniformFilteredList = ( { filteredProducts }) => {

    const { wishlist, handleAddToWishlist, handleRemoveToWishlist } = useWishlist();
    const { handlerRemoveUniform } = useUniform();

    const onSelectedUniformId = (id) => {
        handlerRemoveUniform(id);
    }

    const checkProductInWishlist = prod => {
        return wishlist.some(item => item.id === prod.id)
    } 

    const onChangeWishlist = (item) => {
        if (checkProductInWishlist(item)) {
            handleRemoveToWishlist(item.id);
        } else {
            handleAddToWishlist(item);
        }
    };

    return (
        <>
            {filteredProducts.map((prod) => {
                const isProductInWishlist = checkProductInWishlist(prod)
                return( 
                    <UniformFilteredCard 
                        key={prod.id} 
                        prod={prod}
                        onSelectedUniformId={onSelectedUniformId}
                        onChangeWishlist={onChangeWishlist}
                        isProductInWishlist={isProductInWishlist}
                    />
                );
            })}
        </>
    )
}