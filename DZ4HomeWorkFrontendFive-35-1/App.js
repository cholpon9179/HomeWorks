import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store' 
import UserForm from './components/UserForm'
import UserDisplay from './components/UserDisplay'
import EditUsers from './components/EditUsers'

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <UserForm />
        <UserDisplay />
        <EditUsers />
      </div>
    </Provider>
  )
}

export default App
