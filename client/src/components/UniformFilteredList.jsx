import { UniformFilteredCard } from './UniformFilteredCard';
import { useSelector } from 'react-redux';

export const UniformFilteredList = ( { filteredUniforms }) => {

    const { filterProd } = useSelector(state => state.uniforms);
    console.log("control de filterProd " +JSON.stringify(filterProd));

    const filterProducts = (filteredUniforms) => {
        return filteredUniforms.filter(product => {
            return (
                product.price >= filterProd.minPrice  &&
                (
                    filterProd.category == 'all' ||
                    product.product == filterProd.category
                )
            )
        })
    }

    const filteredProducts = filterProducts(filteredUniforms);

    return (
        <>
            {filteredProducts.map((filter) => 
            ( 
                <UniformFilteredCard 
                    key={filter.id} 
                    filter={filter}/>
            ))}
        </>
    )
}