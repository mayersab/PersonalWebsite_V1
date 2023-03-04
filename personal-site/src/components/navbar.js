import React from 'react';
import NavStyles from '../styles/Navbar.module.css'
import { useState } from 'react';

const Navbar = () => {
    const [scrollState, setscrollState] = useState(false);
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY

    })
    
    return (
        <div>

            <nav className={NavStyles.wrapper}>

                <div className={NavStyles.logo}>
                    Logo
                </div>
                    
                <div className={NavStyles.linkwrapper}>
                    <div className={NavStyles.link}>
                        <a href="">Home</a>
                    </div>
                    <div className={NavStyles.link}>
                        <a href="">About</a>
                    </div>
                    <div className={NavStyles.link}>
                        <a href="">Work</a>
                    </div>
                    <div className={NavStyles.link}>
                        <a href="">Contact</a>
                    </div>
                    <div className={NavStyles.link}>
                    <a href="">Blog</a>
                    </div>
                </div>

                <div className={NavStyles.resume}>
                    
                    <a href="">Resume</a>
                </div>

            </nav> 

        </div>
    );
}

export default Navbar;
