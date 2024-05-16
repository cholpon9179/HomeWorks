import React, { useState } from 'react'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = { title, body }

    const response = await fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    })

    const data = await response.json()
    console.log('Created Post:', data)
  }

  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Body</label>
          <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default CreatePost
