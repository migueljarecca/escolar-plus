import { findAll } from "../services/uniformService"
import { useSelector, useDispatch } from 'react-redux';

export const useUniform = () => {

    const { uniforms } = useSelector(state => state.uniforms);
    const dispatch = useDispatch();

    const getAllUniform = async() => {

        try {
            const result = await findAll();
            dispatch();    

        } catch (error) {
            console.error(error);
        }
        
    }
}

return (
    {
        uniforms,
        getAllUniform,
    }
);