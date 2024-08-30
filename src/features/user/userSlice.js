import { createSlice } from '@reduxjs/toolkit'

const loadUserFromStorage = () => {
    try {
        const user = sessionStorage.getItem('user')
        return user
            ? JSON.parse(user)
            : {
                  userid: '',
                  fullname: '',
                  address: '',
              }
    } catch (error) {
        console.error('Could not load user from storage:', error)
        return {
            userid: '',
            fullname: '',
            address: '',
        }
    }
}

const saveUserToStorage = (user) => {
    try {
        const serializedUser = JSON.stringify(user)
        sessionStorage.setItem('user', serializedUser)
    } catch (error) {
        console.error('Could not save user to storage:', error)
    }
}

const initialState = loadUserFromStorage()

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserId(state, action) {
            state.userid = action.payload
            saveUserToStorage(state)
        },
        setUserFullname(state, action) {
            state.fullname = action.payload
            saveUserToStorage(state)
        },
        setUserAddress(state, action) {
            state.address = action.payload
            saveUserToStorage(state)
        },
        clearUser(state) {
            state.user = { id: null, name: '', address: '' }
            saveUserToStorage(state)
        },
    },
})

export const getUser = (state) => state.user

export const { clearUser, setUserId, setUserAddress, setUserFullname } =
    userSlice.actions
export default userSlice.reducer
