import { forwardRef } from 'react';
import { cn } from '@/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	prefix?: string;
	suffix?: string;

	inputClass?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, inputClass, type, prefix, suffix, ...props }, ref) => {
	return (
		<div className={cn('flex flex-row', className)}>
			{prefix && (
				<div className='min-w-[100px] rounded-l-lg flex items-center text-xs text-grayscale-500 bg-grayscale-300 border-l border-t border-b border-grayscale-300 px-3 py-2'>
					{prefix}
				</div>
			)}
			<input
				tabIndex={1}
				type={type}
				className={cn(
					'flex h-[34px] w-full rounded-lg border border-grayscale-300 bg-transparent text-grayscale-600 px-3 py-2 text-xs outline-none placeholder:text-grayscale-400 focus:border-grayscale-400',
					prefix && 'rounded-l-none',
					suffix && 'rounded-r-none',
					inputClass
				)}
				ref={ref}
				{...props}
			/>
			{suffix && (
				<div className='min-w-[100px] rounded-r-lg flex items-center text-xs text-grayscale-500 bg-grayscale-300 border-r border-t border-b border-grayscale-300 px-3 py-2'>
					{suffix}
				</div>
			)}
		</div>
	);
});
Input.displayName = 'Input';

export { Input };
