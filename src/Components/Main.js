import React from 'react'
import EmailLogo from './assets/Mail.svg'
// import LinkedinLogo from './assets/linkedin.svg'
import Test from './assets/linkedin.svg'

export function Main() {
    return (
        <main className='main'>
            <div className="my-name">
                <h2>Laura Smith</h2>
                <span className='career'>Frontend Developer</span> <br></br>
                <span className='adress'>laurasmit.website</span>
            </div>

            <div className="social-media">
                <button> <img src={EmailLogo}></img> Email</button>
                <button className='linkedin-button'> <img src={Test}></img> Linkedin</button>       
            </div>
            <PersonalInfo />

        </main>
    )
}



function PersonalInfo() {
    return (
        <div className='personal-info'>
            <h3>About</h3>
            <span className='about-me'>
            I am a frontend developer with a particular interest 
            in making things simple and automating daily tasks.
            I try to keep up with security and best practices, and am always looking for new things 
            to learn.
            </span>

            <h3>Interests</h3>
            <span className='about-me'>
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </span>
        </div>
    )
}
