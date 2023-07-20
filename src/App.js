import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import Virtual from "./components/Virtual/Virtual";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
    </div>
  );
}

export default App;
