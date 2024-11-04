import { NavLink } from 'react-router-dom';

export const SchoolCard = ({ school }) => {

    return (

         <div className="box-cole">
            <h2>{`Colegio ${school.name}`}</h2>

            <div className='content-cole'>
                <figure className="figure-cole">
                    <img src={`data:${school.image.mime};base64,${school.image.content}`} alt={school.image.name} />
                </figure>

                <div className="link-cole">                        
                    <NavLink to={`/uniforms/${school.id}`}>Ver Catálogo </NavLink>
                </div>
            </div>     
        
        </div>
            
    )
}