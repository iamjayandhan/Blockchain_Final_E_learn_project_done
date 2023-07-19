import Footer from "./Components/footer/Footer";
import CarouselComponent from "./Components/carousel/Carousel";
import Logincards from "./Components/loginCards/Logincards";
import NavBar from "./Components/navBar/NavBar";
import Trusted from "./Components/trusted/Trusted";
import Courses from "./pages/courses/Courses";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Home from "./Components/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
   
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
