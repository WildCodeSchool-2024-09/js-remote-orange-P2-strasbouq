import { useCart } from "../CartContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Panier = () => {
  const { cart, onRemoveItem } = useCart(); // Utiliser le contexte du panier
  const total = cart.reduce(
    (acc, item) => acc + item.prix * (item.quantity ?? 0),
    0,
  );
  const tva = total * 0.2; // calcul de la TVA à 20%

  return (
    <div>
      <Header />
      <h1>Votre Panier</h1>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <h2>{item.nom}</h2>
              {item.image_url && (
                <img src={item.image_url} alt={item.nom} width="100" />
              )}
              <p>Prix: {item.prix} €</p>
              <p>Quantité: {item.quantity}</p>
              <button type="button" onClick={() => onRemoveItem(item.id)}>
                Retirer
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <>
          <h2>Total: {total.toFixed(2)} €</h2>
          <h2>TVA: {tva.toFixed(2)} €</h2>
          <h2>Total à payer: {(total + tva).toFixed(2)} €</h2>
        </>
      )}
      <div>
        <h3>Mode de paiement</h3>
        <select>
          <option value="credit-card">Carte de crédit</option>
          <option value="paypal">PayPal</option>
          <option value="bank-transfer">Virement bancaire</option>
        </select>
      </div>
      <div>
        <p>
          Veuillez retirer votre commande en boutique muni d'une pièce
          d'identité.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Panier;
