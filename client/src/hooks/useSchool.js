import { useEffect, useState } from "react";
import { findAll, remove, save, updateSchool } from "../services/schoolService"

export const useSchool = () => {

    const handlerAddSchool = (school) => {
        console.log("control 1", school);
        save(school);
    }

    const getSchools = () => {

        const [data, setData] = useState(null);

        useEffect(() => {
            const fetchData = async() => {
                try {
                    const response = await findAll();
                    setData(response);
                } catch (error) {
                    console.log(error);
                }
            }
            fetchData();
        },[]);

        return data;    
    }

    const handlerUpdateSchool = (school) => {
        updateSchool(school);
    }

    const handlerRemoveSchool = (id) => {
        remove(id);
    }

    return (
        {
            handlerAddSchool,
            getSchools,
            handlerUpdateSchool,
            handlerRemoveSchool,
        }
    )
}

