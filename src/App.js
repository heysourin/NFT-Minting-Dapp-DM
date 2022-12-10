import "./App.css";
import Alert from "./components/Alert";
import Artworks from "./components/Artworks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="min-h-screen">
      <div>
        <Header />
        <Hero />
      </div>
      <Artworks />
      <Footer/>
      <Alert/>
      <Loading/>
    </div>
  );
}

export default App;
