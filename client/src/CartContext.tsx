import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

interface Produit {
  price: number;
  id: number;
  image_url: string;
  nom: string;
  description: string;
  prix: number;
  quantity: number;
}

interface CartContextType {
  cart: Produit[];
  addToCart: (produit: Produit) => void;
  onRemoveItem: (id: number) => void;
  setCart: React.Dispatch<React.SetStateAction<Produit[]>>;
  // Nouvelles fonctionnalités
  getTotal: () => number;
  getTotalItems: () => number;
  updateQuantity: (id: number, newQuantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Produit[]>(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    return savedCart;
  });

  // Sauvegarder le panier dans localStorage à chaque modification
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (produit: Produit) => {
    setCart((currentCart) => {
      const produitExistant = currentCart.find(
        (item) => item.id === produit.id,
      );

      if (produitExistant) {
        return currentCart.map((item) =>
          item.id === produit.id
            ? { ...item, quantity: item.quantity + produit.quantity }
            : item,
        );
      }
      return [...currentCart, produit];
    });
  };

  const onRemoveItem = (id: number) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  // Nouvelle fonction pour calculer le total
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.prix * item.quantity, 0);
  };

  // Nouvelle fonction pour obtenir le nombre total d'articles
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Nouvelle fonction pour mettre à jour la quantité d'un produit
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  // Nouvelle fonction pour vider le panier
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        setCart,
        onRemoveItem,
        getTotal,
        getTotalItems,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
