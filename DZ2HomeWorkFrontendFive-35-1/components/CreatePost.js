import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Объект данных, который будет отправлен на сервер
    const postData = {
      title: title,
      body: body,
      userId: 1 // Предположим, что создается пост от имени пользователя с ID 1
    }

    axios.post('https://dummyjson.com/posts/add', postData)
      .then(response => {
        console.log(response.data); // Убедитесь, что запрос успешен
        navigate('/')
      })
      .catch(error => {
        console.error('There was an error creating the post!', error)
      })
  }

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}

export default CreatePost
