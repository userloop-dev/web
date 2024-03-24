import { forwardRef } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils';

const buttonVariants = cva(
	'flex flex-row gap-2 items-center justify-center rounded text-xs font-normal transition-all disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none outline-none',
	{
		variants: {
			variant: {
				primary: 'text-grayscale-100 bg-grayscale-600 border border-transparent hover:bg-grayscale-500',
				secondary: 'text-grayscale-500 border border-grayscale-300 bg-grayscale-200 hover:bg-grayscale-300',
				tertiary: 'text-grayscale-500 border border-transparent bg-transparent hover:bg-grayscale-300',
				indigo: 'text-grayscale-600 bg-indigo-500 border border-transparent hover:bg-indigo-600',
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

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
	return <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} onMouseDown={(e) => e.preventDefault()} />;
});
Button.displayName = 'Button';

export { Button, buttonVariants };
