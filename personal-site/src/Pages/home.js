import React from 'react';
import HomeStyles from '../styles/Home.module.css'


const Home = () => {
    return (
        <div className={HomeStyles.wrapper}>
            <div className={HomeStyles.content}>
                    <h3 id={HomeStyles.hello}>Hello there, I'm</h3>
                    <h1 id={HomeStyles.name}><span>Z</span>achary <span>M</span>ayers.</h1>
                    <h1 id={HomeStyles.design}>I have a love for all things design.</h1>
                    <h3 id={HomeStyles.developer}>A fullstack developer with a passion for bringing ideas to life.</h3>
                    <button>Resume</button>
            </div>
        </div>
    );
}

export default Home;
