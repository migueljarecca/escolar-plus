
import { useSchool } from './../../hooks/useSchool';
import { SchoolListAdmin } from './SchoolListAdmin';
import { SchoolForm } from './../SchoolForm';
import { useEffect, useState } from 'react';

export const Schools = () => {

    const{ getSchools, schools, initialSchoolForm } = useSchool();
    const [schoolSelected, setSchoolSelected] = useState(initialSchoolForm);
    const [showFormSchool, setShowFormSchool] = useState(false);

    useEffect(() => {
        getSchools()
    },[]);


    const handlerSelectedSchool = (school) => {
        console.log(" school selected " +school.name)
        setSchoolSelected(school);
        setShowFormSchool(true);
        
    }
    


    return (
        <main className='main-school-admin'>
            <div className="div-school-admin">
                <h2>Colegios</h2>

                <button 
                    onClick={() =>{ 
                        setShowFormSchool(!showFormSchool)
                        if (showFormSchool) { // Si ya está visible, al ocultarlo, limpiamos el formulario
                            setSchoolSelected(initialSchoolForm);
                        }
                    }}
                    >
                    {showFormSchool ? 'Ocultar formulario' : 'Nuevo colegio'}
                </button>

            </div>

            <div className="div-school-list-admin">

                <SchoolListAdmin 
                    schools={schools}
                    handlerSelectedSchool={handlerSelectedSchool}
                    />
                {showFormSchool && <SchoolForm schoolSelected={schoolSelected}/>}
                {/* <SchoolForm /> */}

            </div>


        </main>
    )
}