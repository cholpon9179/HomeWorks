import React from 'react'
import { useModal } from '../contexts/ModalContext'
import ModalWindow from './ModalWindow'

const About = () => {
  const { closeModal } = useModal()

  return (
    <ModalWindow>
      <div className="modal-content">
        <h2>О Нас</h2>
        <p>Здесь можно добавить информацию о компании или проекте.</p>
        <button onClick={closeModal}>Закрыть Модальное Окно</button>
      </div>
    </ModalWindow>
  )
}

export default About
