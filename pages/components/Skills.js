import React, { useEffect } from 'react';

const Skills = () => {
	useEffect(() => {
		window.addEventListener('scroll', barAnimation);
	});

	function barAnimation() {
		var skillsSection = document.querySelector('#skills');
		var windowHeight = window.innerHeight;
		var elementTop = skillsSection.getBoundingClientRect().top;
		var elementVisible = 150;
		if (elementTop < windowHeight - elementVisible) {
			var bars = document.querySelectorAll('.bar--each');
			bars.forEach((bar, i) => {
				setTimeout(() => {
					bar.classList.remove('w-0');
					bar.style.width = bar.nextElementSibling.innerHTML;
				}, i * 100);
			});
		}
	}

	const skills = [
		{
			title: 'HTML',
			percentage: '95%',
		},
		{
			title: 'CSS',
			percentage: '95%',
		},
		{
			title: 'Sass',
			percentage: '95%',
		},
		{
			title: 'Bootstrap',
			percentage: '95%',
		},
		{
			title: 'Tailwinds',
			percentage: '90%',
		},
		{
			title: 'JavaScript',
			percentage: '85%',
		},
		{
			title: 'JQuery',
			percentage: '85%',
		},
		{
			title: 'React Js',
			percentage: '70%',
		},
		{
			title: 'Node Js',
			percentage: '60%',
		},
		{
			title: 'Next Js',
			percentage: '60%',
		},
		{
			title: 'Photoshop',
			percentage: '50%',
		},
	];

	return (
		<div
			id='skills'
			className='bg-white dark:bg-black transition-all duration-400 py-10 md:py-20'
		>
			<div className='w-full px-6 md:w-3/4 mx-auto'>
				<h1 className='text-3xl md:text-4xl dark:text-white text-center mb-8'>
					Skills
				</h1>

				{skills.map((skill, index) => (
					<div
						className='flex items-center w-full h-8 mb-4'
						key={index}
					>
						<h2 className='dark:text-white bg-transparent w-1/3 md:w-1/6'>
							{skill.title}
						</h2>
						<div className='bar relative bg-gray-300 w-2/3 md:w-5/6 h-full flex items-center'>
							<div className='bar--each absolute top-0 left-0 w-0 h-full bg-black dark:bg-white transition-all duration-500'></div>
							<span className='text-white dark:text-black absolute right-3'>
								{skill.percentage}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
