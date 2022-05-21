import React from "react";
function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Resume</h1>
			</div>
			<div className="bottom-spacing">
				<a href={require("../../assets/files/ResumeMarianaMarques2022.pdf")} download>
					<h4>Download Resume</h4>
				</a>
			</div>
			<div>
				<h5>Full Stack Development: Front-End</h5>
				<ol>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
				</ol>
				<br></br>
				<h5>Full Stack Development: Back-End</h5>
				<ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express.js</li>
					<li>Model View Controller (MVC)</li>
					<li>REST</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
				<h5>Other Tools:</h5>
				<ol>
					<li>Git</li>
					<li>npm</li>
					<li>Jest</li>
				</ol>
				<br></br>
				<h5>Databases: </h5>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;
