import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/authSlice'
import modeReducer from './reducers/modeSlice'
import tasksReducer from './reducers/taskSlice'

export default configureStore({
    reducer: {
        mode: modeReducer,
        tasks: tasksReducer,
        auth: authReducer
    }
})