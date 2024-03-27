import { useState } from "react";
import { useSchool } from "../hooks/useSchool";

export const SchoolForm = ({initialSchoolForm}) => {

    const {handlerAddSchool} = useSchool();

    const [schoolForm, setSchoolForm] = useState(initialSchoolForm);

    const {name, address, schoolCode} = schoolForm;

    const onInputSchoolChange = ({target}) => {
        const {name, value} = target;

        setSchoolForm({
            ...schoolForm,
            [name]: value,
        });
    }

    const onSubmitSchoolChange = (event) => {
        event.preventDefault();
        
        handlerAddSchool(schoolForm);
       
        setSchoolForm(initialSchoolForm);
    }

    return (
        <>
            <form onSubmit={onSubmitSchoolChange}>

                <input 
                    type="text"
                    placeholder="nombre"
                    name="name"
                    value={name}
                    onChange={onInputSchoolChange}
                />
                <input 
                    type="text"
                    placeholder="dirección"
                    name="address"
                    value={address}
                    onChange={onInputSchoolChange}
                />
                <input 
                    type="text"
                    placeholder="codigo"
                    name="schoolCode"
                    value={schoolCode}
                    onChange={onInputSchoolChange}
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