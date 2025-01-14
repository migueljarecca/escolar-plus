import { useAuth } from '../hooks/useAuth';
import { useUniform } from '../hooks/useUniform';
import { useWishlist } from '../hooks/useWishlist';
import { UniformFilteredCard } from './UniformFilteredCard';

const favItem = {
    id: '',
    price: '',
    product: '',
    size: '',
    gender: '',
    userId: '', // Agrega el userId aquí
    schoolId: '',
    image: ''
  };

export const UniformFilteredList = ( { filteredProducts }) => {

    const { wishlist, handleAddToWishlist, handleRemoveToWishlist } = useWishlist();
    const { handlerRemoveUniform } = useUniform();
    const { login, user } = useAuth();

    const onSelectedUniformId = (id) => {
        handlerRemoveUniform(id);
    }

    const checkProductInWishlist = prod => {
        return wishlist.some(item => item.id === prod.id)
    } 

    const onChangeWishlist = (item) => {
        if (checkProductInWishlist(item)) {
            handleRemoveToWishlist({id: item.id, userId: user.userLogged.id});

        } else {

        const favItem = {
            id: item.id,
            price: item.price,
            product: item.product,
            size: item.size,
            gender: item.gender,
            userId: user.userLogged.id, // Agrega el userId aquí
            schoolId: item.school.id,
            image: item.image
        };
            // console.log('control desde LIST ' +JSON.stringify(favItem, null, 2))
            handleAddToWishlist(favItem);
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
                        login={login}
                    />
                );
            })}
        </>
    )
}