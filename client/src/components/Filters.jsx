import { useEffect, useState } from "react";
import { useUniform } from "../hooks/useUniform";
import { initialFilter } from "../store/slices/schools/uniformSlice";

export const Filters = ({ productsName, prices, availableGenders }) => {

    const { handlerFilterProduct, handleFilterGender } = useUniform();

    const [filterState, setFilterState] = useState(initialFilter);
    const [highestMayor, setHighestMayor] = useState(0);

    const [isActiveCategory, setIsActiveCategory] = useState(true);
    const [isActiveGender, setIsActiveGender] = useState(true);

    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedGender, setSelectedGender] = useState('all');

    const { minPrice } = filterState;

    const capitalizeWords = (str) => {
        return str
            .toLowerCase()               // Convierte toda la cadena a minúsculas.
            .replace(/_/g, ' ')          // Reemplaza los guiones bajos con espacios.
            .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitaliza la primera letra de cada palabra.
    };    
    
    // Usar un Set para extraer productos únicos
    const uniqueProducts = Array.from(new Set(productsName.map(item => item.product)));
        
    // Ordenar los productos alfabéticamente
    uniqueProducts.sort();

    useEffect (() => {
        const maxPrice = Math.max(...prices);        
        setHighestMayor(maxPrice);    
    },[prices])

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

        setSelectedCategory(category);
    }

    useEffect(() => {
        handlerFilterProduct(filterState);
    }, [filterState]);

    const onInputGenderChange = (gender) => {
        handleFilterGender(gender);
        setSelectedGender(gender);
    };

    // console.log('cntrol de gender ' +JSON.stringify(filterStateGender));

    const handleFilterClickCategory = () => {
        setIsActiveCategory(!isActiveCategory);
    }

    const handleFilterClickGender = () => {
        setIsActiveGender(!isActiveGender);
    }

    return (
        <>
            <div className='div-cole-title'>
                <h1>Colegio {productsName.length > 0 ? productsName[0].schoolName : ''} </h1>
            </div>

            <h5>Mostrar resultado por:</h5>

            <div className={`dropdown-category ${isActiveCategory ? 'active' : ''}`} >
                    
                <div className="select" onClick={handleFilterClickCategory}>
                    <span className="selected">Categoría</span>
                    <div className={`caret ${isActiveCategory ? 'active' : ''}`}></div>
                </div>
                   
                <ul className={`ul-menu ${isActiveCategory ? 'active' : ''}`}>
                     <li 
                        onClick={() => onInputCategoryChange('all')}
                        className={selectedCategory === 'all' ? 'active' : ''}
                        >
                        Todos
                    </li>   
                    {uniqueProducts.map((product, index) => (
                        <li 
                            key={index}
                            onClick={() => onInputCategoryChange(product)}
                            className={selectedCategory === product ? 'active' : ''}
                            >
                            {capitalizeWords(product)}
                        </li>
                    ))}
                </ul>
                                           
            </div>
            
            <div className='box-price'>
                <p>Precio</p>

                <input 
                    type="range" 
                    id="price"
                    min='0'
                    max={highestMayor}
                    value={filterState.minPrice}
                    onChange={onInputPriceChange}
                    />

                <div className="content-span">
                    <span>S/. {minPrice}</span>
                    <span>S/. {highestMayor}</span>
                </div>    
            </div>

            <div className={`dropdown-gender ${isActiveGender ? 'active' : ''}`} >
                    
                <div className="select" onClick={handleFilterClickGender}>
                    <span className="selected">Género</span>
                    <div className={`caret ${isActiveGender ? 'active' : ''}`}></div>
                </div>
                   
                <ul className={`ul-menu ${isActiveGender ? 'active' : ''}`}>
                     <li                         
                        className={selectedGender === 'all' ? 'active' : ''}
                        onClick={() => onInputGenderChange('all')}
                        >
                        Todos
                    </li>   
                    {availableGenders.map((product, index) => (
                        <li 
                            key={index}
                            onClick={() => onInputGenderChange(product)}
                            className={selectedGender === product ? 'active' : ''}
                            >
                            {capitalizeWords(product)}
                        </li>
                    ))}
                </ul>
                                               
            </div>
        </>
    )
}