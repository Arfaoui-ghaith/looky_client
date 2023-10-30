import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    clearMember
} = dataSlice.actions;

export default dataSlice.reducer;