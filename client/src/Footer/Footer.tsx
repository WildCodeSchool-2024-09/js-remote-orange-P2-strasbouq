import type { ChangeEvent, FC, FocusEvent, MouseEvent } from "react";
import { useState } from "react";
import "./Footer.css";

const Footer: FC = () => {
	const [email, setEmail] = useState("");

	const handleMouseOver = (e: MouseEvent<HTMLButtonElement>) => {
		e.currentTarget.style.backgroundColor = "#ff8a75";
	};

	const handleMouseOut = (e: MouseEvent<HTMLButtonElement>) => {
		e.currentTarget.style.backgroundColor = "#fdbdb1";
	};

	const handleFocus = (e: FocusEvent<HTMLButtonElement>) => {
		e.currentTarget.style.backgroundColor = "#ff8a75";
	};

	const handleBlur = (e: FocusEvent<HTMLButtonElement>) => {
		e.currentTarget.style.backgroundColor = "#fdbdb1";
	};

	const handleClick = () => {
		if (!validateEmail(email)) {
			alert("Email invalide. Veuillez entrer une adresse email valide.");
		} else {
			alert("Votre inscription a été confirmée!");
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const validateEmail = (email: string) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	};

	return (
		<div className="containerFooter">
			<footer
				className="footer"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					padding: "20px",
					backgroundColor: "#ffe3de",
					height: "200px",
					textAlign: "center",
				}}
			>
				<div className="adresse">
					<h4>StrasBouq</h4>
					<p>111 rue du Bouquet</p>
					<p>67000 Strasbourg</p>
				</div>
				<div
					style={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<h4 style={{ marginBottom: "10px" }}>
						Inscrivez-vous à notre Newsletters
					</h4>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<input
							type="email"
							placeholder="Saisissez votre adresse email"
							style={{
								padding: "10px",
								marginRight: "10px",
								width: "300px",
								border: "none",
								borderRadius: "5px",
							}}
							value={email}
							onChange={handleChange}
						/>
						<button
							type="button"
							style={{
								padding: "10px",
								backgroundColor: "#fdbdb1",
								color: "black",
								border: "none",
								borderRadius: "5px",
								cursor: "pointer",
								transition: "background-color 0.3s",
							}}
							onMouseOver={handleMouseOver}
							onMouseOut={handleMouseOut}
							onFocus={handleFocus}
							onBlur={handleBlur}
							onClick={handleClick}
						>
							Je m'inscris
						</button>
					</div>
				</div>
			</footer>

			<div
				className="container"
				style={{
					textAlign: "center",
					padding: "10px",
					backgroundColor: "white",
					margin: "0px",
				}}
			>
				<p>© 2024 - Tous droits réservés</p>
			</div>
		</div>
	);
};

export default Footer;
