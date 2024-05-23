import { useState } from "react";

export const Filters = () => {

    const [minPrice, setMinPrice] = useState(0);

    const handleChangePrice = (event) => {
        setMinPrice(event.target.value)        
    }

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
            <div className='div-cole-title'>
                <h1> COLEGIO JORGE CHAVEZ</h1>
            </div>

            <h5>Mostrar resultado por:</h5>

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
                            <div className='div-span'>
                                <span>Pantalon buzo</span>
                                <span>5</span>
                            </div>
                        </div>
                        <div className="filter-button" role="button" title="CASA HELENA" style={{ "--i": "2" }}>
                            <span className='span'></span>
                            <div className='div-span'>
                                <span>Polo</span>
                                <span>4</span>
                            </div>
                        </div> 
                        <div className="filter-button" role="button" title="CASA HELENA" style={{ "--i": "2" }}>
                            <span className='span'></span>
                            <div className='div-span'>
                                <span>Short</span>
                                <span>4</span>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>

            <h5>Filtrar por:</h5>
            
            <div className='box'>
                <h3>Precio</h3>

                {/* <label htmlFor="price">precio</label> */}
                <input 
                    type="range" 
                    id="price"
                    min='0'
                    max='1000'
                    onChange={handleChangePrice}
                    />
                <span>S/.{minPrice}</span>    
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
        </>
    )
}