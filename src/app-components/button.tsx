import { forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
	'flex flex-row gap-2 items-center justify-center text-xs font-normal transition-all disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none outline-none',
	{
		variants: {
			variant: {
				solid: 'text-surface-light border border-text-dark bg-text-dark hover:border-text-extraDark hover:bg-text-extraDark',
				muted: 'text-text-medium border border-surface-medium bg-surface-medium hover:border-surface-dark hover:bg-surface-dark',
				outline: 'text-text-medium border border-border bg-surface-light hover:border-border hover:bg-surface-medium focus:border-border-focus',
				ghost: 'text-text-medium border border-transparent bg-transparent hover:border-surface-medium hover:bg-surface-medium',

				error: 'text-red-50 border border-red-700 bg-red-700 hover:border-red-800 hover:bg-red-800',
			},
			size: {
				regular: 'py-2 px-3 rounded',
				small: 'p-2 rounded',
				icon: 'p-2 h-[36px] w-[36px] rounded',
				rounded: 'py-2 px-4 rounded-full',
			},
		},
		defaultVariants: {
			variant: 'solid',
			size: 'regular',
		},
	}
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button';
	return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} onMouseDown={(e) => e.preventDefault()} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
