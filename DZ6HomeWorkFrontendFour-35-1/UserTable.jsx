import React from 'react'
import './UserTable.css'

const UserTable = ({ users, onDelete, onClear }) => {
  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Имя пользователя</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Вебсайт</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.username}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  <button onClick={() => onDelete(user)} className="btn-delete">Удалить</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Таблица пуста</td>
            </tr>
          )}
        </tbody>
      </table>
      {users.length > 0 && <button onClick={onClear} className="btn-clear-table">Очистить таблицу</button>}
    </div>
  )
}

export default UserTable
