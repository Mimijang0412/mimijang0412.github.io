import React from 'react';
import Image from 'next/image';

const About = () => {
	return (
		<div
			id='about'
			className='relative py-10 md:py-20 px-6 mg:px-40 bg-white text-grey-800 dark:bg-black dark:text-white'
		>
			<div className='w-full md:w-3/4 mx-auto flex flex-col md:flex-row items-center justify-between'>
				<div className='relative overflow-hidden shadow-white profile-img bg-red rounded-full m-4 md:m-12'>
					<Image
						src='/images/mimi.jpg'
						width='400'
						height='400'
						alt='mimi jang'
					/>
				</div>
				<div>
					<h1 className='text-2xl md:text-5xl mb-2 md:mb-4'>
						Hello, I&apos;m Mimi Jang
					</h1>
					<p className='text-lg leading-6 md:text-2xl mb-2'>
						I&apos;m a Front-End Developer in Toronto, CA.
					</p>
					<p className='text-base'>
						I have passion for UI effects, animations and creating
						intuitive, dynamic user experiences. I love creating
						something out of nothing!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
