
import { useParams } from 'react-router-dom';
import { useUniform } from '../hooks/useUniform';
import { useEffect, useState } from 'react';
import { UniformForm } from '../components/UniformForm';
export const RegisterUniformPage = () => {

const { uniformFiltered, initialUniformForm } = useUniform();

cont [uniformSelected, setUniformSelected] = useState(initialUniformForm);

const { id } = useParams();

    useEffect(() => {
        if (id) {
            const uniform = uniformFiltered.find((u) => u.id == id);
            setUniformSelected(uniform);
        }else {
            setUniformSelected(initialUniformForm);
        }
    },[id]);

    return (
        <>
            <div className="container-form-uniform">
                <h3>{uniformSelected.id > 0 ?'Crear' : 'Editar'} uniforme"</h3>

                <UniformForm uniformSelected={uniformSelected}/>
            </div>
            
        </>
    )
}