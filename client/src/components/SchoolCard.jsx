import insignia from '../images/manuel-prado.png';
// import { insignia } from '/src/images/insignia.png';

export const SchoolCard = ({ school }) => {

    return (

         <div className="box-cole">
            <div className="div-content">
                <p>COLEGIO</p>
                <h2>{school.name}</h2>
                {/* <h4>{school.address}</h4> */}
                <h5>{school.image.name}</h5>
                
                <p>Ver Catálogo</p>
            </div>
            <div className="div-img">
                <img src={`data:${school.image.mime};base64,${school.image.content}`} alt={school.image.name} />
            </div>
        </div>

    )
}