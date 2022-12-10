import "./App.css";
import Artworks from "./components/Artworks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen">
      <div>
        <Header />
        <Hero />
      </div>
      <Artworks />
      <Footer/>
    </div>
  );
}

export default App;
