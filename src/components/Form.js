import React from "react";
import { Link } from "react-router-dom";

export default function Form() {
	const Box = {
		height: "50rem",
		width: "35rem",
		border: "2px solid black",
		backgroundColor: "#adb5bd",
		marginTop: "5rem",
		marginBottom: "5rem",
		marginLeft: "30rem",
		marginRight: "5rem",
		boxShadow: "10px 10px #0b0c10",
		borderRadius: "10%",
		padding: "2rem",
	};
	const Async = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#6c757d",
	};
	const Label = {
		width: "18rem",
		marginLeft: "3rem",
		fontFamily: "system-ui, -apple-system, BlinkMacSystem",
		fontSize: "larger",
		fontWeight: "bold",
	};
	const input = {
		height: "2.5rem",
		width: "20rem",
		marginLeft: "3rem",
		backgroundColor: "whitesmoke",
		border: "2px solid #e7ecef",
		borderRadius: "1rem",
		paddingLeft: "1rem",
	};
	const h2 = {
		textAlign: "center",
		fontFamily: "system-ui, -apple-system, BlinkMacSystem",
		marginLeft: "5rem",
		color: "#0b0c10",
		fontWeight: "bolder",
	};
	const Btn = {
		marginLeft: "9rem",
		height: "70px",
		width: "190px",
		borderRadius: "5%",
		backgroundColor: "#6c757d",
		color: "white",
		border: "2px solid #6c757d",
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

			<div className="container" style={Box}>
				<form action="form submission">
					<h2 style={h2}>Get in touch</h2>
					<br />
					<label htmlFor="visitorName" style={Label}>
						Name
					</label>
					<br />
					<input type="text" required style={input} />
					<br />
					<br />
					<br />
					<label htmlFor="visitorEmail" style={Label}>
						Email
					</label>
					<br />
					<input type="email" required style={input} />
					<br />
					<br />
					<br />
					<label htmlFor="reason" style={Label}>
						Reason of Contact
					</label>
					<br />
					<input type="text" required style={input} />
					<br />
					<br />
					<br />
					<label htmlFor="visitorPhoneno" style={Label}>
						Phone Number
					</label>
					<br />
					<input type="number" style={input} />
					<br />
					<br />
					<br />
					<label htmlFor="knowMe" style={Label}>
						How did you hear about me?
					</label>
					<br />
					<input type="text" style={input} />
					<br />
					<br />
					<br />
					<Link to="/submit">
						<button type="submit" style={Btn}>
							Let's connect
						</button>
					</Link>
				</form>
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
