import '../globals.scss';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { cn } from '@/utils';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export default (ctx: any) => {
	return (
		<html lang='en' className={cn('w-full h-full', GeistSans.variable, GeistMono.variable)}>
			<head>
				<title>Userloop</title>
				<meta name='description' content="Your startup's data platform" />
				<link rel='shortcut icon' href='/favicon.png' />
			</head>

			<body className='bg-surface-100'>
				{ctx.children}
				<Analytics />
			</body>

			<GoogleAnalytics gaId='AW-16492043817' />
		</html>
	);
};
