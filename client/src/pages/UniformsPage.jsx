import { useEffect, useRef, useState } from 'react';
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

    
    const [isActive, setIsActive] = useState(false); // Estado para controlar la clase "active"

    const handleFilterClick = () => {
        setIsActive(!isActive);
    }


    
   

   
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
                        <h5>FILTROS</h5>
                        
                        <div onClick={handleFilterClick} className={`dropdown ${isActive ? 'active' : ''}`}>Button
                            {/* <span className='left-icon'><FontAwesomeIcon icon={faCaretDown}/></span> */}
                            {/* <span className='right-icon'><FontAwesomeIcon icon={faCaretUp}/></span> */}

                            <span ><FontAwesomeIcon icon={isActive ? faCaretUp : faCaretDown}/></span>
                            <div className="items">
                                    
                                <div className="div-button" role="button" title="CASA HELENA">
                                    <input type="checkbox" value="CASA_HELENA"/>
                                    <div className='div-span'>
                                        <span>CASA HELENA</span>
                                        <span>4</span>
                                    </div>
                                </div>    
    
                            </div>

                                        
                                    
                                
                            {/* <a href="#" style={{ "--i": "1" }}><span>HTML</span></a>
                            <a href="#" style={{ "--i": "2" }}><span>CSS</span></a>
                            <a href="#" style={{ "--i": "3" }}><span>JAVA</span></a> */}

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


  