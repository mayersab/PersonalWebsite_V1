import React, {useEffect} from 'react';
import Projects from "../components/projects";
import PortStyles from "../styles/Portfolio.module.css"
import { blogSite, todo, cvApp } from '../project_descriptions/data';




const Portfolio = () => {

    return (
        <div>
            <div className={PortStyles.container}>
                <h1 id={PortStyles.projects}>Projects</h1>
            </div>
            <div>
                <Projects
                    title={blogSite.title}
                    description={blogSite.description}
                    photo={blogSite.photo}
                    tech1={blogSite.tech1}
                    tech2={blogSite.tech2}
                    tech3={blogSite.tech3}
                    tech4={blogSite.tech4}
                    tech5={blogSite.tech5}
                />
                <Projects
                    title={cvApp.title}
                    description={cvApp.description}
                    photo={cvApp.photo}
                    tech1={cvApp.tech1}
                    tech2={cvApp.tech2}
                />
                <Projects
                    title={todo.title}
                    photo={todo.photo}
                    description={todo.description}
                    tech1={todo.tech1}
                    tech2={todo.tech2}
                />
                
            </div>
        </div>
    );
}

export default Portfolio;
