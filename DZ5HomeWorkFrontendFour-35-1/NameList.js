import React, { useState } from 'react'

const NameList = () => {
  const [names, setNames] = useState([])
  const [newName, setNewName] = useState('')

  const handleAddName = () => {
    const trimmedName = newName.trim()
    if (trimmedName) {
      setNames([...names, trimmedName])
      setNewName('') 
    }
  }

  const handleChangeName = (index) => {
    const updatedNames = [...names]
    const newNameInput = prompt('Введите новое имя:')
    if (newNameInput) {
      updatedNames[index] = newNameInput.trim()
      setNames(updatedNames)
    }
  }

  const handleInputChange = (e) => {
    setNewName(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        value={newName}
        onChange={handleInputChange}
        placeholder="Введите новое имя"
      />
      <button onClick={handleAddName} disabled={!newName.trim()}>
        Добавить
      </button>

      {names.length === 0 ? (
        <p>Список пуст</p>
      ) : (
        <ul>
          {names.map((name, index) => (
            <li key={index}>
              {name}
              <button onClick={() => handleChangeName(index)}>Поменять</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NameList
