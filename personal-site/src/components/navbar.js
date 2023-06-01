import React from 'react';
import NavStyles from '../styles/Navbar.module.css'
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrollState, setscrollState] = useState({
        currentScroll:0,
        lastScroll: 0
    });
    const [visible, setvisible] = useState(true);
    const [atTop, setatTop] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            setscrollState(prevState => {
                return {
                    currentScroll: window.scrollY,
                    lastScroll: prevState.currentScroll
                }
            })
            
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, []);

    useEffect(() => {
        if (scrollState.currentScroll < scrollState.lastScroll && scrollState.lastScroll !== 0) {
            console.log('scrolling up')
            setvisible(true)
            setatTop(false)
        }
        if (scrollState.currentScroll > scrollState.lastScroll) {
            console.log('scrolling down')
            setvisible(false)
            setatTop(false)
        }
        if (scrollState.currentScroll <= 0) {
            console.log('At top')
            setatTop(true)
            
        }

    }, [scrollState]);


    return (
        <div>

            <nav className={`${NavStyles.wrapper} ${visible ? NavStyles.scrollup : NavStyles.scrolldown} ${atTop ? NavStyles.top : null } `}>
            

                <div className={`${NavStyles.logo}`}>
                    Logo
                </div>
                    
                <div className={NavStyles.linkwrapper}>
  
                    <div className={NavStyles.link}>
                        <a href="">Blog</a>
                    </div>
                    <div className={NavStyles.link}>
                        <a href="">Work</a>
                    </div>
                    <div className={NavStyles.link}>
                        <a href="">Contact</a>
                    </div>
                </div>

            </nav> 

        </div>
    );
}

export default Navbar;
