import React from 'react'
import { useModal } from '../contexts/ModalContext'

const MainPage = () => {
  const { openModal } = useModal()

  return (
    <div >
      <h1>Главная Страница</h1>
      <button onClick={openModal}>Открыть Модальное Окно</button>
    </div>
  )
}

export default MainPage
