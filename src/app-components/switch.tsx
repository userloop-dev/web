'use client';

import { forwardRef } from 'react';
import { Root, Thumb } from '@radix-ui/react-switch';
import { cn } from '@/utils';

const Switch = forwardRef<React.ElementRef<typeof Root>, React.ComponentPropsWithoutRef<typeof Root>>(({ className, ...props }, ref) => (
	<Root
		className={cn(
			'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-info-400 data-[state=unchecked]:bg-grayscale-250',
			className
		)}
		{...props}
		ref={ref}
	>
		<Thumb
			className={cn(
				'pointer-events-none block h-4 w-4 rounded-full bg-grayscale-100 ring-0 transition-all data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0'
			)}
		/>
	</Root>
));
Switch.displayName = Root.displayName;

export { Switch };
