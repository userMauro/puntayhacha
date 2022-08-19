import './App.css';

import Nav from "./Components/Nav";
import Landing from "./Components/Landing";
import Banner from "./Components/Banner";
import Map from "./Components/Map";
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

      <Certificates />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
