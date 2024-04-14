import React from 'react'
import About from '../components/About'
import Title from '../components/Title'
import './MainPage.css'

const MainPage = () => {
    return (
        <div className="main-page">
            <About info={{ title: "Some Title", body: "Some body" }} />
            <Title text="Hello world" />
        </div>
    )
}

export default MainPage
