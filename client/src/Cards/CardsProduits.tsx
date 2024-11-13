import "./CardsProduits.css";
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
  onAddToFavorites: (produit: Produit) => void;
  onAddToCart: (produit: Produit) => void;
}

const CardsProduits = ({ produits, onAddToFavorites, onAddToCart }: Props) => {
  return (
    <div className="CardsProduits">
      <img src={produits.image_url} alt="imageBouquet" />
      <h4>{produits.nom}</h4>
      <p>{produits.description}</p>
      <p>{produits.prix}€</p>
      <div className="buttons-container">
        <button type="button" onClick={() => onAddToFavorites(produits)}>
          🖤 Ajouter aux Favoris
        </button>
        <button type="button" onClick={() => onAddToCart(produits)}>
          🛒 Ajouter au Panier
        </button>
      </div>
    </div>
  );
};

export default CardsProduits;
