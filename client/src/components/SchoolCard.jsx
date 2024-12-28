import { NavLink } from 'react-router-dom';

export const SchoolCard = ({ school }) => {

    return (
        
        <NavLink to={`/uniforms/${school.id}`}>

            <div className="box-cole">
                <h2>{`Colegio ${school.name}`}</h2>

                <div className='content-cole'>
                    <figure className="figure-cole">
                        <img src={`data:${school.image.mime};base64,${school.image.content}`} alt={school.image.name} />
                    </figure>
                    <NavLink to={`/uniforms/${school.id}`}>
                        <div className="link-cole">                        
                            Ver Catálogo 
                        </div>
                    </NavLink>
                </div>     
            
            </div>
        </NavLink>
            
    )
}