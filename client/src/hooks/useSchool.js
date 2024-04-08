import { useEffect, useState } from "react";
import { findAll, findById, remove, save, updateSchool } from "../services/schoolService";

export const useSchool = () => {
    // Estado para almacenar los datos de las escuelas.
    const [schools, setSchools] = useState([]);
    const [school, setSchool] = useState(null);

    // Función para cargar los datos de las escuelas desde el backend.
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await findAll();
                setSchools(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    // Función para traer un solo colegio por ID
    const fetchSchoolById = async (id) => {
        try {
            const response = await findById(id);
            setSchool(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    //Funcion para crear el colegio
    const handlerAddSchool = (formData) => {
        console.log("control 1", formData);
        save(formData).then(() => {
            // Opcional: Actualizar el estado local con la nueva escuela.
        });
    };

    const handlerUpdateSchool = (formData) => {
        updateSchool(formData).then(() => {
            // Opcional: Actualizar el estado local con los datos actualizados de la escuela.
        });
    };

    const handlerRemoveSchool = (id) => {
        remove(id).then(() => {
            // Opcional: Actualizar el estado local para reflejar que la escuela ha sido eliminada.
        });
    };

    // Devuelve los datos de las escuelas junto con las funciones para modificarlos.
    return {
        schools,
        school,

        fetchSchoolById,
        handlerAddSchool,
        handlerUpdateSchool,
        handlerRemoveSchool,
    };
};


