import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
	const Box = {
		height: "45rem",
		width: "40rem",
		border: "2px solid black",
		backgroundColor: "#adb5bd",
		marginTop: "5rem",
		marginBottom: "5rem",
		marginLeft: "30rem",
		marginRight: "15rem",
		boxShadow: "10px 10px #0b0c10",
		borderRadius: "10%",
	};
	const Async = {
		tetDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#6c757d",
	};
	const textContent = {
		// color: "white",
		color: "black",
		flex: 1,
		// marginRight: "15rem",
		marginLeft: "10rem",
	};
	const Atags = {
		textDecoration: "none",
		color: "black",
	};
	const H3 = {
		fontWeight: "bold",
	};
	const formLink = {
		textDecoration: "none",
		color: "black",
		fontWeight: "bold",
		fontSize: "larger",
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
			<br />

			<div className="container" style={Box}>
				<div className="text-content" style={textContent}>
					<br />
					<br />
					<h1 style={H3}>Let's conncect</h1>
					<br />
					<br />
					<h4>
						<i className="fa-solid fa-envelope"></i>&ensp;Email
					</h4>
					<p>anvibhople@gmail.com</p>
					<br />

					<h4>
						<i className="fa-solid fa-location-dot"></i>&ensp;Location
					</h4>
					<p>
						<a
							href="https://en.wikipedia.org/wiki/Maharashtra"
							target="_blank"
							style={Atags}
							rel="noreferrer">
							Maharashtra,
						</a>{" "}
						<a
							href="https://en.wikipedia.org/wiki/India"
							target="_blank"
							style={Atags}
							rel="noreferrer">
							{" "}
							India
						</a>
					</p>
					<br />
					<br />
					<h3 style={H3}>My social media profiles</h3>
					<br />

					<h4>
						<i className="fa-brands fa-github"></i>
						<a href="https://github.com/AnviBhople" style={Atags}>
							&ensp;Github
						</a>
					</h4>
					<br />
					<h4>
						<i className="fa-brands fa-linkedin"></i>
						<a
							href="https://linkedin.com/in/anvi-bhople-a8431a27b"
							style={Atags}>
							&ensp;Linkedin
						</a>
					</h4>
					<br />
					<h4>
						<i className="fa-brands fa-medium"></i>
						<a href="https://medium.com/@anvibhople" style={Atags}>
							&ensp;Medium
						</a>
					</h4>
					<br />
					<Link to="/form" style={formLink}>
						Please fill out this form.
					</Link>
					<br />
				</div>
			</div>
			<div className="footer">
				<footer>
					<h3 className="footer-content">
						With ❤️ from &ensp;
						<a href="/" className="async" style={Async}>
							Anvi
						</a>
					</h3>
					<div className="connect">
						<p className="para-connect">Connect with me</p>
						<a href="https://github.com/AnviBhople" className="connect-links">
							Github &ensp;
						</a>
						<a
							href="https://linkedin.com/in/anvi-bhople-a8431a27b"
							className="connect-links">
							LinkedIn&ensp;
						</a>
						<a href="https://medium.com/@anvibhople" className="connect-links">
							Medium&ensp;
						</a>
						<br />
					</div>
				</footer>
			</div>
		</>
	);
}
