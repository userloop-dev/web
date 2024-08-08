'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Minus } from 'lucide-react';
import { Button } from '@/app-components/button';
import { cn } from '@/utils';
import { Badge } from '@/app-components/badge';

interface M_CommonPricing_Props extends React.HTMLAttributes<HTMLDivElement> {}

export const M_CommonPricing = ({ className }: M_CommonPricing_Props) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });

	return (
		<div
			ref={ref}
			className={cn(
				'relative flex flex-col items-center text-center h-full w-full rounded-lg overflow-clip pt-24 min-h-[calc(100vh-76px)] gap-2',
				className
			)}
		>
			<motion.div
				className='z-20 text-4xl text-text-dark font-normal leading-tight'
				initial={{ opacity: 0, y: 10 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
				transition={{ delay: 0.1 }}
			>
				Pricing that Scales with You
			</motion.div>
			<motion.div
				className='z-20 text-md text-text-medium font-normal max-w-xs leading-relaxed'
				initial={{ opacity: 0, y: 10 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
				transition={{ delay: 0.2 }}
			>
				Userloop is priced per event ingested. This ensures you aren't billed unexpectedly.
			</motion.div>

			<div className='grid grid-cols-2 grid-rows-2 gap-4 h-96 mt-8'>
				<motion.div className='relative bg-surface-light rounded text-left p-6 h-full col-span-1 row-span-2 max-w-md'>
					<Badge variant='solid' className='absolute -top-1 -left-1 w-6 h-6 flex items-center justify-center'>
						1
					</Badge>
					<div className='flex flex-row gap-2'>
						<div className='text-lg text-text-dark font-normal'>Free</div>
						<div className='text-lg text-text-light font-normal'>100 Events</div>
					</div>
					<div className='text-xs text-text-medium font-normal mt-1 mb-6 pb-2 border-b border-border'>
						Your first 100 events per month are completely free. This free tier is perfect for small projects and applies during every billing
						cycle. You also have access to the complete Userloop suite of products while within this free tier.
					</div>

					<div className='flex flex-col gap-2'>
						<PriceItem text='Unlimited Workspaces' />
						<PriceItem text='Unlimited Members' />
						<PriceItem text='Unlimited Views' />
						<PriceItem text='Unlimited Workflows' />
						<PriceItem text='Dark Theme' />
						<PriceItem text='Around-the-Clock Support' />
					</div>
				</motion.div>
				<motion.div className='relative bg-surface-light rounded text-left p-6 h-full col-span-1 row-span-1 max-w-md'>
					<Badge variant='solid' className='absolute -top-1 -left-1 w-6 h-6 flex items-center justify-center'>
						2
					</Badge>
					<div className='flex flex-row gap-2'>
						<div className='text-lg text-text-dark font-normal'>10 USD</div>
						<div className='text-lg text-text-light font-normal'>For 5000 Events</div>
					</div>
					<div className='text-xs text-text-medium font-normal mt-1'>Turn your data into a powerful engine for your startup's growth.</div>
				</motion.div>
				<motion.div className='relative bg-surface-light rounded text-left p-6 h-full col-span-1 row-span-1 max-w-md'>
					<Badge variant='solid' className='absolute -top-1 -left-1 w-6 h-6 flex items-center justify-center'>
						3
					</Badge>
					<div className='flex flex-row gap-2'>
						<div className='text-lg text-text-dark font-normal'>0.001 USD / Event</div>
					</div>
					<div className='text-xs text-text-medium font-normal mt-1'>Turn your data into a powerful engine for your startup's growth.</div>
				</motion.div>
			</div>
		</div>
	);
};

const PriceItem = ({ text }: { text: string }) => (
	<div className='text-sm text-text-medium font-normal flex flex-row gap-1 items-center'>
		<Minus strokeWidth={1.75} className='h-4 w-4 text-text-light' />
		{text}
	</div>
);
