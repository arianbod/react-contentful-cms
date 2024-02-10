import React from 'react';
import HeroImg from './assets/hero.svg';
const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>Contentful CMS</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas unde
						odio harum consectetur molestiae deserunt ratione. Ducimus, vero
						amet eius repudiandae quam non tempora, inventore eum praesentium
						voluptates nulla. Quisquam.
					</p>
				</div>
				<div className='img-container'>
					<img
						src={HeroImg}
						alt=''
					/>
				</div>
			</div>
			;
		</section>
	);
};

export default Hero;
