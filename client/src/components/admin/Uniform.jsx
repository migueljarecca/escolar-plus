
import { useEffect, useState } from 'react';
import { useUniform } from './../../hooks/useUniform';
import { UniformListAdmin } from './UniformListAdmin';
import { UniformForm } from './../UniformForm';
export const Uniform = () => {

    const {getAllUniform, uniforms, initialUniformForm} = useUniform();
    const [uniformSelected, setUniformSelected] = useState(initialUniformForm);
    const [showFormUniform, setShowFormUniform] = useState(false);

    useEffect(() => {
        getAllUniform();
    },[]);

    const handlerSelectedUniform = (uniform) => {
        console.log("control de uniform selected " +uniform.name);
        setUniformSelected(uniform);
        setShowFormUniform(true);
    }


    return (
        <main className='main-uniform-admin'>
        
            <nav className="nav-uniform">
                <h2>Uniformes</h2>

                <button 
                    onClick={() =>{ 
                        setShowFormUniform(!showFormUniform)
                        if (showFormUniform) { // Si ya está visible, al ocultarlo, limpiamos el formulario
                            setUniformSelected(initialUniformForm);
                        }
                    }}
                    >
                    {showFormSchool ? 'Ocultar formulario' : 'Nuevo uniforme'}
                </button>

            </nav>

            <section className="section-uniform">

                <div className="container-uniform-list">
                    <UniformListAdmin 
                        uniforms={uniforms}
                        handlerSelectedUniform={handlerSelectedUniform}
                    />

                </div>

                <div className='content-form-uniform'>
                    {showFormUniform && (
                        <>
                            <h3>{uniformSelected.id === '' ? "Crear uniforme" : "Editar uniforme"}</h3>
                            <UniformForm uniformSelected={uniformSelected}/>
                        </>
                    )}
                        
                </div>

            </section>

        </main>
    )
}