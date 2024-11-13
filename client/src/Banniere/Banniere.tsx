import { Link } from "react-router-dom";
import ban from "../assets/logo/ban2.jpg";
import "./Banniere.css";

const Banniere = () => {
	return (
		<div className="banniere">
			<img src={ban} alt="Bannière" className="banniere-img" />
			<div className="banniere-content">
				<h2>Nos Bouquets</h2>
				<Link to="/shop">
					<button type="button">Découvrir</button>
				</Link>
			</div>
		</div>
	);
};

export default Banniere;
