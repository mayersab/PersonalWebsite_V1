import React from 'react';
import AboutStyles from '../styles/About.module.css'
import me from '../photo/me.jpeg'

const About = () => {
    return (
        <div id='aboutme' className={AboutStyles.heading}>
        <div className={AboutStyles.title}>
            <h1 id={AboutStyles.about}>About</h1>
        </div>
            

            <div className={AboutStyles.mystory}>

                    <div className={AboutStyles.pic}>
                        <img src={me} alt="randomblackdude" />
                    </div>

                    <div className={AboutStyles.me}>
                        <p>
                            Hey there, I'm Zach! a fullstack developer with a passion for building and design. For as long as I can remember, I've been curious about things. Something about taking an idea through the process of materialization amazed me. Eventually my curiousity lead me to take on the technologies of the web and I haven't looked back since.
                        </p>
                        <br />
                        <p>
                            Today, my focus is to deliver value through the quality of my work by drawing on my expieriences as a web developer.
                        </p> 
                        <br />
                        <p>
                            Tools and technologies that I use:
                        </p>
                        <br />
                        <div className={AboutStyles.skillwrapper}>

                            <div className={AboutStyles.first}>
                                <ul>
                                    <li>JavaScript (ES6+)</li>
                                    <li>React</li>
                                    <li>Node.js</li>
                                </ul>
                            </div>

                            <div className={AboutStyles.second}>
                                <ul>
                                    <li>Wordpress</li>
                                </ul>
                            </div>

                        </div>

                    </div>

            </div>

        </div>
        
    );
}

export default About;
