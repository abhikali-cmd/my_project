import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skill from "./components/about_me/aboutme";
import Myskill from "./components/Myskill/myskill";
import Technicalskill from "./components/technicalskill/technical-skill";
import Project from "./components/project/project";
import Contact from "./components/contact-me/contact";
import Footer from "./components/footer/footer";
import './index.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skill/>
      <Myskill/>
      <Technicalskill/>
      <Project/>
      <Contact/>
      
      <Footer/>
    </div>
  );
}


export default App;
