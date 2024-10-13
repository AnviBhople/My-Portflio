import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
	const [hover, setHover] = useState(false);
	const Box = {
		height: "auto",
		width: "35rem",
		border: "2px solid black",
		backgroundColor: "#adb5bd",
		marginTop: "5rem",
		marginBottom: "5rem",
		marginLeft: "5rem",
		marginRight: "5rem",
		boxShadow: "10px 10px #0b0c10",
		borderRadius: "10%",
		padding: "2rem",
	};
	const Box2 = {
		height: "auto",
		width: "35rem",
		border: "2px solid black",
		backgroundColor: "#adb5bd",
		marginTop: "2rem",
		marginBottom: "5rem",
		marginLeft: "5rem",
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

	const Bold = {
		fontWeight: "bold",
	};

	const h1Style = {
		fontSize: "3rem",
		// color: hover ? "#ff4500" : "black", // Changes color on hover
		color: hover ? "cyan" : "black", // Changes color on hover
		textTransform: "uppercase",
		textShadow: hover
			? // ? "5px 5px 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 69, 0, 0.8)"
			  "5px 5px 20px rgba(0, 0, 0, 0.5), 0 0 30px black"
			: "3px 3px 10px rgba(0, 0, 0, 0.3)",
		letterSpacing: "2px",
		transform: hover ? "scale(1.1)" : "scale(1)", // Enlarges on hover
		transition: "transform 0.3s ease, text-shadow 0.3s ease, color 0.3s ease", // Smooth transition
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

			<div className="container d-flex justify-content-around">
				<div className="box" style={Box}>
					<h1
						style={h1Style}
						onMouseEnter={() => setHover(true)}
						onMouseLeave={() => setHover(false)}>
						About me
					</h1>
					<h5>
						I'm Anvi, a passionate front-end developer with a love for creating
						dynamic and engaging web experiences. I'm constantly learning and
						exploring new technologies to deliver intuitive and beautiful
						solutions. My work is driven by a desire to push the boundaries of
						what's possible in web development. I'm excited to collaborate on
						exciting projects and discuss the latest in tech!
					</h5>
				</div>

				<div className="box2" style={Box2}>
					<p style={Bold}>
						● Who is Anvi?
						<br /> A passionate front-end developer from India. <br />
						<br /> ● What are her skills? <br /> She uses React.js, Bootstrap,
						Tailwind CSS, HTML5, CSS3 and JavaScript to create visually
						appealing websites. <br />
						<br /> ● What are her goals? <br /> To create intuitive web
						solutions that are both beautiful and functional. <br />
						<br /> ● What drives her? <br /> A love for coding and a desire to
						push the boundaries of what's possible in web development. <br />
						<br /> ● What are her interests? <br /> She tries to drive the
						progress by learning new technologies, experimenting with new tools
						and brainstorming ideas for future projects.
						<br />
						<br /> The overall message is that Anvi is a skilled and driven
						developer who's eager to collaborate and learn. The call to action
						at the end encourages visitors to explore their portfolio and
						connect for further discussion.
					</p>
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
