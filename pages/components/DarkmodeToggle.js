import React, { useState, useEffect } from 'react';

const DarkmodeToggle = ({ navAnimationProp }) => {
	const [DarkTheme, SetDarkTheme] = useState(false);

	useEffect(() => {
		function checkDarkLocalStorage() {
			if (
				localStorage.getItem('color-theme') === 'dark' ||
				(!('color-theme' in localStorage) &&
					window.matchMedia('(prefers-color-scheme: dark)').matches)
			) {
				return true;
			} else {
				return false;
			}
		}

		if (checkDarkLocalStorage()) {
			document.documentElement.classList.add('dark');
			SetDarkTheme(true);
		} else {
			document.documentElement.classList.remove('dark');
      SetDarkTheme(false);
		}
	}, [DarkTheme]);

	const ToggleThemeBtn = () => {
		if (localStorage.getItem('color-theme')) {
			if (localStorage.getItem('color-theme') === 'light') {
				SetDarkTheme(true);
				localStorage.setItem('color-theme', 'dark');
			} else {
				SetDarkTheme(false);
				localStorage.setItem('color-theme', 'light');
			}
		} else {
			if (document.documentElement.classList.contains('dark')) {
				SetDarkTheme(false);
				localStorage.setItem('color-theme', 'light');
			} else {
				SetDarkTheme(true);
				localStorage.setItem('color-theme', 'dark');
			}
		}
		navAnimation();
	};

	const navAnimation = () => {
		let nav = document.getElementById('nav-wrapper');
		if (nav) {
			nav.classList.remove('transition-all');
			nav.classList.remove('duration-500');
			nav.classList.remove('top-0');
			nav.classList.remove('opacity-100');
			nav.classList.add('top-8');
			nav.classList.add('opacity-0');
		}

		setTimeout(() => {
			nav.classList.add('transition-all');
			nav.classList.add('duration-500');
			navAnimationProp();
		}, 300);
	};
  
	return (
		<button
			id='theme-toggle'
			type='button'
			onClick={ToggleThemeBtn}
			className='text-gray-900 dark:text-gray-100 transition-all hover:text-yellow-400 dark:hover:text-yellow-400 rounded-lg text-sm p-2.5'
		>
			<svg
				className={`theme-toggle-dark-icon w-6 h-6 ${
					DarkTheme ? 'hidden' : 'block opacity-100'
				}`}
				fill='currentColor'
				viewBox='0 0 20 20'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'></path>
			</svg>
			<svg
				className={`theme-toggle-light-icon w-6 h-6 ${
					DarkTheme ? 'block opacity-100' : 'hidden'
				}`}
				fill='currentColor'
				viewBox='0 0 20 20'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
					fillRule='evenodd'
					clipRule='evenodd'
				></path>
			</svg>
		</button>
	);
};

export default DarkmodeToggle;
