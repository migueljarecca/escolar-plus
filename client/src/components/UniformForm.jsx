import { useEffect, useRef, useState } from 'react';
import { useUniform } from './../hooks/useUniform';
import { useSchool } from '../hooks/useSchool';

export const UniformForm = ( { uniformSelected }) => {

    const { initialUniformForm, handlerAddUniform, handlerUpdateUniform } = useUniform();
    const {  getSchools, schools } = useSchool();

    useEffect(() => {
        getSchools();
    console.log("control de useeffect ");

    },[]);

    console.log("control de colegios ", schools);
    
    const [uniformForm,  setUniformForm] = useState(initialUniformForm);
    const [file, setFile] = useState(null);
    const fileInputRef = useRef();  // Crear la referencia

    const { id, price, product, size, gender, schoolId } = uniformForm;

    useEffect(() => {
        setUniformForm(uniformSelected);
    },[uniformSelected]);

    const onInputUniformChange = ({ target }) => {
        const {name, value} = target;
        setUniformForm({
            ...uniformForm,
            [name]: value,
        })
    };

    const onInputFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const onSubmitUniformChange = (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('price', price);
        formData.append('product', product);
        formData.append('size',size);
        formData.append('gender', gender);
        formData.append('schoolId', schoolId);

        if (file) {
            formData.append('file', file);
        }

        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }

        if (id == 0) {
            handlerAddUniform(formData);
            
        } else {
            handlerUpdateUniform(formData, id);
            console.log("cntrol de Id uni ", id);

        }


        setUniformForm(initialUniformForm);
        setFile(null);

        // Reset the file input through the DOM API using the ref
        fileInputRef.current.value = ""; 

    };

    return (
        <>
            <form onSubmit={onSubmitUniformChange}>

                <label htmlFor="product">Categoría</label>
              
                <select 
                    name="product" 
                    type="text" 
                    id="product"
                    value={product}
                    onChange={onInputUniformChange}
                    >

                    <option value="">Seleccionar producto</option>
                    <option value="BLUZA_MANGA_CORTA">BLUZA MANGA CORTA</option>
                    <option value="BLUZA_MANGA_LARGA">BLUZA MANGA LARGA</option>
                    <option value="CAMISA_MANGA_CORTA">CAMISA MANGA CORTA</option>
                    <option value="CAMISA_MANGA_LARGA">CAMISA MANGA LARGA</option>
                    <option value="CASACA">CASACA</option>
                    <option value="CHALECO">CHALECO</option>
                    <option value="CHOMPA">CHOMPA</option>
                    <option value="POLO_MANGA_CORTA">POLO MANGA CORTA</option>
                    <option value="POLO_MANGA_LARGA">POLO MANGA LARGA</option>
                    <option value="FALDA">FALDA</option>
                    <option value="JUMPER">JUMPER</option>
                    <option value="SHORT">SHORT</option>
                    <option value="PANTALON_BUZO">PANTALON BUZO</option>
                    <option value="PANTALON">PANTALON</option>

                </select>

                <label htmlFor="size">Talla</label>
              
                <select 
                    name="size" 
                    type="text" 
                    id="size"
                    value={size}
                    onChange={onInputUniformChange}
                    >

                    <option value="">Seleccionar talla</option>
                    <option value="NUM_10">10</option>
                    <option value="NUM_12">12</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="X">X</option>
                    <option value="XL">XL</option>
                </select>

                <label htmlFor="gender">Género</label>
              
                <select 
                    name="gender" 
                    type="text" 
                    id="gender"
                    value={gender}
                    onChange={onInputUniformChange}
                    >
                    
                    <option value="">Seleccionar género</option>
                    <option value="HOMBRE">HOMBRE</option>
                    <option value="MUJER">MUJER</option>
                    <option value="UNISEX">UNISEX</option>
                </select>

                <label htmlFor="price">Precio en s/.</label>

                <input 
                    type='number'
                    name= 'price'
                    id='price'
                    value={price}
                    onChange={onInputUniformChange}
                />

                <input 
                    type="file"
                    name="file"
                    ref={fileInputRef}
                    onChange={onInputFileChange}
                    />

                <select 
                    name="schoolId" 
                    type="text" 
                    value={schoolId}
                    onChange={onInputUniformChange}
                    >
                    
                    <option value="">Seleccionar Colegio</option>

                    {schools.map((school) => (
                        <option 
                            key={school.id} 
                            value={school.id}
                            >
                            Colegio {school.name}
                        </option>
                    ))}
                </select>

                <button 
                    type="submit"
                    >
                    Crear    
                </button>

            </form>
        </>
    )
}