import { useEffect, useState } from "react";
import { useUniform } from "../hooks/useUniform";
import { initialFilter } from "../store/slices/schools/uniformSlice";

export const Filters = ({ filteredUniforms }) => {

    const { handlerFilterProduct } = useUniform();

    const [filterState, setFilterState] = useState(initialFilter);
    const [highestMayor, setHighestMayor] = useState(0);

    const { minPrice } = filterState;

    const capitalizeWords = (str) => {
        return str
            .toLowerCase()               // Convierte toda la cadena a minúsculas.
            .replace(/_/g, ' ')          // Reemplaza los guiones bajos con espacios.
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitaliza la primera letra de cada palabra.
    };    
    
    // Usar un Set para extraer productos únicos
    const uniqueProducts = Array.from(new Set(filteredUniforms.map(item => item.product)));
        
    // Ordenar los productos alfabéticamente
    uniqueProducts.sort();

    filteredUniforms.forEach(uniform => {
        if (uniform.price > highestMayor)
            setHighestMayor(uniform.price);
    });

    const onInputPriceChange = (event) => {
            const { value } = event.target;  

            setFilterState(prevState => ({
                ...prevState,
                minPrice: value,
            }));    
    }

    const onInputCategoryChange = (category) => {
        
        setFilterState(prevState => ({
            ...prevState,
            category: category,
        }));
    }

    useEffect(() => {
        console.log("control de price " + JSON.stringify(filterState));
        handlerFilterProduct(filterState);
    }, [filterState]);


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
                <h1>Colegio {filteredUniforms.length > 0 ? filteredUniforms[0].school.name : ''} </h1>
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
                        <div 
                            className="filter-button" 
                            role="button" 
                            style={{ "--i": "1" }}
                            onClick={() => onInputCategoryChange('all')}>
                                

                            <span className='span'></span>
                            <div className='div-span'>
                                <span>Todos</span>
                                {/* <span>5</span> */}
                            </div>
                        </div>
                            {uniqueProducts.map((product, index) => (
                            <div 
                            key={index}
                            className="filter-button" 
                            role="button" 
                            style={{ "--i": "1" }}
                            onClick={() => onInputCategoryChange(product)}>
                                

                            <span className='span'></span>
                            <div className='div-span'>
                                <span>{capitalizeWords(product)}</span>
                                {/* <span>5</span> */}
                            </div>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>

            <h5>Filtrar por:</h5>
            
            <div className='box'>
                <div className="div">
                    <h3>Precio a partir de:</h3>
                    <h3>hasta</h3>
                </div>

                {/* <label htmlFor="price">precio</label> */}
                <input 
                    type="range" 
                    id="price"
                    min='0'
                    max={highestMayor}
                    value={filterState.minPrice}
                    onChange={onInputPriceChange}
                    />

                <div className="content-span">
                    <span>S/.{minPrice}</span>
                    <span>S/. {highestMayor}</span>
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
        </>
    )
}