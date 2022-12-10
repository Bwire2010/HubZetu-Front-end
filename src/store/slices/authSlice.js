import { createSlice } from "@reduxjs/toolkit";
localStorage.setItem('isAuthenticated', false)

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        isAuthenticated: false
    },
    reducers: {
        setAuthentication: (state) => {
            state.isAuthenticated = !state.isAuthenticated
            if (state.isAuthenticated) {
                localStorage.setItem('isAuthenticated', true)
            } else {
                localStorage.setItem('isAuthenticated', false)
            }
        }
    }
})

export const { setAuthentication } = authSlice.actions
export default authSlice.reducer