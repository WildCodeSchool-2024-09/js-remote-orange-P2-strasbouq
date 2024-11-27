import { useState } from "react";
import { useCart } from "../CartContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./panier.css";

const Panier = () => {
  const { cart, onRemoveItem, increaseQuantity, decreaseQuantity, clearCart } =
    useCart(); // Utiliser le contexte du panier
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [pickupDateTime, setPickupDateTime] = useState("2024-11-29T10:00");

  const total = cart.reduce(
    (acc, item) => acc + item.prix * (item.quantity ?? 0),
    0,
  );
  const tva = total * 0.2; // calcul de la TVA à 20%

  const handleSubmit = () => {
    // Vérification des champs requis
    if (!lastName || !firstName || !pickupDateTime) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    // Affichage du message de confirmation
    alert(
      `Votre commande a bien été enregistrée au nom de ${lastName} ${firstName} pour un montant de ${(
        total + tva
      ).toFixed(
        2,
      )} €. Vous pourrez retirer votre commande le ${pickupDateTime}.`,
    );

    // Vider le panier après la validation
    clearCart();
  };

  return (
    <div>
      <Header />
      <div className="panier">
        <h1>Votre Panier</h1>

        {cart.length === 0 ? (
          <div className="cont-pan">
            <p>Votre panier est vide.</p>
          </div>
        ) : (
          <div className="produit">
            {cart.map((item) => (
              <div key={item.id}>
                {item.image_url && (
                  <img src={item.image_url} alt={item.nom} width="100" />
                )}
                <h2>{item.nom}</h2>
                <p>Prix: {item.prix} €</p>
                <p>Quantité: {item.quantity}</p>
                <button type="button" onClick={() => decreaseQuantity(item.id)}>
                  -
                </button>
                <button type="button" onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
                <button type="button" onClick={() => onRemoveItem(item.id)}>
                  Retirer
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="total">
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
          <form>
            <label>
              Nom :
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label>
              Prénom :
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </form>
          <label htmlFor="meeting-time">
            Choisissez la date et l'heure de votre retrait:
          </label>
          <br />
          <input
            type="datetime-local"
            id="meeting-time"
            name="meeting-time"
            value={pickupDateTime}
            onChange={(e) => setPickupDateTime(e.target.value)}
            min="2024-11-29T00:00"
            max="2024-12-31T00:00"
          />
          <p>
            Veuillez retirer votre commande en boutique muni d'une pièce
            d'identité.
          </p>
          <button type="button" onClick={handleSubmit}>
            Valider la commande
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Panier;
