// import React from "react";
// import { Link } from "react-router-dom";

// export default function Skills() {
// 	const Box = {
// 		height: "45rem",
// 		width: "40rem",
// 		border: "2px solid black",
// 		backgroundColor: "#adb5bd",
// 		marginTop: "5rem",
// 		marginBottom: "5rem",
// 		marginLeft: "30rem",
// 		marginRight: "15rem",
// 		boxShadow: "10px 10px #0b0c10",
// 		borderRadius: "10%",
// 	};
// 	const textContent = {
// 		color: "white",
// 		flex: 1,
// 		marginRight: "15rem",
// 		marginLeft: "15rem",
// 	};
// 	const Async = {
// 		tetDecoration: "none",
// 		fontWeight: "bold",
// 		fontSize: "xx-large",
// 		color: "#6c757d",
// 	};
// 	return (
// 		<>
// 			<nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
// 				<Link className="navbar-brand" to="/">
// 					Home
// 				</Link>
// 				<button
// 					className="navbar-toggler d-lg-none"
// 					type="button"
// 					data-bs-toggle="collapse"
// 					data-bs-target="#collapsibleNavId"
// 					aria-controls="collapsibleNavId"
// 					aria-expanded="false"
// 					aria-label="Toggle navigation"></button>
// 				<div className="collapse navbar-collapse" id="collapsibleNavId">
// 					<ul className="navbar-nav me-auto mt-2 mt-lg-0">
// 						<li className="nav-item">
// 							<Link className="nav-link active" to="/about" aria-current="page">
// 								About
// 							</Link>
// 						</li>
// 						<li className="nav-item">
// 							<Link
// 								className="nav-link active"
// 								to="/portfolio"
// 								aria-current="page">
// 								Portfolio
// 							</Link>
// 						</li>
// 						<li className="nav-item">
// 							<Link
// 								className="nav-link active"
// 								to="/skills"
// 								aria-current="page">
// 								Skills
// 							</Link>
// 						</li>
// 						<li className="nav-item">
// 							<Link
// 								className="nav-link active"
// 								to="/contact"
// 								aria-current="page">
// 								Contact
// 							</Link>
// 						</li>
// 					</ul>
// 				</div>
// 			</nav>

// 			<div className="container" style={Box}>
// 				<div className="text-content" style={textContent}>
// 					<h2>Technical Skills</h2>
// 					<h4>● &ensp; Programming languages</h4>
// 					<p> &ensp;&ensp;&ensp;&ensp;&ensp; JavaScript, Python, C/C++</p>
// 					<h4>● &ensp; Frontend Development</h4>
// 					<p>
// 						&ensp;&ensp;&ensp;&ensp;&ensp; ● &ensp; Frameworks/Libraries:
// 						React.js, Bootstrap, Tailwind CSS
// 					</p>{" "}
// 					<p>
// 						&ensp;&ensp;&ensp;&ensp;&ensp; ● &ensp; Web Technologies: HTML5,
// 						CSS3 and JavaScript
// 					</p>{" "}
// 					<p>&ensp;&ensp;&ensp;&ensp;&ensp; ● &ensp; UI/UX: Figma</p>
// 					<h4>● &ensp; Backend Development</h4>
// 					<p>
// 						&ensp;&ensp;&ensp;&ensp;&ensp; ● &ensp; Technologies: Node.js,
// 						Express.js
// 					</p>{" "}
// 					<p>&ensp;&ensp;&ensp;&ensp;&ensp; ● &ensp; Database: MongoDB</p>{" "}
// 					<h4>● &ensp; Version Control: &ensp;</h4>
// 					<p>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Git and Github</p>
// 					<br />
// 					<h2>Development Tools</h2>
// 					<h4>● &ensp; IDEs/Editors: </h4>
// 					<p>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Visual Studio Code, Replit</p>
// 					<br />
// 					<h2>Other Skills</h2>
// 					<h4>● &ensp; Logic Building: </h4>
// 					<p>
// 						&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Problem-solving using Data
// 						Structures and Algorithms in C++
// 					</p>
// 				</div>
// 				<br />
// 				<br />
// 			</div>
// 			<div className="footer">
// 				<footer>
// 					<h3 className="footer-content">
// 						With ❤️ from &ensp;
// 						<Link to="/" className="async" style={Async}>
// 							Anvi
// 						</Link>
// 					</h3>
// 					<div className="connect">
// 						<p className="para-connect">Connect with me</p>
// 						<Link to="/github" className="connect-links">
// 							Github &ensp;
// 						</Link>
// 						<Link to="/linkedin" className="connect-links">
// 							LinkedIn&ensp;
// 						</Link>

// 						<br />
// 					</div>
// 				</footer>
// 			</div>
// 		</>
// 	);
// }

import React from "react";
import { Link } from "react-router-dom";

export default function Skills() {
	const BoxContainer = {
		display: "flex",
		justifyContent: "space-between",
		marginTop: "5rem",
		marginBottom: "5rem",
		marginLeft: "15rem",
		marginRight: "15rem",
	};
	const Box = {
		height: "auto",
		width: "40rem",
		border: "2px solid black",
		backgroundColor: "#adb5bd",
		padding: "2rem",
		boxShadow: "10px 10px #0b0c10",
		borderRadius: "10%",
	};
	const textContent = {
		color: "black",
	};
	const mainHead = {
		fontWeight: "bold",
	};
	const Async = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#6c757d",
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

			<div className="container" style={BoxContainer}>
				<div className="box" style={Box}>
					<div className="text-content" style={textContent}>
						<h2 style={mainHead}>Technical Skills</h2>
						<h4>● &ensp; Programming languages</h4>
						<p>&ensp;&ensp;&ensp;&ensp;&ensp; JavaScript, Python, C/C++</p>
						<h4>● &ensp; Frontend Development</h4>
						<p>
							&ensp;&ensp;&ensp;&ensp;&ensp; ● &ensp; Frameworks/Libraries:
							React.js, Bootstrap, Tailwind CSS
						</p>
						<p>
							&ensp;&ensp;&ensp;&ensp;&ensp; ● &ensp; Web Technologies: HTML5,
							CSS3 and JavaScript
						</p>
						<p>&ensp;&ensp;&ensp;&ensp;&ensp; ● &ensp; UI/UX: Figma</p>
						<h4>● &ensp; Backend Development</h4>
						<p>
							&ensp;&ensp;&ensp;&ensp;&ensp; ● &ensp; Technologies: Node.js,
							Express.js
						</p>
						<p>&ensp;&ensp;&ensp;&ensp;&ensp; ● &ensp; Database: MongoDB</p>
						<h4>● &ensp; Version Control</h4>
						<p>&ensp;&ensp;&ensp;&ensp;&ensp;Git and GitHub</p>
					</div>
				</div>

				<div className="box" style={Box}>
					<div className="text-content" style={textContent}>
						<h2 style={mainHead}>Development Tools</h2>
						<h4>● &ensp; IDEs/Editors</h4>
						<p>&ensp;&ensp;&ensp;&ensp;&ensp;Visual Studio Code, Replit</p>
						<h2 style={mainHead}>Other Skills</h2>
						<h4>● &ensp; Logic Building</h4>
						<p>
							&ensp;&ensp;&ensp;&ensp;&ensp;Problem-solving using Data
							Structures and Algorithms in &ensp;&ensp;&ensp;&ensp;&ensp;C++
						</p>
					</div>
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
							LinkedIn&ensp;
						</a>
					</div>
				</footer>
			</div>
		</>
	);
}
