import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const PostDetails = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])

  useEffect(() => {
    axios.get(`https://dummyjson.com/posts/${id}`)
      .then(response => {
        setPost(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the post!', error)
      })

    axios.get(`https://dummyjson.com/posts/${id}/comments`)
      .then(response => {
        setComments(response.data.comments)
      })
      .catch(error => {
        console.error('There was an error fetching the comments!', error)
      })
  }, [id])

  if (!post) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h2>Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostDetails
