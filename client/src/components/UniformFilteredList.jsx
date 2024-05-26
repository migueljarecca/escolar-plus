import { useEffect, useState } from 'react';
import { UniformFilteredCard } from './UniformFilteredCard';
import { useSelector } from 'react-redux';

export const UniformFilteredList = ( { filteredUniforms }) => {

    const { filterProd } = useSelector(state => state.uniforms);

    const [filters, setFilters] = useState({
        category:'all',
        minPrice: 0
    })

    useEffect(()=> {
        setFilters(filterProd);
    },[filterProd])

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