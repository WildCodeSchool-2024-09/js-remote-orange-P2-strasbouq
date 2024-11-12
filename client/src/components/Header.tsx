import facebook from "../assets/logo/facebook.png";
import instagram from "../assets/logo/instagram.png";
import logo from "../assets/logo/logo.png";
import panier from "../assets/logo/panier.png";
import "../styles/header.css";

const Header = () => {
  return (
    <>
      <header>
        <img className="fb" src={facebook} alt="Logo Facebook" />
        <img className="insta" src={instagram} alt="Logo Instagram" />
        <img className="stasbouq" src={logo} alt="Logo Strasbouq" />
        <img className="pan" src={panier} alt="Logo Panier" />
      </header>
    </>
  );
};

export default Header;
