import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: {
            email: '',
            password: ''
        },
        authState: {
            signedIn: false
        }
    },
    reducers: {
        signup: (state, action) => {

            state.value = {
                email: action.payload.email,
                password: action.payload.password
            };
        },
        signin: (state, action) => {

            state.value = {
                email: action.payload.email,
                password: action.payload.password

            }

        },
        signout: (state) => {
            state.value = {
                email: '',
                password: ''
            }
        }

    }
})

export const { signup, signin, signout } = authSlice.actions
export const authObj = state => state.auth.value

export default authSlice.reducer