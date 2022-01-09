import Header from '../pages/components/Header';
import Navigation from '../pages/components/Navigation';
import Intro from '../pages/components/Intro';
import React, { useEffect, useState } from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Modal from './components/Modal.js';
import BackToTop from './components/BackToTop';

export default function Home() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.onload = function () {
			let loaderWrapper =
			document.getElementsByClassName('loader-wrapper')[0];
			loaderWrapper.style.opacity = 1;
			(function fade() {
				(loaderWrapper.style.opacity -= 0.1) < 0
					? (loaderWrapper.style.display = 'none')
					: setTimeout(fade, 100);
			})();
		};
	});
	const backToTop = () => {
		window.scroll({ top: 0, behavior: 'smooth' });
	};
	useEffect(() => {
		setTimeout(() => {
			window.onscroll = function () {
				function reveal() {
					var reveals = document.querySelectorAll('.reveal');
					reveals.forEach((item) => {
						var windowHeight = window.innerHeight;
						var elementTop = item.getBoundingClientRect().top;
						var elementVisible = 0;

						if (elementTop < windowHeight - elementVisible) {
							item.classList.add('active');
						} else {
							item.classList.remove('active');
						}
					});
				}

				window.addEventListener('scroll', reveal);
			};
		}, 100);
	});

	function showModal() {
		setShow(true);
		console.log('clicked');
	}

	function hideModal() {
		setShow(false);
	}

	return (
		<div>
			{/* loader */}
			<div className='loader-wrapper'>
				<span className='loader'>
					<span className='loader-inner'></span>
				</span>
			</div>
			{/* modal */}
			<Modal show={show} handleClick={showModal} handleClose={hideModal}>
				<p>Modal</p>
			</Modal>
			<Header />
			<Navigation />
			<Intro />
			<div className='reveal'>
				<About />
			</div>
			<div className='bg-white dark:bg-black'>
				<div className='w-3/4 h-[1px] mx-auto text-[0] bg-gray-400'>
					&160;
				</div>
			</div>
			<div className='reveal'>
				<Skills />
			</div>
			<div className='bg-white dark:bg-black'>
				<div className='w-3/4 h-[1px] mx-auto text-[0] bg-gray-400'>
					&160;
				</div>
			</div>
			<div className='reveal'>
				<Portfolio showModalProp={showModal} />
			</div>
			<div className='bg-white dark:bg-black'>
				<div className='w-3/4 h-[1px] mx-auto text-[0] bg-gray-400'>
					&160;
				</div>
			</div>
			<Contact />
      <BackToTop handleClick={backToTop}/>
			<Footer />
		</div>
	);
}
