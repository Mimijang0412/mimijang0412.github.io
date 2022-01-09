import React, { useState } from 'react';
import Image from 'next/image'

const Portfolio = ({ handleClick, show }) => {
	const [filterBy, setFilterBy] = useState('All');
	const [isActive, setIsActive] = useState(true);

	const filters = [
		{ name: 'All', status: false },
		{ name: 'JavaScript', status: false },
		{ name: 'WordPress', status: false },
		{ name: 'etc', status: false },
	];

	const projects = [
		{
			name: 'McMaster Faculty of Humanities',
			description: 'Desctiptionsss',
			imageSrc: '/images/portfolio/mcmasterhumanities-dskt.png',
			link: 'https://mcmaster.humanities.ca',
			imageSrcMbl: '/images/portfolio/mcmasterhumanities-mbl.png',
			tag: 'All WordPress JavaScript',
		},
		{
			name: 'Roche HCP Portals',
			description: 'Desctiptionsss',
			imageSrc: '/images/portfolio/rochehcpportal-dskt.png',
			link: 'https://rocheproplus.ca',
			imageSrcMbl: '/images/portfolio/rochehcpportal-mbl.png',
			tag: 'All AEM JavaScript Etc',
		},
		{
			name: 'MerckConnect',
			description: 'Desctiptionsss',
			imageSrc: '/images/portfolio/merckconnect-dskt.png',
			link: 'https://merckconnect.ca',
			imageSrcMbl: '/images/portfolio/merckconnect-mbl.png',
			tag: 'All JavaScript',
		},
		{
			name: 'Merck.ca',
			description: 'Desctiptionsss',
			imageSrc: '/images/portfolio/merck-dskt.png',
			link: 'https://merck.ca',
			imageSrcMbl: '/images/portfolio/merck-mbl.png',
			tag: 'All Tridion etc',
		},
		{
			name: 'Budweiser Contest',
			description: 'Desctiptionsss',
			imageSrc: '/images/portfolio/budweiser-dskt.png',
			link: '/',
			imageSrcMbl: '/images/portfolio/budweiser-mbl.png',
			tag: 'All JavaScript',
		},
		{
			name: 'Pepsi Bt Cup',
			description: 'Desctiptionsss',
			imageSrc: '/images/portfolio/btcup-dskt.png',
			link: '/',
			imageSrcMbl: '/images/portfolio/btcup-mbl.png',
			tag: 'All JavaScript Laravel Php',
		},
		{
			name: 'Labatt',
			description: 'Desctiptionsss',
			imageSrc: '/images/portfolio/labatt-dskt.png',
			link: '/',
			imageSrcMbl: '/images/portfolio/labatt-mbl.png',
			tag: 'All JavaScript React Next',
		},
		{
			name: 'Merck Harmony',
			description: 'Desctiptionsss',
			imageSrc: '/images/portfolio/merckharmony-dskt.png',
			link: '/',
			imageSrcMbl: '/images/portfolio/merckharmony-mbl.png',
			tag: 'All Tridion etc',
		},
		{
			name: 'B honey',
			description: 'Desctiptionsss',
			imageSrc: '/images/portfolio/bhoney-dskt.png',
			link: '/',
			imageSrcMbl: '/images/portfolio/bhoney-mbl.png',
			tag: 'All JavaScript',
		},
		{
			name: 'Merck Essencelle',
			description: 'Desctiptionsss',
			imageSrc: '/images/portfolio/merckessencelle-dskt.png',
			link: '/',
			imageSrcMbl: '/images/portfolio/merckessencelle-mbl.png',
			tag: 'All JavaScript WordPress',
		},
	];

	function onClickFilter(e) {
		e.preventDefault();
		let filterBy = e.target.parentElement.value;
		setFilterBy(filterBy);
		setIsActive(false);
		setTimeout(() => {
			setIsActive(true);
		}, 100);
	}

	return (
		<section
			id='portfolio'
			className='relative overflow-visible py-10 md:py-20 bg-white text-black dark:bg-black dark:text-white'
		>
			<h1 className='text-3xl md:text-4xl dark:text-white text-center mb-8'>
				Projects
			</h1>
			<div className='w-full px-6 md:w-3/4 md:px-0 mx-auto min-h-[500px]'>
				<div className='w-full flex flex-col sm:flex-row flex-wrap justify-center items-center relative mb-10'>
					{filters.map((filter, index) => (
						<button
							className='inline-block relative w-[120px] h-[40px] bg-transparent hover:text-white hover:bg-gray-300 mx-auto transition-all duration-1000'
							onClick={onClickFilter}
							value={filter.name}
							key={index}
						>
							<svg
								className='btn-svg border absolute left-0 top-0 stroke-black dark:stroke-white transition-all duration-1000'
								width='120px'
								height='40px'
								viewBox='0 0 120 40'
							>
								<polyline
									points='119,1 119,39 1,39 1,1 119,1'
									className='bg-line'
								/>
								<polyline
									points='119,1 119,39 1,39 1,1 119,1'
									className='hl-line'
								/>
							</svg>
							<span className='text-black dark:text-white'>
								{filter.name}
							</span>
						</button>
					))}
				</div>
				<div className='bg-white dark:bg-black'>
					<div className='portfolio-items flex flex-wrap'>
						{projects
							.filter((project) => project.tag.includes(filterBy))
							.map((filteredProject, index) => (
								<div
									className={`portfolio-item-active ${
										isActive ? 'is-animated' : 'hidden'
									} overflow-hidden relative w-full h-60 lg:h-80 sm:w-[49%] lg:w-[33%] my-1 sm:my-1.5 lg:my-[2px] text-black dark:text-white`}
									key={index}
								>
									<div
										className='portfolio-name absolute top-0 w-full h-full bg-yellow-300 text-black opacity-0 hover:opacity-100 transition-all duration-700
                    flex flex-col align-middle justify-center items-center text-center group z-[100]'
									>
										<div className='absolute top-0 group-hover:top-12 transition-all duration-300 opacity-0 group-hover:opacity-100'>
											<p className='text-xl font-bold mb-2'>
												{filteredProject.name}
											</p>
											<p className='text-base mb-2'>
												{filteredProject.description}
											</p>
										</div>
										<button
											// href={filteredProject.link}
											onClick={handleClick}
											className='inline-block py-2 px-6 border-1 border-black text-black absolute bottom-0 group-hover:bottom-10 transition-all duration-300 opacity-0 group-hover:opacity-100'
										>
											VIEW
										</button>
									</div>
									<Image
										className='w-full hover:opacity-75'
										src={filteredProject.imageSrc}
										alt={filteredProject.name}
                    layout="fill"
									/>
									{/* <div id='modal' className='modal fixed border-red border-2'>
										<div className='modal-wrapper'>
											<div className='' key={index}>
												<h2>{filteredProject.name}</h2>
											</div>
										</div>
									</div> */}
								</div>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
