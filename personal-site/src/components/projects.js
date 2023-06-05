import React, {useState, useEffect} from 'react';
import ProjectStyles from '../styles/Projects.module.css'




const Projects = ({number, title, description, photo, tech1, tech2, tech3, tech4, tech5}) => {

    const [state, setstate] = useState([tech1, tech2, tech3, tech4, tech5]);
    
    return (
        <div className={ProjectStyles.test}>
        <div className={ProjectStyles.wrapper}>
            <div className={ProjectStyles.screenshot}>
                <img src={photo} alt="" />
                <div className={ProjectStyles.overlay}></div>
            </div>
            <div className={ProjectStyles.project_card}>
                <div className={ProjectStyles.project_title}>
                <div className={ProjectStyles.project_number}><p>{number}</p></div>
                    <h2>{title}</h2>
                </div>
                <div className={ProjectStyles.project_description}>
                    <p>{description}</p>
                </div>
                <div>
                    <ul className={ProjectStyles.project_technologies}>
                    
                        {state && state.map((item) => {
                            if (item !== undefined) {
                                return (
                                    <div>
                                        <li>{item}</li>
                                    </div>
                                )
                            } else {
                                return null
                            }

                        })}
                    </ul>
                </div>
                <div className={ProjectStyles.project_links}>
                    <div><a href="">GitHub</a></div>
                    <div><a href="">View Site</a></div>
                </div>
            </div>


        </div>
        </div>
    );
}

export default Projects;
