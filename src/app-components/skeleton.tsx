import { cn } from '@/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn('animate-pulse rounded-small bg-surface-dark', className)} {...props} />;
}

export { Skeleton };
