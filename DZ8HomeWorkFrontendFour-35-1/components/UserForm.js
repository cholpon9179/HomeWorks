import React, { useRef } from 'react'

const UserForm = () => {
  const nameRef = useRef()
  const usernameRef = useRef()
  const emailRef = useRef()

  const handleClick = () => {
    const newUser = {
      name: nameRef.current.value,
      username: usernameRef.current.value,
      email: emailRef.current.value
    }

    console.log(newUser)
    // Дополнительная логика для создания нового пользователя
  }

  return (
    <div>
      <input type="text" placeholder="Name" ref={nameRef} />
      <input type="text" placeholder="Username" ref={usernameRef} />
      <input type="text" placeholder="Email" ref={emailRef} />
      <button onClick={handleClick}>Create</button>
    </div>
  )
}

export default UserForm
