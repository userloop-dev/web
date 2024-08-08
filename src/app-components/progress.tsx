import { forwardRef, ComponentPropsWithoutRef, ElementRef } from 'react';
import { Root, Indicator } from '@radix-ui/react-progress';
import { cn } from '@/utils';

const Progress = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(({ className, value, ...props }, ref) => (
	<Root ref={ref} className={cn('relative h-3 w-full overflow-hidden rounded-full bg-transparent', className)} {...props}>
		<Indicator
			className='h-full w-full flex-1 bg-grayscale-300 transition-all duration-1000 ease-linear'
			style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
		/>
	</Root>
));
Progress.displayName = Root.displayName;

export { Progress };
