import { createSlice } from '@reduxjs/toolkit';

export const initialSchoolForm = {
    id: '',
    name:'',
    address: '',
    schoolCode: '',
  }

export const schoolSlice = createSlice({

    name: 'schools',
    initialState: {
        schools: [],
        schoolSelected: initialSchoolForm
    },
    reducers: {
        addSchool: (state, action) => {
            state.schools = [
                ...state.schools,
                {
                    ...action.payload,
                }
            ];
            state.schoolSelected = initialSchoolForm;
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
            state.schoolSelected = initialSchoolForm;
        },
        loadingSchools: (state, action) => {
            state.schools = action.payload
        },
        // onSchoolSelectedForm: (state, action) => {
        //     state.schoolSelected = action.payload
        // }
    }
});

export const {
    addSchool,
    updateSchool,
    removeSchool,
    loadingSchools,
    // onSchoolSelectedForm,
} = schoolSlice.actions;