import { useState } from "react";
import { useSchool } from "../hooks/useSchool";

export const SchoolForm = (initialSchoolForm) => {

    const {handlerAddSchool} = useSchool();

    const [schoolForm, setSchoolForm] = useState(initialSchoolForm);

    const {id, name, address, schoolCode} = schoolForm;

    const onInputSchoolChange = ({target}) => {
        const {name, value} = target;

        setSchoolForm({
            ...schoolForm,
            [name]: value,
        });
    }

    const onSubmitSchoolChange = (event) => {
        event.preventDefault();

        if (id == '') {
            handlerAddSchool(schoolForm);
        } else {
            console.log("error");
        }
    }

    return (
        <>
            <form onSubmit={onSubmitSchoolChange}>

                <input 
                    type="text"
                    placeholder="nombre"
                    value={name}
                    onChange={onInputSchoolChange}
                />
                <input 
                    type="text"
                    placeholder="dirección"
                    value={address}
                    onChange={onInputSchoolChange}
                />
                <input 
                    type="text"
                    placeholder="codigo"
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