import { UniformFilteredCard } from './UniformFilteredCard';
import { useSelector } from 'react-redux';

export const UniformFilteredList = ( { filteredUniforms }) => {

    const { filterProd } = useSelector(state => state.uniforms);
    console.log("control de filterProd " +JSON.stringify(filterProd));

    const filterProducts = (filteredUniforms) => {
        return filteredUniforms.filter(product => {
            console.log('control 01 ' +product.product);
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

    const result = filteredProducts.map((filter) => ( 
        <UniformFilteredCard key={filter.id} filter={filter}/>));
    

    return (
        <>
            {result}
        </>
    )
}