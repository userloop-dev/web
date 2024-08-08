'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/app-components/button';
import { cn } from '@/utils';

interface M_CommonCTA_Props extends React.HTMLAttributes<HTMLDivElement> {}

export const M_CommonCTA = ({ className }: M_CommonCTA_Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });

	return (
		<div
			ref={ref}
			className={cn('relative z-30 w-full flex flex-col items-center justify-center text-center h-full rounded-lg overflow-clip py-24 gap-2', className)}
		>
			<motion.div
				className='z-20 text-4xl text-surface-light font-normal leading-tight'
				initial={{ opacity: 0, y: 10 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
				transition={{ delay: 0.1 }}
			>
				Get Started for Free
			</motion.div>
			<motion.div
				className='z-20 text-md text-surface-dark font-normal max-w-xs leading-relaxed'
				initial={{ opacity: 0, y: 10 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
				transition={{ delay: 0.2 }}
			>
				Your first 100 events per month are on us.
			</motion.div>
			<motion.div initial={{ opacity: 0, y: 10 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }} transition={{ delay: 0.3 }}>
				<Button
					variant='solid'
					className='z-20 mt-4 bg-surface-light border-surface-light hover:bg-surface-medium hover:border-surface-medium text-text-dark'
				>
					Get Started for Free
					<ArrowUpRight strokeWidth={1.75} className='h-4 w-4 text-text-light' />
				</Button>
			</motion.div>

			<img src='header-bg2.jpg' alt='Background' className='-z-10 absolute top-0 left-0 w-full h-full object-cover' />
		</div>
	);
};
