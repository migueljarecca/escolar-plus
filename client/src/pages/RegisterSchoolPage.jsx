import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { SchoolForm } from "../components/SchoolForm"
import { useParams } from "react-router-dom";
import { useSchool } from "../hooks/useSchool";

export const RegisterSchoolPage = ({ initialSchoolForm }) => {

    const { school, fetchSchoolById } = useSchool();
    const [schoolSelect, setSchoolSelect] = useState(initialSchoolForm);

    const { id } = useParams();
    console.log("control de id ", id);

    useEffect(() => {
        if (id) {
            fetchSchoolById(id);
        }
    }, [id, fetchSchoolById]); // Solo reacciona a los cambios de ID
    
    useEffect(() => {
        // Esta verificación asegura que no intentemos usar un `school` nulo o indefinido
        if (school && school.id != null) { // Asegúrate de ajustar esta condición según sea necesario
            console.log("control de school ", school);
            setSchoolSelect(school);
            
        } else {
            setSchoolSelect(initialSchoolForm);
        }
    }, [school]); // Este useEffect reacciona a los cambios en `school`    

    // console.log("control de se llega aqui" + schoolSelect);

    return (
        <>
            {/* <Header /> */}

            <div className="container-form-School">
                <h3>{schoolSelect.id > 0 ? 'Editar' : 'Registrar'} Colegio</h3>
                
            </div>

            <SchoolForm schoolSelect={schoolSelect}></SchoolForm>

        </>
    )
}