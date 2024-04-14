import React from 'react'
import './About.css'

const About = ({ info }) => {
    return (
        <div className="about">
            <h2>{info.title}</h2>
            <p>{info.body}</p>
        </div>
    )
}

export default About
