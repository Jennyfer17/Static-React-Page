import React from 'react'
import TwitterLogo from './assets/Twitter.svg'
import FacebookLogo from './assets/Facebook Icon.svg'
import InstagramLogo from './assets/instagram.png'
import GitHubLogo from './assets/GitHub Icon.svg'

export function Footer() {
    return (
        <footer className='footer'>
            <img src={TwitterLogo} className='logo'></img>
            <img src={FacebookLogo} className='logo'></img>
            <img src={InstagramLogo} className='logo'></img>
            <img src={GitHubLogo} className='logo'></img>
        </footer>
    )
}