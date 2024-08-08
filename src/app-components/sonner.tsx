'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
	const { theme = 'system' } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps['theme']}
			className='toaster group'
			toastOptions={{
				classNames: {
					toast: 'group toast group-[.toaster]:text-xs group-[.toaster]:font-normal group-[.toaster]:bg-grayscale-100 group-[.toaster]:text-grayscale-400 group-[.toaster]:border-grayscale-250 group-[.toaster]:shadow-lg',
					description: 'group-[.toast]:text-grayscale-300 leading-relaxed mt-1',
				},
			}}
			{...props}
		/>
	);
};

export { Toaster };
