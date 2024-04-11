import { createSlice } from '@reduxjs/toolkit';

export const initialUniformForm = {
    id: '',
    price: '',
    product: '',
    size: '',
    gender: '',
    schoolId: '',
}

export const uniformSlice = createSlice({

    name: 'uniforms',
    initialState: {
        uniforms: [],
        uniformSelected: initialUniformForm,
    },
    reducers: {
        addUniform: (state, action) => {
            state.uniforms = [
                ...state.uniforms, {
                    ...action.payload,
                }
            ];
        },
        removeUniform: (state, action) => {
            
        }
    }
});

export const {


} = uniformSlice.actions;
 