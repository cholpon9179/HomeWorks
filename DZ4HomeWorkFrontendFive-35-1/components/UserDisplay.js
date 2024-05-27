import React from 'react'
import { useSelector } from 'react-redux'

const UserDisplay = () => {
  const user = useSelector((state) => state.user.user)
  const profile = useSelector((state) => state.user.profile)

  return (
    <div>
      <p>Ваше имя: {user.name}</p>
      <p>Ваш возраст: {user.age}</p>
      <p>Ваш пол: {user.gender}</p>
      <p>Профиль: {profile}</p>
    </div>
  )
}

export default UserDisplay
