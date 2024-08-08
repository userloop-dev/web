'use client';

import { Button } from '@/app-components/button';
import { cn } from '@/utils';
import { ArrowUpRight, Database } from 'lucide-react';

interface M_CommonHeaderApi_Props extends React.HTMLAttributes<HTMLDivElement> {}

export const M_CommonHeaderApi = ({}: M_CommonHeaderApi_Props) => (
	<div className='flex-1 flex flex-col items-center justify-center text-center gap-4 bg-surface-light border border-border rounded-lg w-full h-full'>
		<div className='z-20 text-3xl text-text-dark font-normal leading-tight'>Events API</div>
		<div className='z-20 text-sm text-text-medium font-normal leading-relaxed mt-1 max-w-xl'>
			Let's face it, data platforms are often slow, clunky, unintuitive, and bloated. And when you finally find a good one, it costs you your runway.
			Userloop is a data platform designed for startups, combining powerful features with an intuitive interface to offer an unparalleled experience at a
			low price. Our small team is relentlessly focused on customer experience. We're here to help you grow, so feel free to reach out to us.
		</div>
	</div>
);
