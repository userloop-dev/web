import { HTMLAttributes } from 'react';
import Image from 'next/image';

interface M_Application_Props extends HTMLAttributes<HTMLDivElement> {}

export const M_Application = ({}: M_Application_Props) => (
	<div className='z-30 relative w-full px-3 pb-12 border-b border-grayscale-300 flex flex-col gap-6 items-center overflow-hidden bg-grayscale-100'>
		<div>
			<Image
				src='/graphics/application-screen.png'
				alt='Application Screen'
				width={2000}
				height={2000}
				className='col-span-3 border border-grayscale-400 rounded shadox-2xl'
			/>
		</div>
	</div>
);
