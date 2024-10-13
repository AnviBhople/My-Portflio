import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
	const navLinkStyle = {
		textDecoration: "none",
		color: "black",
		transition:
			"transform 0.4s ease, background-color 0.4s ease, border 0.4s ease",
	};

	const cardStyle = {
		backgroundColor: "#adb5bd",
		width: "15rem",
		margin: "1rem",
		padding: "1rem",
		border: "2px solid black",
		borderRadius: "10%",
		boxShadow: "10px 10px #0b0c10",
		transition:
			"transform 0.4s ease, background-color 0.4s ease, border 0.4s ease",
	};

	const handleHoverEffect = (e) => {
		e.currentTarget.style.backgroundColor = "#6c757d";
		e.currentTarget.style.color = "#fff";
		e.currentTarget.style.fontWeight = "bold";
		e.currentTarget.style.padding = "20px";
		e.currentTarget.style.transform = "scale(1.05)";
	};

	const removeHoverEffect = (e) => {
		e.currentTarget.style.backgroundColor = "#adb5bd";
		e.currentTarget.style.color = "black";
		e.currentTarget.style.fontWeight = "normal";
		e.currentTarget.style.padding = "1rem";
		e.currentTarget.style.transform = "scale(1)";
	};

	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
				<Link className="navbar-brand" to="/">
					Home
				</Link>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav me-auto">
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/portfolio">
								Portfolio
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/skills">
								Skills
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/contact">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>

			<h1
				className="text-center mt-5"
				style={{ fontWeight: "bold", color: "white" }}>
				My Portfolio
			</h1>

			<div className="container d-flex flex-wrap justify-content-center mt-5 mb-5">
				<div
					className="project-card"
					style={cardStyle}
					onMouseOver={handleHoverEffect}
					onMouseOut={removeHoverEffect}>
					<h3>Sign-Up App</h3>
					<p>
						A landing page where users can sign up, log in, reset passwords, and
						sign up with Google.
						<br />
						<strong>Technologies:</strong> React, reCAPTCHA, CSS
						<br />
						<a
							href="https://github.com/AnviBhople/Sign-Up"
							target="_blank"
							rel="noopener noreferrer"
							style={navLinkStyle}>
							View on GitHub
						</a>
					</p>
				</div>

				<div
					className="project-card"
					style={cardStyle}
					onMouseOver={handleHoverEffect}
					onMouseOut={removeHoverEffect}>
					<h3>SyncSpace</h3>
					<p>
						SyncSpace is a work, space, and time management web app.
						<br />
						<strong>Technologies:</strong> React, reCAPTCHA, CSS
						<br />
						<a
							href="https://github.com/AnviBhople/SyncSpace"
							target="_blank"
							rel="noopener noreferrer"
							style={navLinkStyle}>
							View on GitHub
						</a>
					</p>
				</div>

				<div
					className="project-card"
					style={cardStyle}
					onMouseOver={handleHoverEffect}
					onMouseOut={removeHoverEffect}>
					<h3>Food Store</h3>
					<p>
						An online food ordering platform for browsing restaurant options.
						<br />
						<strong>Technologies:</strong> HTML, CSS, JavaScript, Node.js
						<br />
						<a
							href="https://github.com/AnviBhople/Food-Store"
							target="_blank"
							rel="noopener noreferrer"
							style={navLinkStyle}>
							View on GitHub
						</a>
					</p>
				</div>

				<div
					className="project-card"
					style={cardStyle}
					onMouseOver={handleHoverEffect}
					onMouseOut={removeHoverEffect}>
					<h3>Rock Paper Scissors</h3>
					<p>
						A fun game designed for users to play against the computer.
						<br />
						<strong>Technologies:</strong> HTML, CSS, JavaScript
						<br />
						<a
							href="https://github.com/AnviBhople/Rock-Paper-Scissors"
							target="_blank"
							rel="noopener noreferrer"
							style={navLinkStyle}>
							View on GitHub
						</a>
					</p>
				</div>
			</div>

			<footer className="footer">
				<h3>
					With ❤️ from&ensp;
					<a href="/" style={{ textDecoration: "none", color: "#6c757d" }}>
						Anvi
					</a>
				</h3>
				<div className="connect">
					<p>Connect with me</p>
					<a href="https://github.com/AnviBhople" style={navLinkStyle}>
						GitHub
					</a>
					&ensp;
					<a
						href="https://linkedin.com/in/anvi-bhople-a8431a27b"
						style={navLinkStyle}>
						LinkedIn
					</a>
					&ensp;
					<a href="https://medium.com/@anvibhople" style={navLinkStyle}>
						Medium
					</a>
				</div>
			</footer>
		</>
	);
}
