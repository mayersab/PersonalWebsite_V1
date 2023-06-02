import blogSite_screenshot from '../photo/Blogsite-screenshot.png'
import cvApp_screenshot from '../photo/cv-app-screenshot.png'
import todo_screenshot from '../photo/todo-screenshot.png'

export const blogSite = {
    number: 'no. 01',
    title: 'BlogSite',
    description: 'My goal with this project was to really demonstrate the skills that I gained and improved upon during my time as CL intern. This blog uses JWT for user authentication and a backend built with node.JS/Express to communicate with mongoDB',
    photo: blogSite_screenshot,
    tech1: 'React',
    tech2: 'Node',
    tech3: 'Express',
    tech4: 'mongoDB',
    tech5: 'JWT'
}
export const cvApp = {
    number: 'no. 02',
    title: 'CV-Applicaton',
    description: 'For my first React project, I built and designed a simple CV app. This app focuses heavily on core React concepts like state management, props, and class based components. Through building this project, my thought process in how to think of developing react based applications was strengthened. In the future I’d like to improve this project by utilizing functional components, hooks, and form validation.',
    photo: cvApp_screenshot,
    tech1: 'React',
    tech2: 'CSS Modules',
}

export const todo = {
    number: 'no. 03',
    title: 'To-Do List',
    description: `This project was built with the intent of testing my vanilla Javascript skills. Each task in the app is divided into a project in the form of an object in JSON format. This app leveraged the use of module bundling with webpack to organize code and NPM scripts to automate parts of the development process. In the future, I'd like to improve upon this app by adding in an edit feature as well as converting it into React based project.`,
    photo: todo_screenshot,
    tech1: 'HTML/CSS',
    tech2: 'JavaScript',
}

