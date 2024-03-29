import '../globals.scss';
import clsx from 'clsx';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export default (ctx: any) => (
	<html lang='en' className={clsx('w-full h-full', inter.className)}>
		<head>
			<title>Userloop • Your Data in Focus</title>
			<meta
				name='description'
				content="Uncover the insights lurking within your application data. Intergrate with a simple Events API to effortlessly capture every event with precision. It's not just about collecting data; it's about discovering the stories they tell."
			/>
			<link rel='shortcut icon' href='/favicon.png' />

			<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16492043817">
			</script>
			<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'AW-16492043817');
			</script>
		</head>

		<body className='bg-grayscale-100'>
			{ctx.children}
			<Analytics />
		</body>
	</html>
);
