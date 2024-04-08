import { useState } from "react";
import { useSchool } from "../hooks/useSchool";

export const SchoolForm = ({ schoolSelect }) => {

    const {handlerAddSchool} = useSchool();

    const [schoolForm, setSchoolForm] = useState(schoolSelect);
    const [file, setFile] = useState(null);

    const {name, address, schoolCode} = schoolForm;

    const onInputSchoolChange = ({target}) => {
        const {name, value} = target;

        setSchoolForm({
            ...schoolForm,
            [name]: value,
        });
    }

    const onFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const onSubmitSchoolChange = (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('address', address);
        formData.append('schoolCode', schoolCode);

        if (file) {
            formData.append('file', file);
        }
        
        //Enviamos al hook useSchool
        handlerAddSchool(formData);
       
        setSchoolForm(schoolSelect);
        setFile(null);
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
                <input 
                    type="file"
                    name="file"
                    onChange={onFileChange}
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