import { HTMLAttributes } from 'react';

const apiHeader = 'The Events API';
const apiDescription =
	'Our Events API is the cornerstone of Userloop, offering a seamless integration that allows you to effortlessly capture every action within your application in real-time. Designed for simplicity yet capable of handling the complexities of vast data volumes securely, it empowers you to track custom events tailored to your specific needs.';

interface M_FeatureAPI_Props extends HTMLAttributes<HTMLDivElement> {}

export const M_FeatureAPI = ({}: M_FeatureAPI_Props) => (
	<div className='relative bg-grayscale-100 border-y border-grayscale-300 w-full py-12 flex flex-col gap-6 items-center overflow-hidden'>
		<div className='h-8 w-8 flex items-center justify-center rounded-full bg-indigo text-grayscale-600 font-medium text-sm mb-3'>1</div>
		<div className='z-30 text-5xl text-grayscale-600 font-semibold tracking-tighter text-center px-6'>{apiHeader}</div>
		<div className='z-30 text-sm text-grayscale-500 font-normal max-w-2xl text-center leading-relaxed px-6'>{apiDescription}</div>
	</div>
);
