import insignia from '../images/insignia.png';
// import { insignia } from '/src/images/insignia.png';

export const SchoolCard = ({ school }) => {

    return (

         <div className="box-cole">
            <div className="div-content">
                <p>COLEGIO</p>
                <h2>{school.name}</h2>
                {/* <h4>{school.address}</h4> */}
                {/* <h5>{school.schoolCode}</h5> */}
                <p>Ver Catálogo</p>
            </div>
            <div className="div-img">
                <img src={insignia} alt="#" />
            </div>
        </div>

    )
}