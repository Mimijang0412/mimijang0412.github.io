import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from './Modal';

const Portfolio = () => {
	const [filterBy, setFilterBy] = useState('All');
	const [isActive, setIsActive] = useState(true);
	const [show, setShow] = useState(false);
	const [targetModalId, setTargetModalId] = useState();

	const hideModal = (e) => {
		setShow(false);
		// let modal = e.target.closest('.modal')
		// modal.remove()
		// Allow scrolling body tag when modal is not active
		document.documentElement.classList.remove('overflow-hidden');
	};

	const showModal = (e) => {
		setTargetModalId(e.target.id);
		setShow(true);
		let modal = document.getElementById('modal-' + e.target.id);
		let position = document.getElementById('modal-position');
		position.insertAdjacentElement('beforebegin', modal);
		// Disable scrolling body tag when modal active
		document.documentElement.classList.add('overflow-hidden');
	};

	useEffect(() => {
		//escape key to close the modal
		document.addEventListener('keydown', (event) => {
			if (event.key === 'Escape') {
				hideModal();
			}
		});
	});

	const filters = [
		{ name: 'All', status: false },
		{ name: 'JavaScript', status: false },
		{ name: 'WordPress', status: false },
		{ name: 'etc', status: false },
	];

	const projects = [
		{
			name: 'McMaster Faculty of Humanities',
			description: 'Elite Digital Project',
			imageSrc: '/images/portfolio/mcmasterhumanities-dskt.png',
			imageSrcMbl: '/images/portfolio/mcmasterhumanities-mbl.png',
			imageSrcThumbnail:
				'/images/portfolio/mcmasterhumanities-thumbnail.png',
			link: 'https://humanities.mcmaster.ca',
			tag: 'All WordPress JavaScript',
			desktopImgHeight: '650',
			desktopImgHeightSm: '1000',
			desktopImgHeightLg: '2000',
			mobileImgHeight: '3500',
			mobileImgHeightLg: '7000',
		},
		{
			name: 'Roche HCP Portals',
			description: 'Elite Digital Project',
			imageSrc: '/images/portfolio/rochehcpportal-dskt.png',
			imageSrcMbl: '/images/portfolio/rochehcpportal-mbl.png',
			imageSrcThumbnail: '/images/portfolio/rochehcpportal-thumbnail.png',
			link: 'https://rocheproplus.ca',
			tag: 'All AEM JavaScript Etc',
			desktopImgHeight: '400',
			desktopImgHeightSm: '600',
			desktopImgHeightLg: '1300',
			mobileImgHeight: '1000',
			mobileImgHeightLg: '2000',
		},
		{
			name: 'MerckConnect',
			description: 'Elite Digital Project',
			imageSrc: '/images/portfolio/merckconnect-dskt.png',
			imageSrcMbl: '/images/portfolio/merckconnect-mbl.png',
			imageSrcThumbnail: '/images/portfolio/merckconnect-thumbnail.png',
			link: 'https://merckconnect.ca',
			tag: 'All JavaScript',
			desktopImgHeight: '400',
			desktopImgHeightSm: '800',
			desktopImgHeightLg: '1600',
			mobileImgHeight: '1800',
			mobileImgHeightLg: '3600',
		},
		{
			name: 'Merck.ca',
			description: 'Elite Digital Project',
			imageSrc: '/images/portfolio/merck-dskt.png',
			imageSrcMbl: '/images/portfolio/merck-mbl.png',
			imageSrcThumbnail: '/images/portfolio/merck-thumbnail.png',
			link: 'https://www.merck.ca/en/home/',
			tag: 'All Tridion etc',
			desktopImgHeight: '200',
			desktopImgHeightSm: '400',
			desktopImgHeightLg: '800',
			mobileImgHeight: '1000',
			mobileImgHeightLg: '1600',
		},
		{
			name: 'Budweiser Contest',
			description: 'Elite Digital Project',
			imageSrc: '/images/portfolio/budweiser-dskt.png',
			imageSrcMbl: '/images/portfolio/budweiser-mbl.png',
			imageSrcThumbnail: '/images/portfolio/budweiser-thumbnail.png',
			link: '' /*'https://budweiserhockey.elitesitereview.com/'*/,
			tag: 'All JavaScript',
			desktopImgHeight: '400',
			desktopImgHeightSm: '800',
			desktopImgHeightLg: '1000',
			mobileImgHeight: '1600',
			mobileImgHeightLg: '3300',
		},
		{
			name: 'Pepsi Bt Cup',
			description: 'Elite Digital Project',
			imageSrc: '/images/portfolio/btcup-dskt.png',
			imageSrcMbl: '/images/portfolio/btcup-mbl.png',
			imageSrcThumbnail: '/images/portfolio/btcup-thumbnail.png',
			link: '',
			tag: 'All JavaScript Laravel Php',
			desktopImgHeight: '650',
			desktopImgHeightSm: '900',
			desktopImgHeightLg: '1600',
			mobileImgHeight: '300',
			mobileImgHeightLg: '600',
		},
		{
			name: 'Labatt',
			description: 'Elite Digital Project',
			imageSrc: '/images/portfolio/labatt-dskt.png',
			imageSrcMbl: '/images/portfolio/labatt-mbl.png',
			imageSrcThumbnail: '/images/portfolio/labatt-thumbnail.png',
			link: '' /*'https://shopbeergearcontest.elitesitereview.com/'*/,
			tag: 'All JavaScript ReactJS NextJS',
			desktopImgHeight: '200',
			desktopImgHeightSm: '350',
			desktopImgHeightLg: '700',
			mobileImgHeight: '400',
			mobileImgHeightLg: '800',
		},
		{
			name: 'Merck Harmony',
			description: 'Elite Digital Project',
			imageSrc: '/images/portfolio/merckharmony-dskt.png',
			imageSrcMbl: '/images/portfolio/merckharmony-mbl.png',
			imageSrcThumbnail: '/images/portfolio/merckharmony-thumbnail.png',
			link: 'https://harmonyorganon.ca/',
			tag: 'All Tridion etc',
			desktopImgHeight: '300',
			desktopImgHeightSm: '600',
			desktopImgHeightLg: '1200',
			mobileImgHeight: '1400',
			mobileImgHeightLg: '2800',
		},
		{
			name: 'B honey',
			description: 'Elite Digital Project',
			imageSrc: '/images/portfolio/bhoney-dskt.png',
			imageSrcMbl: '/images/portfolio/bhoney-mbl.png',
			imageSrcThumbnail: '/images/portfolio/bhoney-thumbnail.png',
			link: '',
			tag: 'All JavaScript',
			desktopImgHeight: '300',
			desktopImgHeightSm: '600',
			desktopImgHeightLg: '1000',
			mobileImgHeight: '650',
			mobileImgHeightLg: '1300',
		},
		{
			name: 'Merck Essencelle',
			description: 'Elite Digital Project',
			imageSrc: '/images/portfolio/merckessencelle-dskt.png',
			imageSrcMbl: '/images/portfolio/merckessencelle-mbl.png',
			imageSrcThumbnail:
				'/images/portfolio/merckessencelle-thumbnail.png',
			link: '' /*'https://merck-unbrandedc.elitesitereview.com/' */,
			tag: 'All WordPress',
			desktopImgHeight: '550',
			desktopImgHeightSm: '1000',
			desktopImgHeightLg: '2000',
			mobileImgHeight: '1000',
			mobileImgHeightLg: '2000',
		},
		{
			name: "Mimi Jang's website",
			description: "Mimi Jang's personal website",
			imageSrc: '/images/portfolio/mimijang-dskt.png',
			imageSrcMbl: '/images/portfolio/mimijang-mbl.png',
			imageSrcThumbnail: '/images/portfolio/mimijang-thumbnail.png',
			link: '/',
			tag: 'All JavaScript ReactJS NextJS',
			desktopImgHeight: '1000',
			desktopImgHeightSm: '1600',
			desktopImgHeightLg: '3000',
			mobileImgHeight: '1400',
			mobileImgHeightLg: '2800',
		},
		{
			name: 'CanEra Homes',
			description:
				"CanEra Homes Canadian construction company's website ",
			imageSrc: '/images/portfolio/canerahomes-dskt.png',
			imageSrcMbl: '/images/portfolio/canerahomes-mbl.png',
			imageSrcThumbnail: '/images/portfolio/canerahomes-thumbnail.png',
			link: 'https://www.canerahomes.ca',
			tag: 'All wix etc',
			desktopImgHeight: '650',
			desktopImgHeightSm: '1000',
			desktopImgHeightLg: '2000',
			mobileImgHeight: '3500',
			mobileImgHeightLg: '7000',
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
									} overflow-hidden relative w-60 mx-auto mb-3 h-60 lg:h-80 sm:w-[49%] lg:w-[33%] my-1 sm:my-1.5 lg:my-[2px] text-black dark:text-white`}
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
											id={index}
											onClick={showModal}
											className='inline-block py-2 px-6 border-1 border-black text-black absolute bottom-0 group-hover:bottom-14 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:font-bold'
										>
											VIEW
										</button>
									</div>
									<div className='overflow-scroll'>
										<div className='w-full h-full'>
											<Image
												className='hover:opacity-75'
												src={
													filteredProject.imageSrcThumbnail
												}
												alt={filteredProject.name}
												layout='fill'
												loading='eager'
											/>
										</div>
									</div>
									<Modal
										content={filteredProject}
										modalId={index}
										targetModalId={targetModalId}
										showProp={show}
										handleClick={showModal}
										handleClose={hideModal}
									/>
								</div>
							))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
