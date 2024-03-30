import { useEffect, useState } from "react";
import { findAll, remove, save, updateSchool } from "../services/schoolService";

export const useSchool = () => {
    // Estado para almacenar los datos de las escuelas.
    const [schools, setSchools] = useState([]);

    // Función para cargar los datos de las escuelas.
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

    const handlerAddSchool = (school) => {
        console.log("control 1", school);
        save(school).then(() => {
            // Opcional: Actualizar el estado local con la nueva escuela.
        });
    };

    const handlerUpdateSchool = (school) => {
        updateSchool(school).then(() => {
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
        handlerAddSchool,
        handlerUpdateSchool,
        handlerRemoveSchool,
    };
};


