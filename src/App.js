import './App.css';

import wsp from "./assets/icon-wsp.png";

import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import Banner from "./Components/Banner";
import AboutUs from "./Components/AboutUs";
import Certificates from "./Components/Certificates";
import Footer from "./Components/Footer";
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Banner />

      <div className="app-map-aboutus">
        <AboutUs />
        <ContactUs />
      </div>

      <a style={{visibility: "hidden"}} name="certificates" href="www.puntayhacha.com.ar">contactus</a>
      <section id ="certificates"></section>
        <Certificates />
        
      <a href="https://api.whatsapp.com/send?phone=5491163022062" className="btn-wsp" rel="noreferrer" target="_blank">
        <img className="app-wsp" src={wsp} alt="icon-wsp"/>
      </a>

      <Footer />
    </div>
  );
}

export default App;