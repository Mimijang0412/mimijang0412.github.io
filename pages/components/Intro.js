import React, { useEffect } from 'react';
import ScrollDownIcon from './ScrollDownIcon';

const Intro = () => {
	//typing text animation
	useEffect(() => {
		consoleText(
			['Hello World.', "I'm Mimi Jang", 'Full Stack Web Developer'],
			'text',
			['white', 'white', 'gold']
		);
	}, []);

	function consoleText(words, id, colors) {
		if (colors === undefined) colors = ['#fff'];
		var visible = true;
		var con = document.getElementById('console');
		var letterCount = 1;
		var x = 1;
		var waiting = false;
		var target = document.getElementById(id);
		// target.setAttribute('style', 'color:' + colors[0]);
		window.setInterval(function () {
			if (letterCount === 0 && waiting === false) {
				waiting = true;
				target.innerHTML = words[0].substring(0, letterCount);
				window.setTimeout(function () {
					var usedColor = colors.shift();
					colors.push(usedColor);
					var usedWord = words.shift();
					words.push(usedWord);
					x = 1;
					// target.setAttribute('style', 'color:' + colors[0]);
					letterCount += x;
					waiting = false;
				}, 100);
			} else if (
				letterCount === words[0].length + 1 &&
				waiting === false
			) {
				waiting = true;
				window.setTimeout(function () {
					x = -1;
					letterCount += x;
					waiting = false;
				}, 100);
			} else if (waiting === false) {
				target.innerHTML = words[0].substring(0, letterCount);
				letterCount += x;
			}
		}, 80);
		window.setInterval(function () {
			if (visible === true) {
				con.classList.add = 'hidden';
				visible = false;
			} else {
				con.classList.remove = 'hidden';
				visible = true;
			}
		}, 100);
	}
	return (
		<div
			id='intro'
			className='bg-white dark:bg-transparent transition-all duration-400'
		>
				<div className='background-container hidden dark:block dark:opacity-100'>
					<img
						className='hidden dark:block dark:opacity-100'
						id='moon'
						src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png'
						alt='moon image'
					/>
					<div className='stars'></div>
					<div className='twinkling'></div>
					<div className='clouds'></div>
				</div>
			<div className='console-container pt-64 py-36 md:py-60 text-center text-black dark:text-white block mx-auto text-[26px] md:text-[50px]'>
				<span id='text'></span>
				<div
					className='inline-block relative -top-[0.14em] left-[10px] text-black dark:text-white z-50'
					id='console'
				>
					&#95;
				</div>
			</div>
			<ScrollDownIcon/>
		</div>
	);
};

export default Intro;
