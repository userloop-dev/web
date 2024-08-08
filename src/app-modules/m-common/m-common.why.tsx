'use client';

import { Button } from '@/app-components/button';
import { cn } from '@/utils';
import { ArrowRight, ArrowUpRight, Play, PlayCircle, Star } from 'lucide-react';

interface M_CommonWhy_Props extends React.HTMLAttributes<HTMLDivElement> {}

export const M_CommonWhy = ({ className }: M_CommonWhy_Props) => (
	<div
		className={cn(
			'flex flex-row items-center justify-center bg-surface-light border border-border h-full w-full rounded overflow-clip px-4 py-12',
			className
		)}
	>
		<div className='flex-1 flex flex-col items-center justify-center text-center gap-4 max-w-xl'>
			<div className='z-20 text-3xl text-text-dark font-normal leading-tight'>Why Userloop?</div>
			<div className='z-20 text-sm text-text-medium font-normal leading-relaxed mt-1'>
				Let's face it, data platforms are often slow, clunky, unintuitive, and bloated. And when you finally find a good one, it costs you your runway.
				Userloop is a data platform designed for startups, combining powerful features with an intuitive interface to offer an unparalleled experience
				at a low price. Our small team is relentlessly focused on customer experience. We're here to help you grow, so feel free to reach out to us.
			</div>
		</div>
	</div>
);
