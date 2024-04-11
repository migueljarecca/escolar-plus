import { configureStore } from '@reduxjs/toolkit';
import { schoolSlice } from './slices/schools/schoolsSlice';
import { uniformSlice } from './slices/schools/uniformSlice';


export const store = configureStore({
    reducer: {
        schools: schoolSlice.reducer,
        uniforms: uniformSlice,reducer,
    }
});