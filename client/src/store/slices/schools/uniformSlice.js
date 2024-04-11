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
            state.uniforms = state.uniforms.filter(uniform => uniform.id !== action.payload);
        },
        updateUniform: (state, action) => {
            state.uniforms = state.uniforms.map(u => {
                if (u.id === action.payload.id) {
                    return {
                        ...action.payload
                    };
                }
                return u;
            });
        },
        loadingUniform: (state, action) => {
            state.uniforms = action.payload
        }

    }
});

export const {
    addUniform,
    removeUniform,
    updateUniform,
    loadingUniform,

} = uniformSlice.actions;
 