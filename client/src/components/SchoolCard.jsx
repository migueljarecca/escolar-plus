import { NavLink } from 'react-router-dom';
import { useSchool } from '../hooks/useSchool';

export const SchoolCard = ({ school }) => {

    const { handlerRemoveSchool } = useSchool();

    const onSelectedSchool = (id) => {
        handlerRemoveSchool(id);
    }

    return (

         <div className="box-cole">

            <figure className="figure-cole">
                <img src={`data:${school.image.mime};base64,${school.image.content}`} alt={school.image.name} />
            </figure>

            <div className="content-cole">
                <h2>{`Colegio ${school.name}`}</h2>
                    {/* <h4>{school.address}</h4> */}
                    {/* <h5>{school.image.name}</h5> */}

                <div className='div-button-cole'>
                    <NavLink to={"/school/update/" + school.id}> Actualizar</NavLink>

                    <button
                        type='submit'
                        onClick={() => onSelectedSchool(school.id)}
                        >
                        Eliminar
                    </button>
                </div>
                        
                <NavLink to={`/uniforms/${school.id}`} className='cole-enlace'>Ver Catálogo </NavLink>

            </div>
        
        </div>
            
    )
}