import { useState } from 'react';
import { UniformFilteredCard } from './UniformFilteredCard';

export const UniformFilteredList = ( { filteredUniforms }) => {

    const [filters, setFilters] = useState({
        category:'all',
        minPrice: 70
    })

    const filterProducts = (filteredUniforms) => {
        return filteredUniforms.filter(product => {
            return (
                product.price >= filters.minPrice && 
                (
                    filters.category == 'all' ||
                    product.product == filters.category
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