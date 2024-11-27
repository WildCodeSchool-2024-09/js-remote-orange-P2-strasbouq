import type React from "react";
import { useEffect, useState } from "react";
import { useCart } from "../CartContext";

interface Produit {
  id: number;
  nom: string; // Uniformisons avec nom plutôt que name
  prix: number; // Uniformisons avec prix plutôt que price
  image_url?: string;
  description?: string;
  quantity: number;
}

const SelectionPanier: React.FC = () => {
  const [produits, setProduits] = useState<Produit[]>([]);
  const { cart, setCart } = useCart();
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
          // Transformer les données pour correspondre à notre interface
          const formattedResult = result.map(
            (item: {
              id: number;
              name?: string;
              nom?: string;
              prix?: number;
              image_url?: string;
              description?: string;
              quantity?: number;
            }) => ({
              ...item,
              nom: item.name || item.nom, // Gérer les deux possibilités
              prix: item.prix || item.prix, // Gérer les deux possibilités
              quantity: item.quantity || 1,
            }),
          );
          setProduits(formattedResult);
          setLoading(false);
        },
        (error) => {
          setError(error);
          setLoading(false);
        },
      );
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const onRemoveItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const total = cart.reduce(
    (acc, item) => acc + item.prix * (item.quantity ?? 0),
    0,
  );
  const tva = total * 0.2;

  const produitsPanier = produits.filter((produit) =>
    cart.some((pan) => pan.id === produit.id),
  );

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur: {error.message}</div>;
  }

  if (produitsPanier.length === 0) {
    return <div>Aucun produit dans le Panier</div>;
  }

  // Ajout du return principal
  return (
    <div>
      <h2>Votre sélection</h2>
      <div>
        {produitsPanier.map((produit) => {
          const cartItem = cart.find((item) => item.id === produit.id);
          const quantity = cartItem?.quantity ?? 0;

          return (
            <div key={produit.id}>
              <h3>{produit.nom}</h3>
              {produit.image_url && (
                <img src={produit.image_url} alt={produit.nom} width="100" />
              )}
              <p>Prix: {produit.prix} €</p>
              <p>Quantité: {quantity}</p>
              <button type="button" onClick={() => onRemoveItem(produit.id)}>
                Retirer du panier
              </button>
            </div>
          );
        })}
      </div>

      <div>
        <h3>Récapitulatif</h3>
        <p>Total HT: {total.toFixed(2)} €</p>
        <p>TVA (20%): {tva.toFixed(2)} €</p>
        <p>Total TTC: {(total + tva).toFixed(2)} €</p>
      </div>
    </div>
  );
};

export default SelectionPanier;
