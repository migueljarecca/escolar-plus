
export const UniformFilteredCard = ( { filter }) => {

    if (!filter) {
        return <div>No hay información disponible.</div>;
    }


    // const { image, product, gender, size, price } = filter;


    return (
        <article className="card-content">
            <div className="div-img">
             <img src={`data:${filter.image.mime};base64,${filter.image.content}`} alt={filter.image.name} />
            </div>

            <div>
                {filter.product}
                {filter.gender}
                {filter.size}
            </div>

            <div>
                <h2>{filter.price}</h2>
            </div>
        </article>
    )
}