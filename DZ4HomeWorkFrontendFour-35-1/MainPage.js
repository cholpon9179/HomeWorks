import React from 'react'

const MainPage = ({ user }) => {
  return (
    <div>
      <h1>Добро пожаловать, {user.name} {user.lastname}! Мы тебя ждали.</h1>
    </div>
  )
}

export default MainPage
