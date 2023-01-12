import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
    name: 'mode',
    initialState: {
        value: true
    },
    reducers: {
        toggle: state => {
            state.value = !(state.value)
        }
    }
})

export const { toggle } = modeSlice.actions
export const mode = state => state.mode.value

export default modeSlice.reducer