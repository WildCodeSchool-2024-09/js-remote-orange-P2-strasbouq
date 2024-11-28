import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Admin.css";

interface CartItem {
  id: number;
  nom: string;
  prix: number;
  quantity: number;
}

interface Order {
  id: string;
  lastName: string;
  firstName: string;
  pickupDateTime: string;
  cart: CartItem[];
  total: string;
  status: string;
}

const Admin = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    setOrders(storedOrders);
  }, []);

  const updateOrderStatus = (orderId: string, status: string) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status } : order,
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const deleteOrder = (orderId: string) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div>
      <Header />
      <div className="admin">
        <h1>Liste des commandes</h1>
        {orders.length === 0 ? (
          <p>Aucune commande enregistrée.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Date et heure de retrait</th>
                <th>Panier</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.lastName}</td>
                  <td>{order.firstName}</td>
                  <td>{order.pickupDateTime}</td>
                  <td>
                    <ul>
                      {order.cart.map((item) => (
                        <li key={item.id}>
                          {item.nom} - {item.quantity} x {item.prix} €
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>{order.total} €</td>
                  <td>{order.status || "En attente"}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => updateOrderStatus(order.id, "Préparée")}
                    >
                      Commande préparée
                    </button>
                    <button type="button" onClick={() => deleteOrder(order.id)}>
                      Supprimer la commande
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
