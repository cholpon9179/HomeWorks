import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from './store'

const Navbar = () => {
  const dispatch = useDispatch()
  const isDark = useSelector((state) => state.theme.isDark)

  return (
    <nav style={{ background: isDark ? '#333' : '#ccc', padding: '10px' }}>
      <button onClick={() => dispatch(toggleTheme())}>
        Переключиться на {isDark ? 'светлую' : 'темную'} тему
      </button>
    </nav>
  )
}

export default Navbar
