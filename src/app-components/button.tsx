import { forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils';
import { Slot } from '@radix-ui/react-slot';

const buttonVariants = cva(
	'flex flex-row gap-2 items-center justify-center rounded-small text-xs font-normal transition-all disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none outline-none',
	{
		variants: {
			variant: {
				primary: 'text-gray-100 bg-gray-900 border border-transparent hover:bg-gray-1000',
				secondary: 'text-gray-800 border border-gray-300 bg-surface-200 hover:bg-gray-100',
				tertiary: 'text-gray-800 border border-transparent bg-transparent hover:bg-gray-100',

				blue: 'text-blue-100 border border-transparent bg-blue-800 hover:bg-blue-900',
				red: 'text-red-100 border border-transparent bg-red-800 hover:bg-red-900',
			},
			size: {
				regular: 'py-2 px-3',
				small: 'p-2',
			},
		},
		defaultVariants: {
			variant: 'primary',
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
