import React from 'react';
import NavStyles from '../styles/Navbar.module.css'
import { useState, useEffect } from 'react';
/*
***TO-DO***
- Convert to Gatsby 
- Deploy blog app
- Add loading / scroll animations 
- Add logo + hero background image
- Look over and refactor css if needed

*/
const Navbar = () => {
    const [scrollState, setscrollState] = useState({
        currentScroll:0,
        lastScroll: 0
    });
    const [visible, setvisible] = useState(true);
    const [atTop, setatTop] = useState(true);
    const [isHamClicked, setisHamClicked] = useState(false);

    const remove = () => {
        document.getElementById('checkbox').checked = false
        document.body.classList.remove('blur')
    }

    useEffect(() => {
    const lockedScroll = () => {
        if (isHamClicked) {
            document.body.classList.add('blur')
        } else {
            document.body.classList.remove('blur')
        }
    }
        lockedScroll()
    }, [isHamClicked]);

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

            <nav >
            <div className={`${NavStyles.wrapper} ${visible ? NavStyles.scrollup : NavStyles.scrolldown} ${atTop ? NavStyles.top : null } `}>

            
                    
                <div className={NavStyles.linkwrapper}>
                    <div className={NavStyles.link}>
                        <a href="#hero"><span id={NavStyles.home}>Home</span></a>
                    </div>
                    <div className={NavStyles.link}>
                        <a href="#aboutme"><span id={NavStyles.about}>About</span></a>
                    </div>
                    <div className={NavStyles.link}>
                        <a href="#portfolio"><span id={NavStyles.work}>Work</span></a>
                    </div>
                    <div className={NavStyles.link}>
                        <a href="#contact"><span id={NavStyles.contact}>Contact</span></a>
                    </div>
                </div>
                <div className={NavStyles.hamburgerwrapper}>
                    <label className={NavStyles.hamburger_menu}>
                        <input id="checkbox" type="checkbox" onClick={() => setisHamClicked(!isHamClicked)}/>
                    </label>
                    <aside className={NavStyles.sidebar}>
                        <nav>
                            <div><a onClick={() => remove()} href='#hero' id={NavStyles.sbhome}>Home</a></div>
                            <div><a onClick={() => remove()}  href='#aboutme' id={NavStyles.sbabout}>About</a></div>
                            <div><a onClick={() => remove()}  href='#portfolio' id={NavStyles.sbwork}>Work</a></div>
                            <div><a onClick={() => remove()}  href='#contact' id={NavStyles.sbcontact}>Contact</a></div>
                        </nav>
                    </aside>
                </div>
            </div>
            </nav> 

        </div>
    );
}

export default Navbar;
