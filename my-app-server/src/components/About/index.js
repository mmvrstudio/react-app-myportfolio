import React from 'react';
function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About</h1>
			</div>
			<div className="center">
				 <img
					src={require('../../assets/images/me_transparency.png')}
					alt="about-me"
					className="photo"
				/> 
			</div>
			<div>
				<p style={{textAlign:"center"}}>
					Smart contracts and digital assets developer - NFTs -

				</p>
				<p>
					{' '}
					<a
						href="https://github.com/mmvrstudio"
						//target="_blank"
					>
					</a>
					
				</p>
			</div>
		</section>
	);
}
export default About;
