import { UniformFilteredCard } from './UniformFilteredCard';

export const UniformFilteredList = ( { filteredProducts }) => {

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