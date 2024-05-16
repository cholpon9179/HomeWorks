import React, { useEffect, useState } from 'react'

const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data.posts))
  }, [])

  return (
    <div>
      <h1>Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Home
