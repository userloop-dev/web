'use client';

import * as React from 'react';
import { type DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';

import { cn } from '@/utils';
import { Dialog, DialogContent } from '@/app-components/dialog';
import { Search } from 'lucide-react';

const Command = React.forwardRef<React.ElementRef<typeof CommandPrimitive>, React.ComponentPropsWithoutRef<typeof CommandPrimitive>>(
	({ className, ...props }, ref) => (
		<CommandPrimitive
			ref={ref}
			className={cn('flex h-full w-full flex-col overflow-hidden rounded bg-surface-100 text-text-medium', className)}
			{...props}
		/>
	)
);
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
	return (
		<Dialog {...props}>
			<DialogContent className='overflow-hidden p-0'>
				<Command className='[&_[cmdk-group-heading]]:font-normal [&_[cmdk-group-heading]]:text-text-medium [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5'>
					{children}
				</Command>
			</DialogContent>
		</Dialog>
	);
};

const CommandInput = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Input>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>>(
	({ className, ...props }, ref) => (
		<div className='flex items-center border-b border-border px-3 py-1' cmdk-input-wrapper=''>
			<Search className='mr-2 h-4 w-4 shrink-0 text-text-light' />
			<CommandPrimitive.Input
				ref={ref}
				className={cn(
					'flex h-10 w-full rounded bg-surface-light py-3 text-sm text-text-medium outline-none placeholder:text-text-light disabled:cursor-not-allowed disabled:opacity-50',
					className
				)}
				{...props}
			/>
		</div>
	)
);

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<React.ElementRef<typeof CommandPrimitive.List>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>>(
	({ className, ...props }, ref) => (
		<CommandPrimitive.List ref={ref} className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)} {...props} />
	)
);

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Empty>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>>(
	(props, ref) => <CommandPrimitive.Empty ref={ref} className='py-12 text-center text-xs text-text-light' {...props} />
);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Group>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>>(
	({ className, ...props }, ref) => (
		<CommandPrimitive.Group
			ref={ref}
			className={cn(
				'overflow-hidden text-text-medium [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-normal [&_[cmdk-group-heading]]:text-text-medium',
				className
			)}
			{...props}
		/>
	)
);

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
	React.ElementRef<typeof CommandPrimitive.Separator>,
	React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => <CommandPrimitive.Separator ref={ref} className={cn('-mx-1 h-px bg-border', className)} {...props} />);
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Item>, React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>>(
	({ className, ...props }, ref) => (
		<CommandPrimitive.Item
			ref={ref}
			className={cn(
				'relative flex flex-row gap-2 cursor-pointer items-center text-xs outline-none aria-selected:bg-surface-medium aria-selected:text-text-medium data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				className
			)}
			{...props}
		/>
	)
);

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
	return <span className={cn('ml-auto text-xs tracking-widest text-text-medium', className)} {...props} />;
};
CommandShortcut.displayName = 'CommandShortcut';

export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator };