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

    const [isActiveOrder, setIsActiveOrder] = useState(false); // Estado para controlar la clase "active"

    const handleFilterClickOrder = () => {
        setIsActiveOrder(!isActiveOrder);
    }

    return (
        <>
            <Header />

            <section>
                
            </section>

            <nav className='filter-nav-uniform'>
                <h4>COLEGIO JORGE CHAVEZ</h4>

                <div className='order-box'>

                    <div className={`order-dropdown ${isActiveOrder ? 'active' : ''}`} >

                        <div className="order-title" onClick={handleFilterClickOrder}>
                            <h3>Ordenar</h3>
                            <div className='order-icon'>
                                <span className='left-icon'></span>
                                <span className='right-icon'></span>
                            </div>
                        </div>
                   
                        <div className="order-items">
                            <div className="order-button" role="button" title="CASA HELENA" style={{ "--i": "1" }}>
                                    <h4 style={{ "--i": "1" }}>Pantalon buzo <span></span></h4>
                            </div>
                            <div className="order-button" role="button" title="CASA HELENA" style={{ "--i": "1" }}>
                                    <h4 style={{ "--i": "2" }}>Pantalon buzo <span></span></h4>
                            </div>
                            <div className="order-button" role="button" title="CASA HELENA" style={{ "--i": "1" }}>
                                    <h4 style={{ "--i": "3" }}>Pantalon buzo <span></span></h4>
                            </div>
                        </div>

                    </div>    
                </div>
            </nav>

            <div className="container-uniform">

                <aside className="left-sidebar">
                    <div className='div-cole-title'>
                        <h1> COLEGIO JORGE CHAVEZ</h1>
                    </div>
                    <h5>FILTROS</h5>

                    <div className='box'>

                        <div className={`dropdown-first ${isActiveFirst ? 'active' : ''}`} >

                            <div className="filter-title" onClick={handleFilterClickFirst}>
                                <h3>Categoría</h3>
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
                                            <span>Pantalon buzo</span>
                                            <span>4</span>
                                        </div>
                                </div>
                                <div className="filter-button" role="button" title="CASA HELENA" style={{ "--i": "2" }}>
                                        <span className='span'></span>
                                        <input type="checkbox" value="CASA_HELENA"/>
                                        <div className='div-span'>
                                            <span>Polo</span>
                                            <span>4</span>
                                        </div>
                                </div> 
                                <div className="filter-button" role="button" title="CASA HELENA" style={{ "--i": "2" }}>
                                        <span className='span'></span>
                                        <input type="checkbox" value="CASA_HELENA"/>
                                        <div className='div-span'>
                                            <span>Short</span>
                                            <span>4</span>
                                        </div>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div className='box'>
                        <div className={`dropdown-second ${isActiveSecond ? 'active' : ''}`} >

                            <div className="filter-title" onClick={handleFilterClickSecond}>
                                <h3>Género</h3>
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
                                            <span>Unisex</span>
                                            <span>4</span>
                                        </div>
                                </div>
                                <div className="filter-button" role="button" title="CASA HELENA" style={{ "--i": "2" }}>
                                        <span className='span'></span>
                                        <input type="checkbox" value="CASA_HELENA"/>
                                        <div className='div-span'>
                                            <span>Niña</span>
                                            <span>4</span>
                                        </div>
                                </div> 
                                <div className="filter-button" role="button" title="CASA HELENA" style={{ "--i": "2" }}>
                                        <span className='span'></span>
                                        <input type="checkbox" value="CASA_HELENA"/>
                                        <div className='div-span'>
                                            <span>Niño</span>
                                            <span>4</span>
                                        </div>
                                </div>
                            </div>
                                                    
                        </div>
                
                    </div>

                    <button
                        type='submit'
                        className='sidebar-button'
                        >
                        Aplicar filtros
                    </button>
                
                    

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


  