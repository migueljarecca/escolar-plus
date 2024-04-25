
export const UniformDetailsCard = ({ uniformDetails }) => {

    if (!uniformDetails) {
        return <div>No hay información disponible.</div>;
    }

    const { image, product, gender, size, price } = uniformDetails;

    return (
        <>
            <div className="container-image-elem1">
                <img src={`data:${image.mime};base64,${image.content}`} alt={image.name} />
            </div>

            <article className="container-content-elem2">
                <div className="div-details">
                    <h2>COLEGIO JORGE CHAVEZ</h2>
                    <h1>{product}</h1>
                    <h3>s/. {price}</h3>

                </div>

                <div className="div-talla">
                    <h2>Talla</h2>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />

                </div>

                {/* <div> */}
                    <button
                        type="submit"
                        >
                        Agregar al carrito    
                    </button>
                {/* </div>   */}

            </article>

            
        </>
    )
}