'use client';

import { Button } from '@/app-components/button';
import { cn } from '@/utils';
import { ArrowRight, ArrowUpRight, Play, PlayCircle, Star } from 'lucide-react';

interface M_CommonApp_Props extends React.HTMLAttributes<HTMLDivElement> {}

export const M_CommonApp = ({ className }: M_CommonApp_Props) => (
	<div
		className={cn(
			'flex flex-row items-center justify-center bg-gradient-to-b from-text-dark to-[#0C0C0C] h-full w-full rounded-lg overflow-clip px-4 py-12',
			className
		)}
	>
		<div className='flex-1 flex flex-col items-center justify-center text-center gap-4 pl-4 max-w-xl'>
			<div className='z-20 text-3xl text-surface-light font-normal leading-tight'>See Userloop in Action</div>
			<div className='z-20 text-sm text-surface-dark font-normal leading-relaxed mt-1'>
				Watch our demo video and see how Userloop can unlock your data's full potential. See how our platform transforms data into actionable insights,
				driving your startup's growth and innovation.
			</div>
			<Button
				variant='solid'
				className='z-20 mt-4 bg-surface-light border-surface-light hover:bg-surface-medium hover:border-surface-medium text-text-dark'
			>
				Watch a Demo
				<ArrowUpRight strokeWidth={1.75} className='h-4 w-4 text-text-light' />
			</Button>
		</div>
	</div>
);
