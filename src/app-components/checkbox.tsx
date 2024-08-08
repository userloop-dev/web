import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import { Root, Indicator } from '@radix-ui/react-checkbox';
import { cn } from '@/utils';
import { Check, Slash } from 'lucide-react';

const Checkbox = forwardRef<ElementRef<typeof Root>, ComponentPropsWithoutRef<typeof Root>>(({ className, ...props }, ref) => (
	<Root
		ref={ref}
		className={cn(
			'transition-all peer h-5 w-5 shrink-0 rounded border border-border-focus disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-sky-700 data-[state=checked]:border-sky-700 data-[state=checked]:text-sky-50',
			className
		)}
		{...props}
	>
		<Indicator className={cn('flex items-center justify-center text-sky-50 data-[state=checked]:text-sky-50')}>
			<Check strokeWidth={2.5} strokeLinecap='butt' className='h-3 w-3' />
		</Indicator>
	</Root>
));
Checkbox.displayName = Root.displayName;

export { Checkbox };
