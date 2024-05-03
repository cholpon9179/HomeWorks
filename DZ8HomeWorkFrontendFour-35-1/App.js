import React from 'react'
import { ModalProvider } from './contexts/ModalContext'
import MainPage from './components/MainPage'
import About from './components/About'
import UserForm from './components/UserForm'
import './App.css'

const App = () => {
    return (
      <ModalProvider>
        <div className="container">
          <h1>Мое React Приложение</h1>
          <MainPage />
          <hr />
          <About />
          <hr />
          <h2>Создать Нового Пользователя</h2>
          <UserForm />
        </div>
      </ModalProvider>
    )
  }

export default App
