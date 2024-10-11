import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import myImg from "./components/myImg.jpg";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function Main() {
	const Box = {
		height: "37rem",
		width: "45rem",
		border: "2px solid black",
		backgroundColor: "#adb5bd",
		marginTop: "5rem",
		marginBottom: "5rem",
		paddingLeft: "2rem",
		paddingRight: "2rem",
		boxShadow: "10px 10px #0b0c10",
		borderRadius: "10%",
		color: "black",
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
			<br />
			<br />
			<div className="container">
				<div className="my-img">
					<img src={myImg} className="myImg" alt="" />
				</div>
				<br />
				<br />
				<br />
				<div className="text-content" style={Box}>
					<br />

					<h1>Hi, I'm Anvi.</h1>

					<p>
						Hello! I’m Anvi Bhople, a passionate front-end developer hailing
						from India. With a deep-seated enthusiasm for technology, I
						specialize in creating dynamic and visually appealing web interfaces
						using React, Bootstrap, Tailwind and JavaScript. Currently, I’m in
						my second year of studying Computer Science, where I’m honing my
						skills and exploring the latest advancements in tech. <br />
						Throughout my journey, I’ve successfully developed a range of
						projects that reflect my commitment to crafting seamless user
						experiences. My work blends design aesthetics with robust
						functionality, aiming to deliver not just beautiful but also
						intuitive web solutions. I’m driven by a love for coding and a
						desire to push the boundaries of what’s possible in web development.
						<br></br> Beyond my projects, I’m always excited to stay ahead of
						the curve by diving into new technologies and methodologies. Whether
						it's tackling complex challenges, optimizing performance or
						exploring innovative solutions, I thrive on continuous learning and
						growth. When I'm not immersed in code, I enjoy keeping up with tech
						trends, experimenting with new tools and brainstorming ideas for
						future projects. Feel free to explore my portfolio and connect with
						me to see how we can collaborate or discuss the latest in tech!
						<br />
					</p>
				</div>
			</div>
			<br />
			<br />
			<br />
			<br />
			<div className="footer">
				<footer>
					<h3 className="footer-content">
						With ❤️ from&ensp;
						<a href="/" className="async">
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

function App() {
	return (
		<>
			<Router>
				<nav />
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/skills" element={<Skills />}></Route>
					<Route path="/portfolio" element={<Portfolio />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
