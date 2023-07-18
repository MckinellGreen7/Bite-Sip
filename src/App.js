import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Cuisines from "./components/Cuisines";
import Review from "./components/Review";
import './index.css';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Gallery />
      <Cuisines />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
