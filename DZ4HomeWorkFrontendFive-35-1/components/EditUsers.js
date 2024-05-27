import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const EditUsers = () => {
  const users = useSelector(state => state.users.users)
  const currentUser = useSelector(state => state.users.currentUser)
  const dispatch = useDispatch()

  const selectUser = (user) => {
    dispatch({ type: 'SET_CURRENT_USER', payload: user })
  }

  const handleEdit = (e) => {
    const { name, value } = e.target
    dispatch({
      type: 'UPDATE_USER_DETAILS',
      payload: { ...currentUser, [name]: value }
    })
  }

  return (
    <div>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => selectUser(user)}>
            {user.first_name}
          </li>
        ))}
      </ul>
      {currentUser && (
        <div>
          <input name="first_name" value={currentUser.first_name} onChange={handleEdit} />
          <input name="email" value={currentUser.email} onChange={handleEdit} />
          <input name="gender" value={currentUser.gender} onChange={handleEdit} />
          <input name="birth_date" value={currentUser.birth_date} onChange={handleEdit} />
        </div>
      )}
    </div>
  )
}

export default EditUsers // Ensure correct export
