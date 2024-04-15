import { UniformFilteredCard } from './UniformFilteredCard';

export const UniformFilteredList = ( { filteredUniforms }) => {

    const result = filteredUniforms.map((filter) => ( 
        <UniformFilteredCard key={filter.id} filter={filter}/>));
    

    return (
        <>
            {result}
        </>
    )
}