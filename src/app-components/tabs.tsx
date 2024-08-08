import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import { Root, List, Trigger, Content } from '@radix-ui/react-tabs';
import { cn } from '@/utils';

const Tabs = Root;

const TabsList = forwardRef<ElementRef<typeof List>, ComponentPropsWithoutRef<typeof List>>(({ className, ...props }, ref) => (
	<List ref={ref} className={cn('w-full inline-flex gap-1 items-center justify-center rounded bg-gray-glass-100 text-gray-800 p-1', className)} {...props} />
));
TabsList.displayName = List.displayName;

const TabsTrigger = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(({ className, ...props }, ref) => (
	<Trigger
		ref={ref}
		className={cn(
			'w-full inline-flex items-center justify-center whitespace-nowrap rounded-small p-2 text-xs font-normal transition-all border border-transparent disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-gray-200 data-[state=active]:border-gray-200 data-[state=active]:text-gray-800 hover:bg-gray-100 hover:border-gray-100',
			className
		)}
		{...props}
	/>
));
TabsTrigger.displayName = Trigger.displayName;

const TabsContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(({ className, ...props }, ref) => (
	<Content ref={ref} className={cn('w-full', className)} {...props} />
));
TabsContent.displayName = Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
