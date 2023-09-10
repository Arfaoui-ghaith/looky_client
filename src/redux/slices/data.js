import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    service: localStorage.getItem('lookySelectedService') ? JSON.parse(localStorage.getItem('lookySelectedService')) : null
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
        }
    }
});

export const { setService, clearService } = dataSlice.actions;

export default dataSlice.reducer;