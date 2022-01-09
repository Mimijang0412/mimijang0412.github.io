import React from 'react';
const Contact = () => {
	return (
		<div
			id='contact'
			className='text-center bg-white dark:bg-transparent h-96 py-24'
		>
      <h1 className="text-[50px] text-black dark:text-white mb-4">Say Hello</h1>
			<h2 className='text-xl text-center text-black dark:text-white mb-4'>
				Have a question or want to work together? 
			</h2>
			<a href='mailto:mimijang0412@gmail.com'>
				<button className='inline-block relative w-[160px] h-[40px] bg-transparent hover:text-black hover:bg-gray-300 mx-10 transition-all ease-in-out duration-1000'>
					<svg
						className='btn-svg border absolute left-0 top-0 stroke-black dark:stroke-white transition-all ease-in-out duration-1000'
						width='160px'
						height='40px'
						viewBox='0 0 160 40'
					>
						<polyline
							points='159,1 159,39 1,39 1,1 159,1'
							className='bg-line'
						/>
						<polyline
							points='159,1 159,39 1,39 1,1 159,1'
							className='hl-line'
						/>
					</svg>
					<span className='text-black dark:text-white hover:text-black'>Send me an email</span>
				</button>
			</a>
		</div>
	);
};

export default Contact;
