import { useEffect, useState } from "react";
import CardsProduits from "../Cards/CardsProduits";

interface Produit {
  id: number;
  image_url: string;
  nom: string;
  description: string;
  prix: number;
  quantity: number;
}

const SelectionFavoris = () => {
  const [produits, setProduits] = useState<Produit[]>([]); // Tous les produits
  const [favoris, setFavoris] = useState<Produit[]>([]); // Produits favoris
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Charger les produits depuis l'API
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
          setProduits(result); // Sauvegarder tous les produits
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        },
      );
  }, []);

  // Charger les favoris depuis localStorage
  useEffect(() => {
    const savedFavoris = JSON.parse(localStorage.getItem("favoris") || "[]");
    setFavoris(savedFavoris);
  }, []);

  // Retirer un produit des favoris
  const handleRemoveFavorite = (produit: Produit) => {
    const updatedFavoris = favoris.filter((fav) => fav.id !== produit.id);
    setFavoris(updatedFavoris);

    // Sauvegarder dans localStorage
    localStorage.setItem("favoris", JSON.stringify(updatedFavoris));
  };

  // Filtrer les produits favoris
  const produitsFavoris = produits.filter((produit) =>
    favoris.some((fav) => fav.id === produit.id),
  );

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur: {error.message}</div>;
  }

  if (produitsFavoris.length === 0) {
    return <div>Aucun produit en favoris</div>;
  }

  return (
    <div className="produit-container">
      {produitsFavoris.map((produit) => (
        <CardsProduits
          key={produit.id}
          produits={produit}
          onToggleFavorite={handleRemoveFavorite} // Utiliser handleRemoveFavorite pour retirer du favori
          isFavorite={true}
          onAddToCart={() => {}} // Fonction vide pour l'instant
        />
      ))}
    </div>
  );
};

export default SelectionFavoris;