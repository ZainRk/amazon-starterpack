import "./App.css";
import Footer from "./Component/Footer/Footer";
import Header from './Component/Header/Header'
import Hero from "./Component/Hero/Hero";
import Products from "./Component/Products/Products";
import Slider from "./Component/Slider/Slider";
import Testimonial from "./Component/Testimonial/Testimonial";
import Visvial from "./Component/Visvial/Visvial";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Visvial />
      <Products />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
