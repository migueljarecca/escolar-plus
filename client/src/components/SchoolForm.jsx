import { useEffect, useRef, useState } from "react";
import { useSchool } from "../hooks/useSchool";

export const SchoolForm = ({ schoolSelected }) => {

    const {initialSchoolForm, handlerAddSchool, handlerUpdateSchool} = useSchool();

    const [schoolForm, setSchoolForm] = useState(initialSchoolForm);
    const [file, setFile] = useState(schoolForm.file);
    const fileInputRef = useRef();  // Crear la referencia

    const {id, name, address, schoolCode} = schoolForm;

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

    const onInputFileChange = (event) => {
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
        
        if (id === '') {
            //Enviamos al hook useSchool
            console.log("control form school create");

            // Mostrar los valores del FormData en consola
            // for (let pair of formData.entries()) {
            //     console.log(`${pair[0]}: ${pair[1]}`);
            // }
            handlerAddSchool(formData);            
        } else {
            handlerUpdateSchool(formData, schoolSelected.id);
            //Debugger para ver los datos
            // for (let [key, value] of formData.entries()) {
            //     console.log(key, value);
            //   }
        }

        setSchoolForm(initialSchoolForm);
        setFile(null);
        // Reset the file input through the DOM API using the ref
        fileInputRef.current.value = ""; 
    }

    return (
        <>
            <form className="form-school" onSubmit={onSubmitSchoolChange}>

                <h3>{id === '' ? "Crear colegio" : "Editar colegio"}</h3>

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
                    onChange={onInputFileChange}
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