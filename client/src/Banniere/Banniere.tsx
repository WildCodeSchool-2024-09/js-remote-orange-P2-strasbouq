import ban from "../assets/logo/ban.jpg";
import "./Banniere.css";

const Banniere = () => {
	return (
		<div className="banniere">
			<img src={ban} alt="Bannière" className="banniere-img" />
			<div className="banniere-content">
				<h2>Nos Bouquets</h2>
				<button type="button">Découvrir</button>
			</div>
		</div>
	);
};

export default Banniere;
