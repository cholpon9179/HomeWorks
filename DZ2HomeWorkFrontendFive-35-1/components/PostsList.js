import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PostsList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/posts')
      .then(response => {
        setPosts(response.data.posts)
      })
      .catch(error => {
        console.error('There was an error fetching the posts!', error)
      })
  }, [])

  return (
    <div>
      <h1>Posts List</h1>
      <Link to="/create">Create New Post</Link>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostsList
