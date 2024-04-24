
export const UniformDetailsCard = ({ uniformDetails }) => {

    const { image, product, gender, size, price } = uniformDetails;

    return (
        <>
         <div className="container-image-elem1">
                <img src={`data:${image.mime};base64,${image.content}`} alt={image.name} />

                </div>

                <div className="container-content-elm2">


                </div>
        </>
    )
}