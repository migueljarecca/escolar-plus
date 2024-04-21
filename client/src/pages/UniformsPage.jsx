import { useEffect, useRef, useState } from 'react';
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

    
    const [isActiveFirst, setIsActiveFirst] = useState(false); // Estado para controlar la clase "active"

    const handleFilterClickFirst = () => {
        setIsActiveFirst(!isActiveFirst);
    }

    const [isActiveSecond, setIsActiveSecond] = useState(false); // Estado para controlar la clase "active"

    const handleFilterClickSecond = () => {
        setIsActiveSecond(!isActiveSecond);
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

                    <div className='box'>
                        <h5>FILTROS</h5>

                        <div className={`dropdown-first ${isActiveFirst ? 'active' : ''}`} >

                            <div className="filter-title" onClick={handleFilterClickFirst}>
                                <h3>BUTTON</h3>
                                <div className='filter-icon'>
                                    <span className='left-icon'></span>
                                    <span className='right-icon'></span>
                                </div>
                            </div>
                   
                            <div className="items">
                                <div className="filter-button" role="button" title="CASA HELENA" style={{ "--i": "1" }}>
                                        <span className='span'></span>
                                        <input type="checkbox" value="CASA_HELENA"/>
                                        <div className='div-span'>
                                            <span>CASA HELENA</span>
                                            <span>4</span>
                                        </div>
                                </div>
                                <div className="filter-button" role="button" title="CASA HELENA" style={{ "--i": "2" }}>
                                        <span className='span'></span>
                                        <input type="checkbox" value="CASA_HELENA"/>
                                        <div className='div-span'>
                                            <span>CASA HELENA</span>
                                            <span>4</span>
                                        </div>
                                </div> 
                            </div>
                                                      
                        </div>

                        <div className={`dropdown-second ${isActiveSecond ? 'active' : ''}`} >

                            <div className="filter-title" onClick={handleFilterClickSecond}>
                                <h3>BUTTON</h3>
                                <div className='filter-icon'>
                                    <span className='left-icon'></span>
                                    <span className='right-icon'></span>
                                </div>
                            </div>

                            <div className="items">
                                <div className="filter-button" role="button" title="CASA HELENA" style={{ "--i": "1" }}>
                                        <span className='span'></span>
                                        <input type="checkbox" value="CASA_HELENA"/>
                                        <div className='div-span'>
                                            <span>CASA HELENA</span>
                                            <span>4</span>
                                        </div>
                                </div>
                                <div className="filter-button" role="button" title="CASA HELENA" style={{ "--i": "2" }}>
                                        <span className='span'></span>
                                        <input type="checkbox" value="CASA_HELENA"/>
                                        <div className='div-span'>
                                            <span>CASA HELENA</span>
                                            <span>4</span>
                                        </div>
                                </div> 
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

//     return (
//         <>
//             {/* <Header /> */}
//             <div>ID del parámetro: {id}</div>
//             <div>Uniformes filtrados: {JSON.stringify(filteredUniforms)}</div>

//         </>
//     );
// };


  