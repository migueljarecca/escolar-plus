
import { useParams } from 'react-router-dom';
import { useUniform } from '../hooks/useUniform';
import { useEffect, useState } from 'react';
import { UniformForm } from '../components/UniformForm';
export const RegisterUniformPage = () => {

const { filteredUniforms, initialUniformForm } = useUniform();

const [uniformSelected, setUniformSelected] = useState(initialUniformForm);

const { id } = useParams();
// console.log("control de id ",id);

    useEffect(() => {
        if (id) {

            const uniform = filteredUniforms.find(u => u.id == id);
            setUniformSelected(uniform);
            // console.log("control de uniform ", uniform);

        }else {
            setUniformSelected(initialUniformForm);
        }
    },[id]);

    return (
        <>
            <div className="container-form-uniform">
                <h3>{uniformSelected.id > 0 ? 'Editar' : 'Crear'} Uniforme</h3>

                <UniformForm uniformSelected={uniformSelected}/>
            </div>
            
        </>
    )
}