
export const UniformFilteredCard = ( { filter }) => {


    return (
        <card>
            <div>
             <img src={`data:${filter.image.mime};base64,${filter.image.content}`} alt={filter.image.name} />

            </div>
            <div>
                {filter.product}
                {filter.gender}
                {filter.size}
            </div>
            <div>
                {filter.price}
            </div>
        </card>
    )
}