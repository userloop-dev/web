import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const badgeVariants = cva('inline-flex items-center border rounded text-xs font-normal transition-colors', {
	variants: {
		variant: {
			solid: 'text-text-medium border border-border bg-surface-dark hover:border-border hover:bg-border',
			muted: 'text-text-medium border border-surface-medium bg-surface-medium hover:border-surface-dark hover:bg-surface-dark',
			outline: 'text-text-light border border-border bg-transparent hover:border-border hover:bg-surface-dark',
			ghost: 'text-text-light border border-transparent bg-transparent hover:border-surface-dark hover:bg-surface-dark',
		},
		size: {
			regular: 'px-2 py-1',
			small: 'px-1 py-1',
		},
	},
	defaultVariants: {
		variant: 'solid',
		size: 'regular',
	},
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
