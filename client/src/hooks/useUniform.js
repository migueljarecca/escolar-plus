import { create, findAll, getUniformBySchoolId, remove, update } from "../services/uniformService"
import { useSelector, useDispatch } from 'react-redux';
import { addUniform, initialUniformForm, loadingUniform, loadingUniformBySchoolId, 
        removeUniform, updateUniform, filterProduct } from "../store/slices/schools/uniformSlice";

export const useUniform = () => {

    const { uniforms } = useSelector(state => state.uniforms);
    const { filteredUniforms } = useSelector(state => state.uniforms);
    
    const dispatch = useDispatch();

    const getAllUniform = async() => {

        try {
            const result = await findAll();
            dispatch(loadingUniform(result.data));    

        } catch (error) {
            console.error(error);
        } 
    };

    const handlerAddUniform = async(formData) => {
        const result = await create(formData);
        dispatch(addUniform({ ...result.data }));
    };

    const handlerUpdateUniform = async(FormData, id) => {
        const result = await update(FormData, id);
        dispatch(updateUniform( { ...result.data }))
    };

    const handlerRemoveUniform = async(id) => {
        await remove(id);
        dispatch(removeUniform(id));
    }

    //FILTRO traer todos los uniformes por ID de colegio
    const uniformBySchoolId = async(id) => {
        const result = await getUniformBySchoolId(id);
        dispatch(loadingUniformBySchoolId(result.data));
    }

    //FILTRO por producto

    const handlerFilterProduct = (filter) => {
        dispatch(filterProduct(filter));
    }

    return (
        {
            uniforms,
            initialUniformForm,
            filteredUniforms,

            getAllUniform,
            handlerAddUniform,
            handlerUpdateUniform,
            handlerRemoveUniform,

            uniformBySchoolId,
            handlerFilterProduct,

        }
    );
}

