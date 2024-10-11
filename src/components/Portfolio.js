import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
	const Async = {
		tetDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#6c757d",
	};
	const textContent = {
		color: "black",
		flex: 1,
		marginLeft: "4rem",
	};
	const Atags = {
		textDecoration: "none",
		color: "black",
	};
	const Box = {
		height: "49rem",
		width: "40rem",
		border: "2px solid black",
		backgroundColor: "#adb5bd",
		marginTop: "5rem",
		marginBottom: "5rem",
		marginLeft: "30rem",
		marginRight: "15rem",
		boxShadow: "10px 10px #0b0c10",
		borderRadius: "10%",
		paddingTop: "2rem",
	};
	const h1 = {
		fontWeight: "bold",
	};
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
				<Link className="navbar-brand" to="/">
					Home
				</Link>
				<button
					className="navbar-toggler d-lg-none"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapsibleNavId"
					aria-controls="collapsibleNavId"
					aria-expanded="false"
					aria-label="Toggle navigation"></button>
				<div className="collapse navbar-collapse" id="collapsibleNavId">
					<ul className="navbar-nav me-auto mt-2 mt-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" to="/about" aria-current="page">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link active"
								to="/portfolio"
								aria-current="page">
								Portfolio
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link active"
								to="/skills"
								aria-current="page">
								Skills
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link active"
								to="/contact"
								aria-current="page">
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
			<div className="container" style={Box}>
				<div className="text-content" style={textContent}>
					<h1 style={h1}>My Portfolio</h1>
					<br />
					<div className="project">
						<h3>Sign-Up App</h3>
						<p>
							A landing page where users can sign up, log in, reset passwords,
							and sign up with Google. The app uses React.js and reCAPTCHA for
							human verification.
							<br />
							<strong>Technologies:</strong> React, reCAPTCHA, CSS
							<br />
							<a
								href="https://github.com/AnviBhople/Sign-Up"
								target="_blank"
								rel="noopener noreferrer"
								style={Atags}>
								View on GitHub
							</a>
						</p>
					</div>
					<div className="project">
						<h3>SyncSpace</h3>
						<p>
							SyncSpace is a work, space and time management web application. It
							minimizes the clutter upto 65% and helps you manaze your time and
							work efficiently.
							<br />
							<strong>Technologies:</strong> React, reCAPTCHA, CSS
							<br />
							<a
								href="https://github.com/AnviBhople/SyncSpace"
								target="_blank"
								rel="noopener noreferrer"
								style={Atags}>
								View on GitHub
							</a>
						</p>
					</div>
					<div className="project">
						<h3>Food Store</h3>
						<p>
							Food Store is an online food ordering platform. Here you can find
							various food options from different restraunts. Enjoy!
							<br />
							<strong>Technologies:</strong> HTML, CSS and JavaScript
							<br />
							<a
								href="https://github.com/AnviBhople/Food-Store"
								target="_blank"
								rel="noopener noreferrer"
								style={Atags}>
								View on GitHub
							</a>
						</p>
					</div>
					<div className="project">
						<h3>Rock Paper Scissors</h3>
						<p>
							Rock-Paper-Scissors is a game desgined to play alongside computer.
							Have fun and enjoy!
							<br />
							<strong>Technologies:</strong> HTML, CSS and JavaScript
							<br />
							<a
								href="https://github.com/AnviBhople/Rock-Paper-Scissors"
								target="_blank"
								rel="noopener noreferrer"
								style={Atags}>
								View on GitHub
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className="footer">
				<footer>
					<h3 className="footer-content">
						With ❤️ from &ensp;
						<Link to="/" className="async" style={Async}>
							Anvi
						</Link>
					</h3>
					<div className="connect">
						<p className="para-connect">Connect with me</p>
						<Link to="/github" className="connect-links">
							Github &ensp;
						</Link>
						<Link to="/linkedin" className="connect-links">
							LinkedIn&ensp;
						</Link>

						<br />
					</div>
				</footer>
			</div>
		</>
	);
}
