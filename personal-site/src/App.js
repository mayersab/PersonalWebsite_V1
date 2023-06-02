import Navbar from "./components/navbar";
import About from "./Pages/about";
import Portfolio from "./Pages/portfolio";
import Hero from './Pages/hero'
import Contact from "./Pages/contact";
import './App.css'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Contact/>
      

    </div>
  );
}

export default App;
