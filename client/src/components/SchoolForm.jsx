import { useEffect, useState } from "react";
import { useSchool } from "../hooks/useSchool";

export const SchoolForm = ({ schoolSelected }) => {

    const {initialSchoolForm, handlerAddSchool, handlerUpdateSchool} = useSchool();

    const [schoolForm, setSchoolForm] = useState(initialSchoolForm);
    const [file, setFile] = useState(null);

    const {name, address, schoolCode} = schoolForm;

    //Colegio seleccionado recibimos del RegisterSchoolPage
    useEffect(() => {
        setSchoolForm({ ...schoolSelected })
    },[schoolSelected]);

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
        formData.append('id', schoolSelected.id);

        if (file) {
            formData.append('file', file);
        }
        
        if (schoolSelected.id == null) {
            //Enviamos al hook useSchool
            handlerAddSchool(formData);            
        } else {
            handlerUpdateSchool(formData, schoolSelected.id);
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
              }
        }

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