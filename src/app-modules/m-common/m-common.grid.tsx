'use client';

import { M_CommonApp } from './m-common.app';
import { M_CommonHeaderStorage } from './m-common.headerStorage';
import { M_CommonHeaderApi } from './m-common.headerApi';
import { M_CommonHeaderViews } from './m-common.headerViews';
import { M_CommonHeaderWorkflows } from './m-common.headerWorkflows';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface M_CommonGrid_Props extends React.HTMLAttributes<HTMLDivElement> {}

export const M_CommonGrid = ({ className }: M_CommonGrid_Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	return (
		<div ref={ref} className='z-30 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-2 overflow-x-clip'>
			<motion.div
				className='col-span-1 lg:col-span-2 row-span-1'
				animate={isInView ? { rotate: '0deg', translateX: 0, translateY: 0 } : { translateX: -40 }}
				transition={{ delay: 0.3 }}
			>
				<M_CommonHeaderStorage />
			</motion.div>
			<motion.div
				className='col-span-1 lg:col-span-2 row-span-1'
				animate={isInView ? { rotate: '0deg', translateX: 0, translateY: 0 } : { translateX: -40 }}
				transition={{ delay: 0.3 }}
			>
				<M_CommonHeaderApi />
			</motion.div>
			<motion.div
				className='col-span-1 lg:col-span-2 row-span-1'
				animate={isInView ? { rotate: '0deg', translateX: 0, translateY: 0 } : { translateX: -40 }}
				transition={{ delay: 0.3 }}
			>
				<M_CommonHeaderViews />
			</motion.div>
			<motion.div
				className='col-span-1 lg:col-span-2 row-span-1'
				animate={isInView ? { rotate: '0deg', translateX: 0, translateY: 0 } : { translateX: -40 }}
				transition={{ delay: 0.3 }}
			>
				<M_CommonHeaderWorkflows />
			</motion.div>
		</div>
	);
};
