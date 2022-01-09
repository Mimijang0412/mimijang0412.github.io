import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DarkmodeToggle from '../components/DarkmodeToggle';

const Navigation = () => {
  const [openMblIcon, setOpenMblIcon] = useState(false);

	const navLinks = [
		{ to: '#top', name: 'Home' },
		{ to: '#about', name: 'About' },
		{ to: '#portfolio', name: 'Portfolio' },
		{ to: '#contact', name: 'Contact' },
	];

	function scrollToElement(e) {
		e.preventDefault();
		let url = e.target.href;
		if (url.indexOf('#') > -1) {
			let hash = url.split('#')[1];
			let targetElement = document.getElementById(hash);
			if (targetElement)
				targetElement.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				});
        //if mobile view, close the nav menu
        if(openMblIcon) {
          setOpenMblIcon(!openMblIcon);
        }
		}

	}

	const navAnimation = () => {
		let nav = document.getElementById('nav-wrapper');
		if (nav) {
			nav.classList.remove('top-8');
			nav.classList.remove('opacity-0');
			nav.classList.add('top-0');
			nav.classList.add('opacity-100');
		}
	};

	useEffect(() => {
		setTimeout(() => {
			navAnimation();
		}, 500);
	});

	return (
		<nav className='w-full md:w-3/4 relative mx-auto border-gray-300 border-b-[1px] border-solid dark:border-0 box-border h-12 md:h-24'>
			<div
				id='nav-wrapper'
				className='w-full h-full bg-transparent absolute top-8 opacity-0 duration-500 transition-all'
			>
				<div className='h-full flex items-center align-middle justify-between'>
					<div className='w-1/5 bg-blend-lighten z-[9900]'>
						<Link href='/'>
							<a className='block dark:hidden z-50 transition-all opacity-100 hover:opacity-70 duration-300 mt-1'>
								<Image
									src='/images/mimi-logo-black.png'
									width='100'
									height='90'
									alt='mimi logo'
								></Image>
							</a>
						</Link>
						<Link href='/'>
							<a className='hidden dark:block z-50 dark:opacity-100 transition-all opacity-100 dark:hover:opacity-70 duration-300 mt-1'>
								<Image
									src='/images/mimi-logo-white.png'
									width='100'
									height='90'
									alt='mimi logo dark mode'
								></Image>
							</a>
						</Link>
					</div>
          {/* desktop navigation */}
					<div
						id='nav-desktop'
						className='hidden md:flex md:opacity-100 w-4/5 md:w-3/5 '
					>
						<ul className='w-full h-full p-4 flex justify-evenly items-center'>
							{navLinks.map((link, index) => (
								<li key={index}>
									<Link href={link.to}>
										<a
											onClick={scrollToElement}
											className='text-grey font-bold text-base dark:text-white transition-all hover:opacity-70 duration-300'
										>
											{link.name}
										</a>
									</Link>
								</li>
							))}
						</ul>
						<div className='flex'>
							<DarkmodeToggle navAnimationProp={navAnimation} />
						</div>
					</div>
          {/* mobile navigation */}
					<div
						id='nav-mobile'
						className='fixed right-0 pr-5 md:pr-0 md:relative md:hidden w-4/5 md:w-3/5 flex justify-end md:justify-evenly items-center z-[9000]'
					>
            <div className='flex mr-4 z-[9000]'>
								<DarkmodeToggle
									navAnimationProp={navAnimation}
								/>
						</div>
            <div className={`nav-icon z-[9900] w-[23px] h-[23px] relative transition-all ease-in-out duration-150 cursor-pointer rotate-0 group`} id='navIcon'
               onClick={()=>setOpenMblIcon(!openMblIcon)}>
								<span className={`absolute h-[3px] bg-black dark:bg-white group-hover:bg-yellow-500 rounded-sm opacity-100 rotate-0 transition-all ease-in-out duration-25 ${openMblIcon ? 'top-[18px] w-0 left-1/2' : 'top-[0px] w-full'}`}> </span> 
                <span className={`absolute top-[9px] w-full h-[3px] bg-black dark:bg-white group-hover:bg-yellow-500 rounded-sm opacity-100 transition-all ease-in-out duration-25 ${openMblIcon ? 'rotate-45' : 'rotate-0'}`}> </span>
                <span className={`absolute top-[9px] w-full h-[3px] bg-black dark:bg-white group-hover:bg-yellow-500 rounded-sm opacity-100 transition-all ease-in-out duration-25 ${openMblIcon ? '-rotate-45' : 'rotate-0'}`}> </span>
								<span className={`absolute top-[18px] h-[3px] bg-black dark:bg-white group-hover:bg-yellow-500 rounded-sm opacity-100 rotate-0 transition-all ease-in-out duration-25 ${openMblIcon ? 'w-0 left-1/2': 'w-full'}`}> </span>
						</div>
						<div className={`fixed w-full top-0 bottom-0 h-[100vh] duration-1000 ease-in-out transition-all bg-white dark:bg-black z-[8889] opacity-95 dark:opacity-80 ${openMblIcon ? 'block left-0' : 'left-[120%]'}`}>
							<ul className='w-full h-full p-4 flex justify-evenly items-center flex-col'>
								{navLinks.map((link, index) => (
									<li key={index}>
										<Link href={link.to}>
											<a
												onClick={scrollToElement}
												className='text-grey font-bold text-base dark:text-white transition-all hover:opacity-70 duration-300'
											>
												{link.name}
											</a>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
