'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/app-components/button';
import { cn } from '@/utils';

interface M_CommonHeader_Props extends React.HTMLAttributes<HTMLDivElement> {}

export const M_CommonHeader = ({ className }: M_CommonHeader_Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });

	return (
		<div ref={ref} className={cn('z-20 relative flex flex-col items-center text-center h-full w-full rounded overflow-clip py-36 gap-2', className)}>
			<motion.div
				className='z-20 text-5xl md:text-6xl text-surface-light font-normal max-w-xs md:max-w-md'
				initial={{ opacity: 0, y: 10 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
				transition={{ delay: 0.1 }}
			>
				A Powerful Data Platform for Your Startup
			</motion.div>
			<motion.div
				className='z-20 text-md text-surface-dark font-normal max-w-xs leading-relaxed'
				initial={{ opacity: 0, y: 10 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
				transition={{ delay: 0.2 }}
			>
				Turn your data into a powerful engine for your startup's growth.
			</motion.div>
			<motion.div initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ delay: 0.3 }}>
				<Button
					variant='solid'
					className='z-20 mt-4 bg-surface-light border-surface-light hover:bg-surface-medium hover:border-surface-medium text-text-dark'
					onClick={() => window.open('https://app.userloop.dev/auth/sign-up')}
				>
					Get Started for Free
					<ArrowUpRight strokeWidth={1.75} className='h-4 w-4 text-text-light' />
				</Button>
			</motion.div>

			<motion.div
				className='z-20 flex flex-row gap-2 mt-4 pt-4 border-t border-white/25 items-center'
				initial={{ opacity: 0, y: 10 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
				transition={{ delay: 0.4 }}
			>
				<div className='text-xs text-surface-dark font-normal ml-2'>Trusted by tomorrow's companies</div>
			</motion.div>

			<img src='header-bg1.jpg' alt='Background' className='-z-10 absolute top-0 left-0 w-full h-full object-cover object-top' />
		</div>
	);
};