import '../globals.scss';
import { Analytics } from '@vercel/analytics/react';
import { cn } from '@/utils';

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export default (ctx: any) => {
	return (
		<html lang='en' className={cn('w-full h-full', GeistSans.variable, GeistMono.variable)}>
			<head>
				<title>Userloop</title>
				<meta
					name='description'
					content='Userloop is an events system. Easily ingests events via the Events API to power visualizations, alarms, workflows, and more. Its time to centralize your teams intelligence.'
				/>
				<link rel='shortcut icon' href='/favicon.png' />
			</head>

			<body>
				{ctx.children}
				<Analytics />
			</body>
		</html>
	);
};
