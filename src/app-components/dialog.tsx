import { forwardRef } from 'react';
import { Root, Trigger, Portal, Close, Overlay, Content, Title, Description } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { cn } from '@/utils';

const Dialog = Root;

const DialogTrigger = Trigger;

const DialogPortal = Portal;

const DialogClose = Close;

const DialogOverlay = forwardRef<React.ElementRef<typeof Overlay>, React.ComponentPropsWithoutRef<typeof Overlay>>(({ className, ...props }, ref) => (
	<Overlay
		ref={ref}
		className={cn(
			'fixed inset-0 z-50 bg-black/25 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
			className
		)}
		{...props}
	/>
));
DialogOverlay.displayName = Overlay.displayName;

const DialogContent = forwardRef<React.ElementRef<typeof Content>, React.ComponentPropsWithoutRef<typeof Content>>(({ className, children, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<Content
			ref={ref}
			className={cn(
				'focus-visible:outline-none outline-none rounded fixed bg-surface-light border border-border shadow-xl left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]',
				className
			)}
			{...props}
		>
			{children}
			<Close className='absolute right-3 top-3 p-2 rounded hover:bg-surface-medium transition-all group'>
				<X strokeWidth={1.75} className='w-4 h-4 text-text-light transition-all' />
			</Close>
		</Content>
	</DialogPortal>
));
DialogContent.displayName = Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('flex flex-col gap-2 text-center sm:text-left p-4', className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('w-full flex flex-row justify-end border-t border-border p-4 gap-2', className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = forwardRef<React.ElementRef<typeof Title>, React.ComponentPropsWithoutRef<typeof Title>>(({ className, ...props }, ref) => (
	<Title ref={ref} className={cn('text-lg font-normal text-text-dark leading-relaxed', className)} {...props} />
));
DialogTitle.displayName = Title.displayName;

const DialogDescription = forwardRef<React.ElementRef<typeof Description>, React.ComponentPropsWithoutRef<typeof Description>>(
	({ className, ...props }, ref) => <Description ref={ref} className={cn('text-xs text-text-medium leading-relaxed', className)} {...props} />
);
DialogDescription.displayName = Description.displayName;

export { Dialog, DialogPortal, DialogOverlay, DialogTrigger, DialogClose, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription };
