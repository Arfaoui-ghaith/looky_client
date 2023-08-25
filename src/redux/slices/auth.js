import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: localStorage.getItem('lookyUserInfo') ? JSON.parse(localStorage.getItem('lookyUserInfo')) : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('lookyUserInfo', JSON.stringify(action.payload))
        },
        clearCredentials: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('lookyUserInfo');
        }
    }
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;