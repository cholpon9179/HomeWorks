import React from 'react'
import './App.css'


const Title = () => {
  return <h1>JAVACRIPT</h1>
}


const Header = () => {
  return (
    <header>
      <Title />
    </header>
  )
}


const Content = () => {
  return (
    <div>
      <Title />
    </div>
  )
}


const Footer = () => {
  return (
    <footer>
        <Title />
    </footer>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
