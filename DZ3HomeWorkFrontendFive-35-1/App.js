import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './store'
import './App.css'

const CounterComponent = () => {
  const count = useSelector(state => state.counter)
  return <span className="counter">{count}</span>
}

const ButtonComponent = ({ sign }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    if (sign === '+') {
      dispatch(increment())
    } else if (sign === '-') {
      dispatch(decrement())
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`button ${sign === '+' ? 'increment' : 'decrement'}`}
    >
      {sign}
    </button>
  )
}

const ContainerComponent = () => {
  return (
    <div className="container">
      <CounterComponent />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <ButtonComponent sign="-" />
      <ContainerComponent />
      <ButtonComponent sign="+" />
    </div>
  )
}

export default App
