import React, { useState } from 'react'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import TodosPage from './pages/TodosPage'

function App() {
  const [route, setRoute] = useState(window.location.pathname)

  const navigateTo = (pathname) => {
    window.history.pushState({}, pathname, window.location.origin + pathname)
    setRoute(pathname)
  }

  const renderPage = () => {
    switch (route) {
      case '/':
        return <MainPage />
      case '/about':
        return <AboutPage />
      case '/todos':
        return <TodosPage />
      default:
        return <MainPage />
    }
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigateTo('/')}>MainPage</button>
          </li>
          <li>
            <button onClick={() => navigateTo('/about')}>AboutPage</button>
          </li>
          <li>
            <button onClick={() => navigateTo('/todos')}>TodosPage</button>
          </li>
        </ul>
      </nav>
      {renderPage()}
    </div>
  )
}

export default App
