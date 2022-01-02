import React from 'react'
import Typical from 'react-typical'
import './Profile.css'


export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-deatils'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href="https://www.udemy.com/course/the-ultimate-react-js-responsive-portfolio-website/learn/lecture/28565389#questions" target="_blank" >
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href="www.google.com">
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href="www.google.com">
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href="www.google.com">
                                <i className='fa fa-youtube-square'></i>
                            </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className="primary-text">
                            {" "}
                            Hello, I'M <span className="highligted-text">Ernesto</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            {" "}
                            <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[ 
                                'Software Engenieer😎',
                                1000,
                                'Web Designer🦢',
                                1000,
                                'Web Developer💻',
                                1000 
                            ]}
                            />
                            </h1>
                        <span className="profile-role-tag-tagline">
                            Knack of building applications that are fast, responsive and user friendly.
                        </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn primary-btn">
                            {" "}
                            Hire Me
                        </button>
                        
                        <a href='ehizcv.pdf' download='Ernesto Arias.pdf'>
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-Background'>
                        </div>
                        </div>
            </div>    
        </div>
    )
}
