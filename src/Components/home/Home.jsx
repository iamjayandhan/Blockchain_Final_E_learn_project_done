// import Footer from "./Components/footer/Footer";
// import CarouselComponent from "./Components/carousel/Carousel";
// import Logincards from "./Components/loginCards/Logincards";
// import NavBar from "./Components/navBar/NavBar";
// import Trusted from "./Components/trusted/Trusted";
// import Courses from "./pages/courses/Courses";

import Contact from "../../pages/contact/Contact";
import CarouselComponent from "../carousel/Carousel";
import Footer from "../footer/Footer";
import Logincards from "../loginCards/Logincards";
import Navbar from "../navBar/NavBar";
import Trusted from "../trusted/Trusted";
import MetaMaskIntegration from "../Metamask";


function Home() {
  return (
    <div className="App">
      <MetaMaskIntegration/>
    <CarouselComponent/>
    <Trusted />
    <Logincards/>
    <Footer/>
    </div>
  );
}

export default Home;
