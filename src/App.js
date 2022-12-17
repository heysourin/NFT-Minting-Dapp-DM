import { useEffect } from "react";
import Alert from "./components/Alert";
import Artworks from "./components/Artworks";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import { isWalletConnected, loadNfts } from "./contract";
import { useGlobalState } from "./store";

function App() {
  const [nfts] = useGlobalState("nfts");

  useEffect(() => {
    const heythere = async () => {
      await isWalletConnected().then(() => console.log("Blockchain Loaded"));
      await loadNfts();
    };

    heythere();
  }, []);

  return (
    <div className="min-h-screen">
      <div>
        <Header />
        <Hero />
      </div>
      <Artworks artworks={nfts} />
      <Footer />
      <Alert />
      <Loading />
    </div>
  );
}

export default App;
