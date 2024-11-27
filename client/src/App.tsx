import "./App.css";
import Banniere from "./Banniere/Banniere";
import Cards from "./Cards/Cards";
import { CartProvider } from "./CartContext"; // Importer le CartProvider
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MessDefil from "./Header/MessDefil";

function App() {
  return (
    <CartProvider>
      {/* Envelopper les composants avec CartProvider */}
      <MessDefil />
      <Header />
      <Banniere />
      <Cards />
      <Footer />
    </CartProvider>
  );
}

export default App;
