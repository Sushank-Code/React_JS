import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'


const AddTodo = () => {
    const [Input, setInput] = useState('')
    const dispatch = useDispatch()

    const add = (e) =>{
        e.preventDefault()
        dispatch(addTodo(Input))
        setInput('')
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={Input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}

export default AddTodo