import facebook from "../assets/logo/facebook.png";
import instagram from "../assets/logo/instagram.png";
import logo from "../assets/logo/logo.png";
import panier from "../assets/logo/panier.png";

const Header = () => {
  return (
    <>
      <header>
        <img src={facebook} alt="Logo Facebook" />
        <img src={instagram} alt="Logo Instagram" />
        <img src={logo} alt="Logo Strasbouq" />
        <img src={panier} alt="Logo Panier" />
      </header>
    </>
  );
};

export default Header;
