import React from 'react';
import HeroStyles from '../styles/Hero.module.css'


const Hero = () => {
    return (
        <div className={HeroStyles.wrapper}>
            <div className={HeroStyles.content}>
                <h3 id={HeroStyles.hello}>Hello there, I'm</h3>
                <h1 id={HeroStyles.name}><span>Z</span>achary <span>M</span>ayers.</h1>
                <h1 id={HeroStyles.design}>I have a love for all things <span>design.</span></h1>
                <h3 id={HeroStyles.developer}>A <span>fullstack developer</span> with a passion for bringing ideas to life.</h3>
                <button>Resume</button>
            </div>
        </div>
    );
}

export default Hero;
