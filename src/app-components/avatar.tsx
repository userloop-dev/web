import * as React from 'react';
import { Root, Image, Fallback } from '@radix-ui/react-avatar';
import { cn } from '@/utils';

const Avatar = React.forwardRef<React.ElementRef<typeof Root>, React.ComponentPropsWithoutRef<typeof Root>>(({ className, ...props }, ref) => (
	<Root ref={ref} className={cn('relative flex h-7 w-7 shrink-0 overflow-hidden rounded', className)} {...props} />
));
Avatar.displayName = Root.displayName;

const AvatarImage = React.forwardRef<React.ElementRef<typeof Image>, React.ComponentPropsWithoutRef<typeof Image>>(({ className, ...props }, ref) => (
	<Image ref={ref} className={cn('aspect-square h-full w-full', className)} {...props} />
));
AvatarImage.displayName = Image.displayName;

const AvatarFallback = React.forwardRef<React.ElementRef<typeof Fallback>, React.ComponentPropsWithoutRef<typeof Fallback>>(({ className, ...props }, ref) => (
	<Fallback ref={ref} className={cn('flex h-full w-full items-center justify-center bg-grayscale-300 text-xs text-grayscale-500', className)} {...props} />
));
AvatarFallback.displayName = Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
