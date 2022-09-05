import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Consulting from "./Components/Consulting/Consulting";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Consulting />
      <Works />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
