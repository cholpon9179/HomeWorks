import React from 'react'
import { useModal } from '../contexts/ModalContext'

const ModalWindow = ({ children }) => {
  const { isModalOpen } = useModal()

  return (
    isModalOpen && (
      <div className="modal">
        <div className="modal-content">{children}</div>
      </div>
    )
  )
}

export default ModalWindow
