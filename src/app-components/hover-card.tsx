import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import { Root, Trigger, Content } from '@radix-ui/react-hover-card';
import { cn } from '@/utils';

const HoverCard = Root;

const HoverCardTrigger = Trigger;

const HoverCardContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(
	({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
		<Content
			ref={ref}
			align={align}
			sideOffset={sideOffset}
			className={cn(
				'shadow-lg max-w-md w-md z-50 rounded border border-border bg-surface-light text-text-medium outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
				className
			)}
			{...props}
		/>
	)
);
HoverCardContent.displayName = Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
