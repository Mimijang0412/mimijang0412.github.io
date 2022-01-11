import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
	const socialMedia = [
		{
			name: 'Facebook',
			link: 'https://www.facebook.com/mimi.jang.31',
			img: '/images/facebook.png',
		},
		{
			name: 'Instagram',
			link: 'https://www.instagram.com/mimi_jang0412/?hl=en',
			img: '/images/instagram.png',
		},
		{
			name: 'LinkedIn',
			link: 'https://www.linkedin.com/in/mimijang0412/',
			img: '/images/linkedin.png',
		},
	];
	return (
		<footer>
			<div className='w-2/3 md:w-1/4 mx-auto flex justify-evenly'>
				{socialMedia.map((each, i) => (
					<div
						className='bg-white w-12 h-12 rounded-full
          shadow-white hover:-mt-2 transition-all duration-150'
						key={i}
					>
						<Link href={each.link}>
							<a>
								<Image
									width='50'
									height='50'
									src={each.img}
									alt={each.name}
									loading='eager'
								/>
							</a>
						</Link>
					</div>
				))}
			</div>
			<p className='my-4 opacity-75 text-xs text-center text-black dark:text-white'>
				MIMI JANG ©2022
			</p>
		</footer>
	);
};

export default Footer;
