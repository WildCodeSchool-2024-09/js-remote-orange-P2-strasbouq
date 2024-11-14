import type { FC } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface SelectionPanierProps {
  items: CartItem[];
  onRemoveItem: (id: number) => void;
}

const SelectionPanier: FC<SelectionPanierProps> = ({ items, onRemoveItem }) => {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const tva = total * 0.2; // calcul de la TVA à 20%

  return (
    <div>
      <h1>Votre Panier</h1>
      {items.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>Prix: {item.price} €</p>
              <p>Quantité: {item.quantity}</p>
              <button type="button" onClick={() => onRemoveItem(item.id)}>
                Retirer
              </button>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: {total} €</h2>
      <h2>TVA: {tva} €</h2>
      <h2>Total à payer: {total + tva} €</h2>
      <div>
        <h3>Mode de paiement</h3>
        <select>
          <option value="credit-card">Carte de crédit</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Virement bancaire</option>
        </select>
      </div>
      <div>
        <p>Veuillez retirer votre commande en boutique muni d'une pièce d'identité.</p>
      </div>
    </div>
  );
};

export default SelectionPanier;
