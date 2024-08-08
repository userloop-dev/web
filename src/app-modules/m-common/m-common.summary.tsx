'use client';

import { cn } from '@/utils';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.45,
			delayChildren: 0.3,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

interface M_CommonSummary_Props extends React.HTMLAttributes<HTMLDivElement> {}

export const M_CommonSummary = ({ className }: M_CommonSummary_Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });

	return (
		<div
			ref={ref}
			className={cn('flex flex-col gap-8 justify-center items-center text-center w-full h-full overflow-clip bg-surface-dark rounded-lg p-4', className)}
		>
			<motion.div
				className='flex-1 z-20 text-xl font-normal leading-relaxed text-text-medium max-w-5xl'
				variants={containerVariants}
				initial='hidden'
				animate={isInView ? 'visible' : 'hidden'}
			>
				Userloop is a data platform designed for startups, combining powerful features with an intuitive interface. Manage and analyze your data
				effortlessly with seamless integration, rapid performance, and scalable solutions.
			</motion.div>
		</div>
	);
};
