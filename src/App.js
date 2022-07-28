import './App.css';
import { AboutMe } from './components/aboutMe/AboutMe';
import { Footer } from './components/footer/Footer';
import Home from './components/Home/Home';
import { Proy } from './components/proyects/Proy';
function App() {
  return (
    <div className="App">
      <Home/>
      <AboutMe/>
      <Proy/>
      <Footer/>
    </div>
  );
}

export default App;
