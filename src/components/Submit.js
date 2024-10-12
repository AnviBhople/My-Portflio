import React from "react";
import { Link } from "react-router-dom";

export default function Submit() {
	const Box = {
		"box-sizing": "border-box",
		"background-color": "#adb5bd",
		height: "25rem",
		width: "30rem",
		display: "flex",
		"flex-direction": "column",
		"justify-content": "center",
		"align-items": "center",
		border: "2px solid black",
		"border-radius": "10%",
		// border: "radius top 20%",
		"margin-bottom": "10rem",
		"margin-top": "2rem",
		boxShadow: "10px 10px #0b0c10",
		"margin-left": "35rem",
	};
	const Async = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#6c757d",
	};
	const handleClick = () => {
		const btnid = document.getElementById("submit");
		btnid.addEventListener("click", () => {
			alert("Your response has been recorded.");
			console.log("Your response has been recorded.");
		});
	};
	const para = {
		fontWeight: "bold",
		fontSize: "x-large",
		fontFamily: "system-ui, -apple-system, BlinkMacSystem",
		color: "#0b0c10",
	};
	const Btn = {
		cursor: "pointer",
		"margin-left": "2rem",
		"margin-right": "2rem",
		width: "20rem",
		"background-color": "#6c757d",
		border: "1rem solid #6c757d",
		"border-radius": "1rem",
		color: "#fff",
		"font-weight": "bold",
		"font-size": "larger",
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
				<br />
				<p style={para}>
					Your response has been recorded. Your information will not be shared
					with anybody.
				</p>

				<div>
					<button onClick={handleClick} type="submit" id="submit" style={Btn}>
						Done
					</button>
				</div>
				<br />
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
