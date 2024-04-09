import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { SchoolForm } from "../components/SchoolForm"
import { useParams } from "react-router-dom";
import { useSchool } from "../hooks/useSchool";

export const RegisterSchoolPage = () => {

    const { schools, initialSchoolForm  } = useSchool();
    const [schoolSelected, setSchoolSelected] = useState(initialSchoolForm);

    const { id } = useParams();
    console.log("control de id ", id);

    useEffect(() => {
        if (id) {
            const school = schools.find(s => s.id == id)
            setSchoolSelected(school);
        } else {
            setSchoolSelected(initialSchoolForm);
        }
    },[id]);


    return (
        <>
            {/* <Header /> */}

            <div className="container-form-School">
                <h3>{schoolSelected.id > 0 ? 'Editar' : 'Registrar'} Colegio</h3>
                
            </div>

            <SchoolForm schoolSelected={schoolSelected}></SchoolForm>

        </>
    )
}