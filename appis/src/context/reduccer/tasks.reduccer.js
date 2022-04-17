// no es necesario tener un estado inicial 
import { _ADD_TASK, _DELETE_TASK, _GET_TASKS, _UPDATE_TASK } from '../actions/tasks.actions'

export const StateInitail = {
    tasks: [],
    selectedTask: {},
    loading: false,
    error: null,
    owner: [
        {
            name: "david",
            lastname: "lezama",
            correo: "io.lezama.david@outlook.com"
        }
    ]

}




export const TaskReduccer = (state = StateInitail, action) => {
    switch (action.type) {

        case _ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }

        case _DELETE_TASK: {
            const newTasks = state.tasks.filter(task => task.id !== action.payload.id)
            const isEqualtask = state.selectedTask.id === action.payload.id

            if (isEqualtask) return {
                ...state,
                tasks: newTasks,
                selectedTask: {}
            }

            return {
                ...state,
                tasks: newTasks
            }

        }

        case _GET_TASKS: {
            const TaskFind = state.tasks.find(task => task.id === action.payload.id)

            return {
                ...state,
                selectedTask: TaskFind
            }
        }

        case _UPDATE_TASK:
            return {

            }
        default: return {
            ...state,
        }
    }

}
