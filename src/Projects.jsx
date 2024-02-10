import React from 'react';
import { useFetchProjects } from './fetchProjects';
const Projects = () => {
	const { isLoading, projects } = useFetchProjects();

	return isLoading ? (
		<section className='projects'>
			<h2>Loading...</h2>
		</section>
	) : (
		<section className='projects'>
			<div className='title'>
				<h2>projects</h2>
				<div className='title-underline'></div>
				<div className='projects-center'>
					{projects.map(({ id, img, url, title, git }) => {
						return (
							<a
								key={id}
								href={url}
								target='_blank'
								rel='norefererrer'
								className='project'>
								<img
									src={img}
									alt={title}
									className='img'
								/>
								<h5>{title}</h5>
								{git && (
									<a href={git}>
										<button>code</button>
									</a>
								)}
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Projects;
