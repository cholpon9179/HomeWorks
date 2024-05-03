import React, { useEffect, useState } from 'react'
import './TodosPage.css'

function TodosPage(props) {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const [editingTodoId, setEditingTodoId] = useState(null)

    async function getTodos() {
        const response = await fetch('http://localhost:8000/todos')
        const data = await response.json()
        setTodos(data)
    }

    async function createTodo(event) {
        event.preventDefault()

        if (input.trim() === '') {
            alert('Please enter Todo')
            return
        }

        const todo = {
            title: input.trim(),
            status: false
        }

        const response = await fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo)
        })

        if (response.ok) {
            setInput('')
            getTodos()
        }
    }

    async function deleteTodo(id) {
        const response = await fetch(`http://localhost:8000/todos/${id}`, {
            method: 'DELETE'
        })

        if (response.ok) {
            setTodos(todos.filter(todo => todo.id !== id))
        }
    }

    async function changeStatus(id, status) {
        const updatedTodo = {
            status: status
        }

        const response = await fetch(`http://localhost:8000/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTodo)
        })

        if (response.ok) {
            const updatedTodos = todos.map(todo =>
                todo.id === id ? { ...todo, status: status } : todo
            )
            setTodos(updatedTodos)
        }
    }

    async function updateTodo(id, newTitle) {
        const updatedTodo = {
            title: newTitle.trim(),
            status: false
        }

        const response = await fetch(`http://localhost:8000/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedTodo)
        })

        if (response.ok) {
            setEditingTodoId(null)
            getTodos()
        }
    }

    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div className="todos-container">
            <h1 className="todos-header">Todos</h1>
            <form onSubmit={createTodo} className="todo-form">
                <input
                    value={input}
                    type="text"
                    onChange={(event) => setInput(event.target.value)}
                    className="todo-input"
                    placeholder="Enter a new todo..."
                />
                <button className="add-button" type="submit">Add Todo</button>
            </form>
            {todos.map((todo) => (
                <div key={todo.id} className="todo-item">
                    {editingTodoId === todo.id ? (
                        <div className="edit-container">
                            <input
                                type="text"
                                value={todo.title}
                                onChange={(e) => {
                                    const newTitle = e.target.value
                                    setTodos((prevTodos) =>
                                        prevTodos.map((t) =>
                                            t.id === todo.id ? { ...t, title: newTitle } : t
                                        )
                                    )
                                }}
                                className="edit-input"
                            />
                            <button onClick={() => updateTodo(todo.id, todo.title)} className="save-button">
                                Save
                            </button>
                        </div>
                    ) : (
                        <div className="todo-content">
                            <input
                                type="checkbox"
                                checked={todo.status}
                                onChange={(event) => changeStatus(todo.id, event.target.checked)}
                            />
                            <span
                                className={`todo-text ${todo.status ? 'completed' : ''}`}
                            >
                                {todo.title}
                            </span>
                            <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                                Delete
                            </button>
                            <button onClick={() => setEditingTodoId(todo.id)} className="update-button">
                                Update
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default TodosPage
