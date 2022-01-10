import React from 'react';
import Head from 'next/head';

export default function Header() {
	return (
		<Head>
			<title>Mimi Jang</title>
			<meta name='description' content="Mimi Jang's Site" />
			<link rel='icon' href='/images/mimi-logo-black.png' />
			<meta property='og:title' content='Mimi Jang' key='title' />
      <meta
				property='og:description'
				content="Mimi Jang's website"
			/>
			<meta
				property='og:image'
				content='/images/mimi-logo-black.png'
			/>
			<meta
				property='og:url'
				content='https://mimijang.com'
			/>
			{/* <meta property='og:image:width' content='1200' />
			<meta property='og:image:height' content='630' /> */}
		</Head>
	);
}
