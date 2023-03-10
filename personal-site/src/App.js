import Navbar from "./components/navbar";
import About from "./Pages/about";
import Testdiv from "./components/testdiv";
import Hero from './Pages/hero'
import Projects from "./Pages/projects";
import './App.css'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      {/* <Projects/> */}

    </div>
  );
}

export default App;
