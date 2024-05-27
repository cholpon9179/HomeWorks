import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const UserForm = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')
  const [profile, setProfile] = useState('public')
  const dispatch = useDispatch()

  const handleSave = () => {
    dispatch({ type: 'UPDATE_USER', payload: { name, age, gender } })
    dispatch({ type: 'UPDATE_PROFILE', payload: profile })
  }

  return (
    <div>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Age:</label>
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <label>Gender:</label>
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <label>Profile:</label>
      <select value={profile} onChange={(e) => setProfile(e.target.value)}>
        <option value="public">Public</option>
        <option value="private">Private</option>
      </select>
      <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default UserForm