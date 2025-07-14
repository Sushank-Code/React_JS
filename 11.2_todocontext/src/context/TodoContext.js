import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [{
        id: 1,
        todo: "Todo Msg",
        checked: false, 
    }],
    addTodo: (todo) => { },
    updateTodo: (id,todo) => { },
    deleteTodo: (id) => { },
    toggleChecked: (id) => { }
})

export const TodoProvider = todoContext.Provider

export default function useTodo() {
    return useContext(todoContext)
}