import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

const Todo = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  // Local state for editing
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  // Start editing a todo
  const startEdit = (todo) => {
    setEditingId(todo.id)
    setEditText(todo.text)
  }

  // Save the edited todo
  const saveEdit = () => {
    if (editText.trim()) {
      dispatch(updateTodo({
        id: editingId,
        text: editText.trim()
      }))
    }
    setEditingId(null)
    setEditText('')
  }

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null)
    setEditText('')
  }

  return (
    <>
      <div>Todo List</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 p-2 border-b">
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 px-2 py-1 border rounded"
                  autoFocus
                />
                <button
                  onClick={saveEdit}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="bg-gray-500 text-white px-3 py-1 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              // VIEW MODE - Show text and edit/delete buttons
              <>
                <span className="flex-1">{todo.text}</span>
                <button
                  onClick={() => startEdit(todo)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo