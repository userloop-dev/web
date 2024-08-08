import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import { cn } from '@/utils';
import { Regex } from 'lucide-react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	prefix?: string;
	suffix?: string;

	jsxPrefix?: JSX.Element;
	jsxSuffix?: JSX.Element;

	inputClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, inputClassName, type, prefix, suffix, jsxPrefix, jsxSuffix, ...props }, ref) => {
	return (
		<div className={cn('flex flex-row', className)}>
			{(prefix || jsxPrefix) && (
				<div
					className={cn(
						'min-w-[100px] whitespace-nowrap rounded-l flex items-center text-xs text-text-light bg-surface-medium border-l border-t border-b border-border px-3 py-2'
					)}
				>
					{prefix} {jsxPrefix}
				</div>
			)}
			<input
				tabIndex={1}
				type={type}
				className={cn(
					'transition-all flex w-full rounded border border-border bg-surface-light text-text-medium px-3 py-2 text-xs outline-none placeholder:text-text-light focus:border-border-focus',
					(prefix || jsxPrefix) && 'rounded-l-none',
					(suffix || jsxSuffix) && 'rounded-r-none',
					inputClassName
				)}
				ref={ref}
				{...props}
			/>
			{(suffix || jsxSuffix) && (
				<div
					className={cn(
						'min-w-fit whitespace-nowrap rounded-r flex items-center text-xs text-text-light bg-surface-medium border-r border-t border-b border-border px-3 py-2'
					)}
				>
					{suffix} {jsxSuffix}
				</div>
			)}
		</div>
	);
});
Input.displayName = 'Input';
