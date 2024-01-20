import React from 'react'
import '../styles/Socials.css'
import project from '../assets/project.jpg'
import socials from '../assets/socials.png'
function About() {
    return (
        <div id="social">
            <div className='social-link'>
                <img src={project}  alt='test' /><br/>
                <h2><br/>Feel free to connect, collaborate, and stay in the loop with the diverse content shared on my socials</h2>
            </div><br/>
            <button className='button1'><a href="https://linktr.ee/gowthamk_29" target="_blank"  rel="noreferrer" className='links'>Connect With Me</a></button>
            <div className='project-link'>
                <h2>Dive into my project heap to discover my collection <br/> of works, Discover the diverse skills showcased within</h2>
                <img  src={socials}  alt='test' />
            </div><br/>
            <button className='button2'><a href="https://gowtham-dev-projectheap.netlify.app/" target="_blank"  rel="noreferrer" className='links'>Explore My Works</a></button>
        </div>
    )
}
export default About