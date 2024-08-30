import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    showAuth: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleShowAuth(state) {
            state.showAuth = !state.showAuth
        },
        setAuthenticated(state, action) {
            state.isAuthenticated = action.payload
        },
        clearAuth(state) {
            state.isAuthenticated = false
        },
    },
})

export const { toggleShowAuth, setAuthenticated, clearAuth } = authSlice.actions
export default authSlice.reducer
