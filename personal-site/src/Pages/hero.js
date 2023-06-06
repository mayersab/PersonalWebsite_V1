import React from 'react';
import HeroStyles from '../styles/Hero.module.css'


const Hero = () => {
    return (
        <div id='hero' className={HeroStyles.wrapper}>
            <div className={HeroStyles.content}>
                <div>
                    <h3 id={HeroStyles.hello}>Hello there, my name is</h3>
                </div>
                <div>
                    <h1 id={HeroStyles.name}><span>Z</span>achary <span>M</span>ayers.</h1>
                </div>
                <div>
                    <h1 id={HeroStyles.design}>I have a love for all things <span>design.</span></h1>
                </div>
                <div>
                    <h3 id={HeroStyles.developer}>I'm a <span>fullstack developer</span> with a passion for bringing ideas to life.</h3>
                </div>
                
                <a href="mailto:mayersz01@outlook.com"><button>Contact</button></a>
            </div>
        </div>
    );
}

export default Hero;
