import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import logo from "../images/logo.png";
import panier from "../images/panier.png";

const Header = () => {
  return (
    <div>
      <img src={facebook} alt="logofacebook" />
      <img src={instagram} alt="logoinstagram" />
      <img src={logo} alt="logostrasbouq" />
      <img src={panier} alt="logopanier" />
    </div>
  );
};

export default Header;
