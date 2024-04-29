import React, { useState } from 'react'
import UserForm from './UserForm'
import UserTable from './UserTable'
import './App.css' // Импорт файла стилей

const App = () => {
  const [users, setUsers] = useState([])

  const addUser = (userData) => {
    setUsers([...users, userData])
  }

  const deleteUser = (userToDelete) => {
    const updatedUsers = users.filter((user) => user !== userToDelete)
    setUsers(updatedUsers)
  }

  const clearTable = () => {
    setUsers([])
  }

  return (
    <div className="app-container">
      <h1>Управление пользователями</h1>
      <div className="form-section">
        <h2>Добавить пользователя</h2>
        <UserForm onSubmit={addUser} />
      </div>
      <div className="table-section">
        <h2>Список пользователей</h2>
        <UserTable users={users} onDelete={deleteUser} onClear={clearTable} />
      </div>
    </div>
  )
}

export default App
