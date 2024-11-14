import type React from "react";
import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SelectionPanier from "../SelectionPaniers/SelectionPanier";

interface CartItem {
	id: number;
	name: string;
	price: number;
	quantity: number;
}

const Panier: React.FC = () => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const removeItemFromCart = (id: number) => {
		setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	return (
		<>
			<Header />
			<main style={{ padding: "20px" }}>
				<SelectionPanier items={cartItems} onRemoveItem={removeItemFromCart} />
			</main>
			<Footer />
		</>
	);
};

export default Panier;
