//action type
const ADD_TODO = 'ADD_TODO'
const DELETE_TODO = 'DELETE_TODO'
    //reducer
export default function(state, action) {
    if (!state) {
    	console.log("init")
        state = { todoList: [] }
    }
    switch (action.type) {
        case ADD_TODO:
        // console.log("click")
            return {
                todoList: [...state.todoList, action.todoItem] //
            }
        case DELETE_TODO:
            return {
                todoList: [ //
                    ...state.todoList.slice(0, action.order),
                    ...state.todoList.slice(action.order + 1)
                ]
            }
        default:
            return state
    }
}
//action creators
export const addTodo = (todoItem) => {
    return { type: ADD_TODO, todoItem }
}

export const deleteTodo = (order) => {
    return { type: DELETE_TODO, order }
}
