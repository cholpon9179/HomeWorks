import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Navbar from './Navbar'
import Content from './Content'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Content />
      </div>
    </Provider>
  )
}

export default App
