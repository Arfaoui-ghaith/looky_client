import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appointment: localStorage.getItem('lookySelectedAppointment') ? JSON.parse(localStorage.getItem('lookySelectedAppointment')) : null,
    service: localStorage.getItem('lookySelectedService') ? JSON.parse(localStorage.getItem('lookySelectedService')) : null,
    member: localStorage.getItem('lookySelectedMember') ? JSON.parse(localStorage.getItem('lookySelectedMember')) : null,
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setService: (state, action) => {
            state.service = action.payload;
            localStorage.setItem('lookySelectedService', JSON.stringify(action.payload))
        },
        clearService: (state, action) => {
            state.service = null;
            localStorage.removeItem('lookySelectedService');
        },
        setAppointment: (state, action) => {
            state.service = action.payload;
            localStorage.setItem('lookySelectedAppointment', JSON.stringify(action.payload))
        },
        clearAppointment: (state, action) => {
            state.service = null;
            localStorage.removeItem('lookySelectedAppointment');
        },
        setMember: (state, action) => {
            state.member = action.payload;
            localStorage.setItem('lookySelectedMember', JSON.stringify(action.payload))
        },
        clearMember: (state, action) => {
            state.member = null;
            localStorage.removeItem('lookySelectedMember');
        }
    }
});

export const {
    setService,
    clearService,
    setMember,
    setAppointment,
    clearAppointment,
    clearMember
} = dataSlice.actions;

export default dataSlice.reducer;