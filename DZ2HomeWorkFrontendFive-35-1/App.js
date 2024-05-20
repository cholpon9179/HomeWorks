import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PostsList from './components/PostsList'
import CreatePost from './components/CreatePost'
import PostDetails from './components/PostDetails'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  )
}

export default App