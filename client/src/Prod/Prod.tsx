import { useEffect, useState } from "react";
import CardsProduits from "../Cards/CardsProduits";

interface Produit {
  id: number;
  image_url: string;
  nom: string;
  description: string;
  prix: number;
}

const Produits = () => {
  const [produits, setProduits] = useState<Produit[]>([]);
  const [favoris, setFavoris] = useState<Produit[]>([]);
  const [panier, setPanier] = useState<Produit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch("https://api-strasbouq.vercel.app/items")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(
        (result) => {
          setProduits(result);
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        },
      );
  }, []);

  const handleAddToFavorites = (produit: Produit) => {
    if (!favoris.some((fav) => fav.id === produit.id)) {
      setFavoris([...favoris, produit]);
    }
  };

  const handleAddToCart = (produit: Produit) => {
    if (!panier.some((item) => item.id === produit.id)) {
      setPanier([...panier, produit]);
    }
  };

  return (
    <div className="produit-container">
      {loading ? (
        <div>Chargement...</div>
      ) : error ? (
        <div>Erreur: {error.message}</div>
      ) : (
        produits.map((produit) => (
          <CardsProduits
            key={produit.id}
            produits={produit}
            onAddToFavorites={handleAddToFavorites}
            onAddToCart={handleAddToCart}
          />
        ))
      )}
    </div>
  );
};

export default Produits;
