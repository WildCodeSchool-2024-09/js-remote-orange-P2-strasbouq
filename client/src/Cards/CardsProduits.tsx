import "./CardsProduits.css";

interface Produit {
	id: number;
	image_url: string;
	nom: string;
	description: string;
	prix: number;
}

interface Props {
	produits: Produit;
	onToggleFavorite: (produit: Produit) => void;
	isFavorite: boolean;
	onAddToCart: () => void;
}

const CardsProduits = ({
	produits,
	onToggleFavorite,
	isFavorite,
	onAddToCart,
}: Props) => {
	return (
		<div className="CardsProduits">
			<img src={produits.image_url} alt={produits.nom} />
			<h4>{produits.nom}</h4>
			<p>{produits.description}</p>
			<p>{produits.prix}€</p>
			<div className="buttons-container">
				<button type="button" onClick={() => onToggleFavorite(produits)}>
					{isFavorite ? "❤️ Retirer des Favoris" : "🖤 Ajouter aux Favoris"}
				</button>
				<button type="button" onClick={onAddToCart}>
					🛒 Ajouter au Panier
				</button>
			</div>
		</div>
	);
};

export default CardsProduits;