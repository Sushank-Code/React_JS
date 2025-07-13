import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [{
        id: 1,
        msg: "Todo Msg",
        checked: false,
    }],
    addTodo: (id) => { },
    updateTodo: (id) => { },
    deleteTodo: (id) => { },
    toggleChecked: (id) => { }
})

export const TodoProvider = todoContext.Provider

export default function useTodo() {
    return useContext(todoContext)
}