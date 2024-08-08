import { forwardRef } from 'react';
import { Root } from '@radix-ui/react-label';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/utils';

const labelVariants = cva('text-xs font-normal text-text-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70');

const Label = forwardRef<React.ElementRef<typeof Root>, React.ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof labelVariants>>(
	({ className, ...props }, ref) => <Root ref={ref} className={cn(labelVariants(), className)} {...props} />
);
Label.displayName = Root.displayName;

export { Label };
