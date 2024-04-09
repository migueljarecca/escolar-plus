import { useEffect, useState } from "react";
import { findAll, findById, remove, save, update } from "../services/schoolService";
import { useDispatch, useSelector } from '@react-redux';
import { addSchool, loadingSchools, removeSchool } from "../store/slices/schools/schoolsSlice";

export const useSchool = () => {

    const { schools } = useSelector(state => state.schools)
    const dispatch = useDispatch();

    const getSchools = async() => {
        try {
            const result = await findAll();
            dispatch(loadingSchools(result.data));
            
        } catch (error) {
            console.error(error);
        }
    }
    
    //Funcion para crear el colegio
    const handlerAddSchool = async(formData) => {
        const response = await save(formData);
        dispatch(addSchool({ ...response.data }));
        };
    };

    const handlerUpdateSchool = async(formData) => {
        const response = await update(formData);
        dispatch(updateSchool({ ...response.data }))
    };

    const handlerRemoveSchool = async(id) => {
        await remove(id);
        dispatch(removeSchool(id));
    };

    // Devuelve los datos de las escuelas junto con las funciones para modificarlos.
    return {
        
        getSchools,
        handlerUpdateSchool,
        handlerRemoveSchool,
    };
};


