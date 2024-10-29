import { useSchool } from "../../hooks/useSchool";

export const SchoolCardAdmin = ({school, handlerSelectedSchool}) => {

    const { handlerRemoveSchool } = useSchool();

    const onSelectedSchool = (school) => {
        handlerSelectedSchool(school);
    }
    const onSelectedSchoolById = (id) => {
        handlerRemoveSchool(id);
    }

    return(
        <div className="box-cole-admin">
            <h2>{`Colegio ${school.name}`}</h2>

            <div className="div-img-cole">
                <figure className="figure-cole-admin">
                    <img src={`data:${school.image.mime};base64,${school.image.content}`} alt={school.image.name} />
                </figure>
            </div>

            <div className="content-cole"> 

                {/* <div className="div-button-admin"> */}
                    <button 
                        type="submit"
                        onClick={() => onSelectedSchool(school)}    
                        >
                        Actualizar
                    </button>

                    <button 
                        type="submit"
                        onClick={() => onSelectedSchoolById(school.id)}    
                        >
                        Eliminar
                    </button>

                {/* </div> */}
            </div>


        </div>
    )
}