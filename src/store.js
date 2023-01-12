import {configureStore} from '@reduxjs/toolkit'
import modeReducer from './reducers/modeSlice'
import tasksReducer from './reducers/taskSlice'

export default configureStore({
    reducer : {
        mode : modeReducer,
        tasks  : tasksReducer
    }
})