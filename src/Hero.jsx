import React from 'react';
import HeroImg from './assets/hero.svg';
const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>Amin(Arian) Abtahi</h1>
					<p>
						Skilled Front End Developer with expertise in modern web
						technologies and user interface design. Proven track record in
						leading development teams and executing large-scale projects,
						including a major e-learning platform. Committed to delivering
						efficient and scalable front-end solutions
					</p>
				</div>
				<div className='img-container'>
					<img
						src={HeroImg}
						alt='woman and the browser'
					/>
				</div>
			</div>
			;
		</section>
	);
};

export default Hero;
