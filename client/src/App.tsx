import "./App.css";
import Banniere from "./Banniere/Banniere";
import Cards from "./Cards/Cards";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MessDefil from "./Header/MessDefil";

function App() {
  return (
    <>
      <MessDefil />
      <Header />
      <Banniere />
      <Cards />
      <Footer />
    </>
  );
}
export default App;
