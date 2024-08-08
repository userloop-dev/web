import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import { Root, Provider, Trigger, Content } from '@radix-ui/react-tooltip';
import { cn } from '@/utils';

const TooltipProvider = Provider;

const Tooltip = Root;

const TooltipTrigger = Trigger;

const TooltipContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(({ className, sideOffset = 4, ...props }, ref) => (
	<Content
		ref={ref}
		sideOffset={sideOffset}
		className={cn(
			'shadow-sm z-50 max-w-[300px] leading-loose rounded border border-text-dark bg-text-dark px-1.5 py-0.5 m-1 text-xs text-surface-light animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
			className
		)}
		{...props}
	/>
));
TooltipContent.displayName = Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
