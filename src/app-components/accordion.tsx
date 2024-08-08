import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import { Root, Header, Trigger, Item, Content } from '@radix-ui/react-accordion';
import { cn } from '@/utils';
import { ChevronDown } from 'lucide-react';

const Accordion = Root;

const AccordionItem = forwardRef<ElementRef<typeof Item>, ComponentPropsWithoutRef<typeof Item>>(({ className, ...props }, ref) => (
	<Item ref={ref} className={cn('border-b border-grayscale-200', className)} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = forwardRef<ElementRef<typeof Trigger>, ComponentPropsWithoutRef<typeof Trigger>>(({ className, children, ...props }, ref) => (
	<Header className='flex'>
		<Trigger
			ref={ref}
			className={cn(
				'flex flex-1 items-center p-4 font-normal transition-all hover:bg-grayscale-150 [&[data-state=open]>svg]:rotate-180 [data-state=open]:border-grayscale-200',
				className
			)}
			{...props}
		>
			{children}
			{/* <ChevronDown strokeWidth={1.75} className='h-4 w-4 ml-auto shrink-0 text-grayscale-300 transition-transform duration-200' /> */}
		</Trigger>
	</Header>
));
AccordionTrigger.displayName = Trigger.displayName;

const AccordionContent = forwardRef<ElementRef<typeof Content>, ComponentPropsWithoutRef<typeof Content>>(({ className, children, ...props }, ref) => (
	<Content ref={ref} className='overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down' {...props}>
		<div className={cn('pb-4 pt-0', className)}>{children}</div>
	</Content>
));
AccordionContent.displayName = Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
