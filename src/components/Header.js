import * as React from 'react';

import { GithubButton, LinkedInButton, EmailButton, DisplayButton, ResumeButton } from './Buttons.js';

import '../assets/css/header.css';

export default function Header() {

    return (

        <header className='header-container'>

            <div className='header-brand'>

                CGE Portfolio Site

            </div>

            <div className='header-btn-container'>

                <GithubButton url='https://github.com/Eichhorn-personal' />    

                <LinkedInButton url="https://www.linkedin.com/in/christophereichhorn/" />

                <EmailButton />

                <DisplayButton />

{/*
                <ResumeButton myFile='../assets/images/Resume.pdf' />
*/}
            </div>
    
        </header>
    
    )

}
