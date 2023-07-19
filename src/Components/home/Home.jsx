// import Footer from "./Components/footer/Footer";
// import CarouselComponent from "./Components/carousel/Carousel";
// import Logincards from "./Components/loginCards/Logincards";
// import NavBar from "./Components/navBar/NavBar";
// import Trusted from "./Components/trusted/Trusted";
// import Courses from "./pages/courses/Courses";

import CarouselComponent from "../carousel/Carousel";
import Footer from "../footer/Footer";
import Logincards from "../loginCards/Logincards";
import Trusted from "../trusted/Trusted";
import MetaMaskIntegration from "../Metamask";
import Navbar from "../navBar/NavBar";


function Home({contract,account}) {
  console.log("Home :",account)
  const acc=account;
  const cont=contract;
  return (
    <div className="App">
      <Navbar  contract = {cont} account = {acc}/> 
    <CarouselComponent/>
    <Trusted />
    <Logincards/>
    <Footer/>
    </div>
  );
}

export default Home;
