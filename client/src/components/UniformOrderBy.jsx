import { useState } from "react";
import { useUniform } from "../hooks/useUniform";

export const UniformOrderBy = ({ numUniforms }) => {

    const { handleFilterOrder } = useUniform();
    const [isActiveOrder, setIsActiveOrder] = useState(false); // Estado para controlar la clase "active"
    const [selectedOption, setSelectedOption] = useState('Recientes');

    const onInputOrderChange = (order, name) => {
        handleFilterOrder(order);
        setSelectedOption(name);
        setIsActiveOrder(!isActiveOrder)
    }

    const handleFilterClickOrder = () => {
        setIsActiveOrder(!isActiveOrder);
    }

    return (
        <>
            <h4>{numUniforms} {numUniforms > 1 ? 'productos encontrados' : 'producto encontrado'} </h4>

            <div className="container-dropdown">
                <div className="dropdown-title">
                    <p>ORDENAR POR</p>
                    <div className="caret"></div>
                </div>

                <div className={`dropdown-uniform ${isActiveOrder ? 'active' : ''}`}>
                    <div className="select" onClick={handleFilterClickOrder}>
                        <span className="selected">{selectedOption}</span>
                        <div className={`caret ${isActiveOrder ? 'active' : ''}`}></div>
                    </div>
                    <ul className={`ul-menu ${isActiveOrder ? 'active' : ''}`}>
                        <li onClick={() => onInputOrderChange('','Recientes')}>Recientes</li>
                        <li onClick={() => onInputOrderChange('price-asc','Menor precio')}>Menor precio</li>
                        <li onClick={() => onInputOrderChange('price-desc','Mayor precio')}>Mayor precio</li>
                        <li onClick={() => onInputOrderChange('alfa-asc','Nombre: A-Z')}>Nombre: A-Z</li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}