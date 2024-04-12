import { useState } from 'react';
import { useUniform } from './../hooks/useUniform';


// export const initialUniformForm = {
//     id: '',
//     price: '',
//     product: '',
//     size: '',
//     gender: '',
//     schoolId: '',
// }
export const UniformForm = () => {

    const { initialUniformForm, handlerAddUniform } = useUniform();
    const [uniformForm,  setUniformForm] = useState(initialUniformForm);
    const [file, setFile] = useState(null);

    const { price, product, size, gender, schoolId } = uniformForm;

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

        if (file) {
            formData.append('file', file);
        }

        handlerAddUniform(formData);

        setUniformForm(initialUniformForm);
        setFile(null);

    };

    return (
        <>
            <form onSubmit={onSubmitUniformChange}>
                
                <input 
                    type='number'
                    name= 'price'
                    value={price}
                    onChange={onInputUniformChange}
                />

                <label htmlFor="product">Producto</label>
              
                <select 
                    name="product" 
                    type="text" 
                    id="product"
                    value={product}
                    onChange={onInputUniformChange}
                    >
                    
                    <option value="POLO">POLO</option>
                    <option value="SHORT">SHORT</option>
                    <option value="PANTALON_BUZO">PANTALON BUZO</option>
                </select>

                <label htmlFor="size">Talla</label>
              
                <select 
                    name="size" 
                    type="text" 
                    id="size"
                    value={size}
                    onChange={onInputUniformChange}
                    >
                    
                    <option value="NUM_10">10</option>
                    <option value="NUM_12">12</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="X">X</option>
                    <option value="XL">XL</option>
                </select>

                <label htmlFor="gender">Genero</label>
              
                <select 
                    name="gender" 
                    type="text" 
                    id="gender"
                    value={gender}
                    onChange={onInputUniformChange}
                    >
                    
                    <option value="NIÑO">NIÑO</option>
                    <option value="NIÑA">NIÑA</option>
                    <option value="UNISEX">UNISEX</option>
                </select>

                <input 
                    type="file"
                    name='file'
                    onChange={onInputFileChange}
                    />

                <input 
                    type='number'
                    name='schoolId'
                    value={schoolId}
                    onChange={onInputUniformChange}
                />

                <button 
                    type="submit"
                    >
                    Crear    
                </button>

            </form>
        </>
    )
}