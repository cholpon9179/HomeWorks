import React from 'react'
import { useSelector } from 'react-redux'

const Content = () => {
  const isDark = useSelector((state) => state.theme.isDark)

  return (
    <div style={{
      background: isDark ? '#222' : '#eee',
      color: isDark ? '#fff' : '#000',
      height: '100vh',
      padding: '20px'
    }}>
      <h1>{isDark ? 'Темная' : 'Светлая'} тема</h1>
      <p>{isDark ? 'ой что-то темно стало' : 'и снова день'}</p>
    </div>
  )
}

export default Content
