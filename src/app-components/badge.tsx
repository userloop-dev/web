import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const badgeVariants = cva(
	'inline-flex items-center border rounded w-fit text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
	{
		variants: {
			variant: {
				primary: 'bg-grayscale-600 border-grayscale-600 text-grayscale-100 font-normal',
				secondary: 'bg-grayscale-300 border-grayscale-300 text-grayscale-500 font-normal',
				tertiary: 'bg-grayscale-200 border-grayscale-300 text-grayscale-500 font-normal',
				indigo: 'bg-indigo border-indigo text-grayscale-100 font-normal',
			},
			size: {
				regular: 'px-2 py-1',
				small: 'px-1 py-1',
			},
		},
		defaultVariants: {
			variant: 'primary',
			size: 'regular',
		},
	}
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
