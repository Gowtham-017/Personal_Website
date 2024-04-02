import React from 'react'
import '../styles/Home.css'
import logo from '../assets/Gowtham.jpeg'
import me from '../assets/me.jpg'
import Typewriter from "typewriter-effect";
import { FaInstagram,FaGithub,FaLinkedin } from 'react-icons/fa';

function Home() {
    return (
        <div>
            <div class="container">
                <nav>
                    <a href="#home"><img src={logo} alt="logo" /></a>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#social">Socials</a></li>
                        <li><a href="https://drive.google.com/file/d/18wOLKdrTBt82vBOE-csNc75BVDl-OfdS/view?usp=sharing" class="btn2" download>Resume</a>
                    </li>
                    </ul>
                </nav>
            </div>
            <div id='home'>
                <div class="home">
                    <div class="header-text">
                        <div className='h'><p>IT Student<h1 style={{"color":"#ff004f"}}>Hi, I'm <span>Gowtham</span><br/></h1></p>
                        <div><h2 className='type'><Typewriter options={{strings: [ "Software Engineer","React Developer","ML Enthusiast", ],
                            autoStart: true, loop: true, deleteSpeed: 50,}} /></h2></div><br/>
                            <div className='social-icon'>
                                <a href='https://www.instagram.com/gowtham_29_/' className='media' target="_blank"  rel="noreferrer"><FaInstagram /> </a>
                                <a href='https://github.com/Gowtham-017' className='media' target="_blank"  rel="noreferrer"> <FaGithub/>  </a>
                                <a href='https://www.linkedin.com/in/gowthamk29/' className='media' target="_blank"  rel="noreferrer"> <FaLinkedin/> </a>
                            </div>
                        </div>
                        <div><img src={me} className='profile-img' alt="img2"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home
