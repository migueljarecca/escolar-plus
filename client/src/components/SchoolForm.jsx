import { useEffect, useRef, useState } from "react";
import { useSchool } from "../hooks/useSchool";

export const SchoolForm = ({ schoolSelected }) => {

    const {initialSchoolForm, handlerAddSchool, handlerUpdateSchool} = useSchool();

    const [schoolForm, setSchoolForm] = useState(initialSchoolForm);
    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const fileInputRef = useRef();  // Crear la referencia

    const {id, name, address, schoolCode} = schoolForm;

    // console.log("contreo de schoolform "+JSON.stringify(schoolForm, null, 2));

    //Colegio seleccionado recibimos del RegisterSchoolPage
    useEffect(() => {
        setSchoolForm({ ...schoolSelected })

        // Si el colegio tiene una imagen, crear la previsualización
        if (schoolSelected.image && schoolSelected.image.content) {
            setImagePreview(`data:${schoolSelected.image.mime};base64,${schoolSelected.image.content}`);
        } else {
            setImagePreview(null); // Si no hay imagen, limpiamos la vista previa
        }

    },[schoolSelected]);

    const onInputSchoolChange = ({target}) => {
        const {name, value} = target;

        setSchoolForm({
            ...schoolForm,
            [name]: value,
        });
    }

    const onInputFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            // Vista previa de la nueva imagen seleccionada
            setImagePreview(URL.createObjectURL(selectedFile));
        }
    }

    const onSubmitSchoolChange = (event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('name', name);
        formData.append('address', address);
        formData.append('schoolCode', schoolCode);
        formData.append('id', schoolSelected.id);

        if (file) {
            // Solo agregar el archivo si se selecciona uno nuevo
            formData.append('file', file); 
        } else if (schoolSelected.image) {
            // Si no se selecciona, mantener la imagen existente (enviar un ID)
            formData.append('fileId', schoolSelected.image.id); 
        }
        
        if (id === '') {
            //Enviamos al hook useSchool
            console.log("control form school create");

            handlerAddSchool(formData);            
        } else {
            handlerUpdateSchool(formData, schoolSelected.id);
        }

        setSchoolForm(initialSchoolForm);
        setFile(null);
        // Reset the file input through the DOM API using the ref
        fileInputRef.current.value = "";
        // Limpiar la vista previa después de enviar
        setImagePreview(null); 


    }

    return (
        <>
            <form className="form-school" onSubmit={onSubmitSchoolChange}>

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

                {/* Mostrar la previsualización de la imagen si existe */}
                {imagePreview && (
                    <div>
                        <img src={imagePreview} alt="Vista previa de la imagen" style={{ width: '150px', height: '150px' }} />
                    </div>
                )}

                <input 
                    type="file"
                    name="file"
                    onChange={onInputFileChange}
                    ref={fileInputRef} // Vinculamos el input al ref
                />
                
                <button
                    type="submit"
                    >
                    {id === '' ? "Crear" : "Actualizar"}
                </button>
            </form>
        </>
    )
}