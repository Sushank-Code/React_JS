import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todo = () => {
   const todos =  useSelector((state) => state.todos)
   const dispatch = useDispatch()
  return (
    <>
    <div>Todo</div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}
        <button onClick={() => dispatch(removeTodo(todo.id))} className='bg-amber-700 text-white text-2xl p-1.5 ml-[220px]'> X </button>
        </li>
      ))}

    </>
  )
}

export default Todo