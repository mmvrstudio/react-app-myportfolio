import React from 'react';
import Project from '../Project';
function Portfolio() {
	const projects = [
		{
			name: 'SOLIDITY-Test_ERC721',
			description:'NFT / ERC721 Smart Contract ',
			technologies: ['Solidity'],
			github: 'https://github.com/mmvrstudio/SOLIDITY-TestERC721',
			image: 'Solidity.png',
		},
		{
			name: 'NOSQLDatabase-Social_Network_API',
			description:
				'This project is essencially an API created for a social network using MongoDB. With this database my website is able to handle large amounts of data. In this project I will use Mongoose and Express.js for routing.',
			technologies: ['Insomnia','JavaScript','NoSql','Node.js','MongoDB','Mongoose','Express & Sequelize','Heroku',
			],
			github: 'https://github.com/mmvrstudio/NOSQLDatabase-SocialNetworkAPI',
			image:'Insomnia.png'
		},
		
		{
			name: 'MYSQLDatabase-EmployeeTracker',
			description:
				'Back end application for managing my company s employees using node, inquirer and MySQL.',
			technologies: [
				'JavaScript','MySQL','Node.js','Expressjs','Heroku'],
			github: 'https://github.com/mmvrstudio/MYSQLDatabase-EmployeeTracker',
			image:'MySQL.png'
			
		},
		
		{
			name: 'JAVASCRIPT-PWA-Budget_Tracker',
			description:
				'This budget tracker is the easiest way to track your expenses, anytime, anywhere, specially if you re offline! The user is able to access the input information even without internet connection. Their info is stored in the app and when it goes back online it recognizes all the changes made offline. Amazing syncronization!',
			technologies: ['HTML/CSS', ' MongoDB Atlas', 'JavaScript', 'Heroku'],
			github: 'https://github.com/mmvrstudio/JAVASCRIPT-PWA-budgettracker',
			deployed: '',
			image:'SH_budgettracker.png'
		},
		{
			name: 'JAVASCRIPT-Alien-Note-Taker',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			technologies: ['HTML/CSS', 'JavaScript','Heroku'],
			github: '',
			deployed: '',
			image:'Alien.png'
		},
		{
			name: 'JAVASCRIPT-Team-Profile-Generator',
			description:
				'This application generates an entertaining team profile based on user input. This applcation uses the Inquirer module from Node.js. The app displays the information on a html page and demonstrates use of Object Oriented Programming.',
			technologies: ['HTML/CSS','JavaScript', 'Heroku'],
			github: 'https://github.com/mmvrstudio/JAVASCRIPT-JEST-ObjectOrientedProgramming_TeamProfileGenerator',
			deployed: 'https://mmvrstudio.github.io/OOP_Team_Profile_Generator/',
			image:'Team_Profile.png'
		},

		{
			name: 'Mernstack-booksearchengine',
			description:' This is a web application using the google books api to search for books. I converted this app from a RESTful API to a GraphQL API and used the Apollo server 3.',
			technologies: ['HTML/CSS', 'JavaScript', 'GraphQL', 'Apollo server', 'MERN Stack', 'MongoDB Atlas', 'Heroku'],
			github: 'https://github.com/mmvrstudio',
			deployed: 'https://mernstack-booksearchengine.herokuapp.com/',
			image:'Book_Search.png'
		},
		{
			name: 'GuitarShop:_E-commerce_BackEnd_API_Development ',
			description:
				' This application allows users to log in with their email address and password and sell their guitars. Users can sign up on High Voltage with a username, email, and password. Users can choose a type of guitar that they would like to sell (Acoustic, Electric, Bass), enter the brand of the guitar, enter a brief description about the guitar, and give a price for the guitar. Users can also log out when they are finished posting their product. ',
			technologies: ['HTML/CSS', 'JavaScript', 'Insomnia', 'Heroku'],
			github: 'https://github.com/mmvrstudio/JAVASCRIPT-EcommerceBackEndAPIDevelopment/edit/main/README.md',
			image:'Guitar_Shop.png'
		},

	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}
export default Portfolio;
