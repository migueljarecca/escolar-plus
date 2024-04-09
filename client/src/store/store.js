import { configureStore } from '@reduxjs/toolkit';
import { schoolSlice } from './slices/schools/schoolsSlice';


export const store = configureStore({
    reducer: {
        schools: schoolSlice.reducer
    }
});