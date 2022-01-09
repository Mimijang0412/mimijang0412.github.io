import React, { Fragment } from 'react';

const ScrollDownIcon = () => {
	return (
		<Fragment>
			<div
				id='mouse_body'
				className='border-solid border-[2px] border-black dark:border-white rounded-xl h-[43px] w-[23px] mt-0 mx-auto mb-0'
			>
				<div
					id='mouse_wheel'
					className='border-solid border-[2px] border-black dark:border-white rounded-xl bg-black dark:bg-white relative h-[3px] w-[3px] mt-0 mx-auto'
				></div>
			</div>
			<h4 className='mt-[10px] mb-10 text-black dark:text-white text-center'>
				Scroll Down
			</h4>
		</Fragment>
	);
};

export default ScrollDownIcon;
