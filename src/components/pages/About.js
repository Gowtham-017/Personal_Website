import React, { useState } from 'react';
import '../styles/About.css';
import aboutme from '../assets/aboutme.jpg';
function About() {
    const [activeTab, setActiveTab] = useState('skills');
    const opentab = (tabname) => {
        setActiveTab(tabname);
    };
    return (
        <div id="about">
            <div className="row">
            <div className="about-1">
                <img className="about-me-img" src={aboutme} alt="img2" />
            </div>
            <div className="about-2">
                <h2 className="aboutme">About</h2>
                <p className="aboutm">
                Highly motivated and adaptable student with strong communication <br/> and interpersonal skills.<br/> Experienced in project management and problem-solving.<br/> Self-starter with a passion for continuous learning and personal growth...
                </p>
                <br/>
                <div className="titles">
                <p className={`title1 ${activeTab === 'skills' ? 'activetitle' : ''}`} onClick={() => opentab('skills')}>
                    Skills
                </p>
                <p className={`title1 ${activeTab === 'education' ? 'activetitle' : ''}`} onClick={() => opentab('education')}>
                    Education
                </p>
                <p className={`title1 ${activeTab === 'hobby' ? 'activetitle' : ''}`} onClick={() => opentab('hobby')}>
                    Hobby
                </p>
                </div>
                <div className={`tab-content ${activeTab === 'skills' ? 'activecontent' : ''}`} id="skills">
                <ul>
                    <li>
                    <span>Developer</span>
                    <br />Developed simple web apps
                    </li>
                    <li>
                    <span>Programmer</span>
                    <br />Solved programs in Java
                    </li>
                    <li>
                    <span>AL ML</span>
                    <br />Future Techie of AI
                    </li>
                </ul>
                </div>
                <div className={`tab-content ${activeTab === 'education' ? 'activecontent' : ''}`} id="education">
                <ul>
                    <li>
                    <span>2018-2019</span>
                    <br />Kanna International School,Tenkasi
                    </li>
                    <li>
                    <span>2020-2021</span>
                    <br />Chinmaya Vidhyalaya,Rajapalayam
                    </li>
                    <li>
                    <span>2021-2025</span>
                    <br />SKCET,Coimbatore
                    </li>
                </ul>
                </div>
                <div className={`tab-content ${activeTab === 'hobby' ? 'activecontent' : ''}`} id="hobby">
                <ul>
                    <li>
                    <span>Reading</span>
                    <br />Love reading books
                    </li>
                    <li>
                    <span>Wanderlust</span>
                    <br />Enjoys travelling
                    </li>
                    <li>
                    <span>Blog</span>
                    <br />Writes random stuffs
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <br/>
        </div>
    );
}
export default About;