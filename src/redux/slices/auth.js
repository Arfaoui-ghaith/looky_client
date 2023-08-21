import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userinfo: localStorage.getItem('lookyUserInfo') ? JSON.parse(localStorage.getItem('lookyUserInfo')) : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.userinfo = action.payload;
            localStorage.setItem('lookyUserInfo', JSON.stringify(action.payload))
        },
        clearCredentials: (state, action) => {
            state.userinfo = null;
            localStorage.removeItem('lookyUserInfo');
        }
    }
});

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;