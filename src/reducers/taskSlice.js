import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        value: []
    },
    reducers: {
        addTask: (state, action) => {
            state.value = [...state.value, action.payload]
        },
        // deleteTask : (state,action) => {
        //     state.value = !(state.value)
        // }
    }
})

export const { addTask } = tasksSlice.actions
export const tasks = state => state.tasks.value

export default tasksSlice.reducer