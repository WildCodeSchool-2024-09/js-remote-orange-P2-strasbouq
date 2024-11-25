import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface Item {
  id: number;
  nom: string;
  prix: number;
  quantity: number;
}

interface Order {
  id: number;
  lastName: string;
  firstName: string;
  pickupDateTime: string;
  items: Item[];
}

const Admin = () => {
  const orders: Order[] = [
    {
      id: 1,
      lastName: "Dupont",
      firstName: "Jean",
      pickupDateTime: "2024-11-29T10:00",
      items: [
        { id: 101, nom: "Bouquet de roses", prix: 25, quantity: 2 },
        { id: 102, nom: "Bouquet de tulipes", prix: 15, quantity: 1 },
      ],
    },
    {
      id: 2,
      lastName: "Durand",
      firstName: "Marie",
      pickupDateTime: "2024-11-30T14:00",
      items: [{ id: 103, nom: "Bouquet de lys", prix: 30, quantity: 1 }],
    },
  ];

  const calculateTotal = (items: Item[]): number =>
    items.reduce(
      (acc: number, item: Item) => acc + item.prix * item.quantity,
      0
    );

  return (
    <div>
      <Header />
      <div className="admin">
        <h1>Gestion des Commandes</h1>

        {orders.length === 0 ? (
          <p>Aucune commande en cours.</p>
        ) : (
          <div className="commandes">
            {orders.map((order) => (
              <div key={order.id} className="commande">
                <h2>
                  Commande #{order.id} - {order.firstName} {order.lastName}
                </h2>
                <p>Date et heure de retrait : {order.pickupDateTime}</p>
                <div className="items">
                  {order.items.map((item) => (
                    <div key={item.id} className="item">
                      <h3>{item.nom}</h3>
                      <p>Prix: {item.prix} €</p>
                      <p>Quantité: {item.quantity}</p>
                      <p>
                        Sous-total: {(item.prix * item.quantity).toFixed(2)} €
                      </p>
                    </div>
                  ))}
                </div>
                <h3>Total: {calculateTotal(order.items).toFixed(2)} €</h3>
                <button
                  type="button"
                  onClick={() =>
                    console.log("Marquer comme préparée", order.id)
                  }
                >
                  Marquer comme préparée
                </button>
                <button
                  type="button"
                  onClick={() => console.log("Supprimer commande", order.id)}
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
