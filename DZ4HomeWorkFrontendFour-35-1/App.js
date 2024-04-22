import React, { useState } from 'react'
import MainPage from './MainPage'
import ErrorPage from './ErrorPage'

const App = () => {
  const [user, setUser] = useState(null)

  const handleUserInput = () => {
    const name = prompt('Введите ваше имя:')
    const lastname = prompt('Введите вашу фамилию:')

    if (name && lastname) {
      setUser({ name, lastname })
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <button style={{ padding: '15px 30px', fontSize: '18px', fontWeight: 'bold', borderRadius: '8px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }} onClick={handleUserInput}>
        Ввести имя и фамилию
      </button>
      {user ? (
        user.name === 'John' && user.lastname === 'Johns' ? (
          <MainPage user={user} />
        ) : (
          <ErrorPage user={user} />
        )
      ) : null}
    </div>
  )
}

export default App
