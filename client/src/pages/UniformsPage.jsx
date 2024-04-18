import { useEffect } from 'react';
import { Header } from '../components/Header';
import { useUniform } from '../hooks/useUniform';
import { useParams } from 'react-router-dom';
import { UniformFilteredList } from '../components/UniformFilteredList';


export const UniformsPage = () => {

    const { filteredUniforms, uniformBySchoolId } = useUniform();
    
    const { id } = useParams();

    //traer todos los uniformes realacionado a un colegio   
    useEffect(() => {
        if (id) {
            uniformBySchoolId(id);
            
        }
    },[]);     

    console.log("control -1 ", filteredUniforms);

    return (
        <>
            <Header />

            <section>
                
            </section>



            <div className="container-uniform">

                <aside className="left-sidebar">
                    <div>
                        <h1>Jorge Chavez</h1>
                    </div>

                    <div>
                        <h4>FILTROS</h4>
                        <section class="catalog-facet">
                            <h5>Marca <i class="fa fa-chevron-up" aria-hidden="true"></i></h5>
                            <div>
                                <ul>
                                    <li class="facet-filter">
                                        <div role="button" title="CASA HELENA" tabindex="0" class="">
                                            <span class="ripley-checkbox">
                                                <input id="casa-helena-checkbox" name="brand" type="checkbox" value="CASA_HELENA"/>
                                                {/* <label for="casa-helena-checkbox">
                                                    <span>CASA HELENA</span>
                                                    <span class="badge-count">4</span>
                                                </label> */}
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </aside>

                <div className="main-content">
                    <UniformFilteredList  filteredUniforms={filteredUniforms}/>
                </div>
            
            </div>
        </>
    )
}

// import { useParams } from 'react-router-dom';

// export const UniformsPage = () => {
//     const { id } = useParams();
//     const { uniformBySchoolId, filteredUniforms } = useUniform();

//     useEffect(() => {
//         console.log("UniformsPage montado", id);
//         uniformBySchoolId(id);

//     }, [id]);

//     console.log("control de datos ", filteredUniforms);


//     return (
//         <>
//             {/* <Header /> */}
//             <div>ID del parámetro: {id}</div>
//             <div>Uniformes filtrados: {JSON.stringify(filteredUniforms)}</div>

//         </>
//     );
// };


  