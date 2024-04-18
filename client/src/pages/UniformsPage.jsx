import { useEffect, useRef } from 'react';
import { Header } from '../components/Header';
import { useUniform } from '../hooks/useUniform';
import { useParams } from 'react-router-dom';
import { UniformFilteredList } from '../components/UniformFilteredList';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    // const dropdown = document.querySelector('.dropdown');
    // dropdown.addEventListener('click', () => {
    //     dropdown.classList.toggle('active');
    // });

    const myElementRef = useRef(null);
    const [isActive, setIsActive] = useState(false); // Estado para controlar la clase "active"

    // Definimos el handler del click para cambiar el estado de "isActive"
    const toggleActive = () => {
        setIsActive(!isActive); // Cambia el estado actual de "isActive"
    };

    // Añadimos y removemos el event listener usando useEffect
    useEffect(() => {
        const element = myElementRef.current;
        if (element) {
            element.addEventListener('click', toggleActive);

            // Limpieza para remover el event listener cuando el componente se desmonte
            return () => {
                element.removeEventListener('click', toggleActive);
            };
        }
    }, []);

   
    return (
        <>
            <Header />

            <section>
                
            </section>



            <div className="container-uniform">

                <aside className="left-sidebar">
                    <div className='div-cole-title'>
                        <h1>Jorge Chavez</h1>
                    </div>

                    <div className='div-cole-filtro'>
                        <h4>FILTROS</h4>
                        <section className="section-filter">
                            <h5>Marca <i className="fa fa-chevron-up" aria-hidden="true"></i></h5>
                            <div>
                                <ul>
                                    <li>
                                        <div className="div-button" role="button" title="CASA HELENA">
                                            <input id="casa-helena-checkbox" name="brand" type="checkbox" value="CASA_HELENA"/>
                                            <label htmlFor="casa-helena-checkbox">
                                                <span>CASA HELENA</span>
                                                <span className="badge-count">4</span>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section className="section-filter">
                            <h5>Marca <i className="fa fa-chevron-up" aria-hidden="true"></i></h5>
                            <div>
                                <ul>
                                    <li>
                                        <div className="div-button" role="button" title="CASA HELENA">
                                            <input id="casa-helena-checkbox" name="brand" type="checkbox" value="CASA_HELENA"/>
                                            <label htmlFor="casa-helena-checkbox">
                                                <span>CASA HELENA</span>
                                                <span className="badge-count">4</span>
                                            </label>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="div-button" role="button" title="CASA HELENA">
                                            <input id="casa-helena-checkbox" name="brand" type="checkbox" value="CASA_HELENA"/>
                                            <label htmlFor="casa-helena-checkbox">
                                                <span>CASA HELENA</span>
                                                <span className="badge-count">4</span>
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    <div className="box">
                        <div className="dropdown" ref={myElementRef} className={isActive ? 'active' : ''}>Button
                            <span className='left-icon'><FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></span>
                            <span className='left-icon'><FontAwesomeIcon icon={faCaretUp}/></span>
                            <div className="items">
                            <a href="#" style={{ "--i": "1" }}><span>HTML</span></a>
                            <a href="#" style={{ "--i": "2" }}><span>CSS</span></a>
                            <a href="#" style={{ "--i": "3" }}><span>JAVA</span></a>
   

                            </div>    
                        </div>
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


  