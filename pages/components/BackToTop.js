import React from 'react';

const BackToTop = ({ handleClick }) => {
	return (
		<button
			className='backtotop scroll-up inline-block relative w-[40px] h-[40px] bg-transparent hover:text-black hover:bg-gray-300 mx-10 mb-6 transition-all ease-in-out duration-1000'
			onClick={handleClick}
		>
			<svg className='btn-svg border absolute left-0 top-0 stroke-black dark:stroke-white transition-all ease-in-out duration-1000'
				width='40px'
				height='40px'
				viewBox='0 0 40 40'
			>
				<polyline
					points='39,1 39,39 1,39 1,1 39,1'
					className='bg-line'
				/>
				<polyline
					points='39,1 39,39 1,39 1,1 39,1'
					className='hl-line'
				/>
			</svg>
			<span className='text-black dark:text-white hover:text-black'>
        <span className='left-bar'></span>
				<span className='right-bar'></span>
				<svg width='40' height='40'>
					<line className='top' x1='0' y1='0' x2='120' y2='0' />
					<line className='left' x1='0' y1='40' x2='0' y2='-80' />
					<line className='bottom' x1='40' y1='40' x2='-80' y2='40' />
					<line className='right' x1='40' y1='0' x2='40' y2='1200' />
				</svg>
         </span>
		</button>
	);
};

export default BackToTop;
