import { createSlice } from '@reduxjs/toolkit';

export const initialUniformForm = {
    id: '',
    price: '',
    product: '',
    size: '',
    gender: '',
    schoolId: '',
}

export const initialFilter = {
    category: 'all',
    minPrice: '0',
}

export const uniformSlice = createSlice({

    name: 'uniforms',
    initialState: {
        uniforms: [],
        uniformSelected: initialUniformForm,
        filteredUniforms: [],
        filterProd: initialFilter,
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
            // state.uniforms = state.uniforms.filter(uniform => uniform.id !== action.payload);
            state.filteredUniforms = state.filteredUniforms.filter(uni => uni.id !== action.payload);
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
        },
        //FILTRO para uniformes
        loadingUniformBySchoolId: (state, action) => {
            state.filteredUniforms = action.payload
        },
        // Limpia la lista de uniformes filtrados
        clearFilteredUniforms: (state) => {
            state.filteredUniforms = [];
        },
        //ESTADO PARA LOS FILTROS DE PRODUCTOS
        filterProduct: (state, action) => {
            console.log('filterProduct action.payload:', action.payload);
            state.filterProd = action.payload
        }

    }
});



export const {
    addUniform,
    removeUniform,
    updateUniform,
    loadingUniform,

    loadingUniformBySchoolId,
    clearFilteredUniforms,

    filterProduct,

} = uniformSlice.actions;
 