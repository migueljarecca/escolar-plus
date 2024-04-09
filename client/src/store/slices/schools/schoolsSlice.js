import { createSlice } from '@reduxjs/toolkit';


export const schoolSlice = createSlice({

    name: 'schools',
    initialState: {
        schools: [],
    },
    reducers: {
        addSchool: (state, action) => {
            state.schools = [
                ...state.schools,
                {
                    ...action.payload,
                }
            ];
        },
        removeSchool: (state, action) => {
            state.schools = state.schools.filter(school => school.id !== action.payload);
        },
        updateSchool: (state, action) => {
            state.schools = state.schools.map(s => {
                if (s.id === action.payload.id) {
                    return {
                        ...action.payload
                    };
                }
                return s;
            });
        },
        loadingSchools: (state, action) => {
            state.schools = action.payload
        }
    }
});

export const {
    addSchool,
    updateSchool,
    removeSchool,
    loadingSchool,
} = schoolSlice.actions;