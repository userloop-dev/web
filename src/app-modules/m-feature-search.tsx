import { HTMLAttributes } from 'react';

const apiHeader = 'Intelligent Search';
const apiDescription =
	"Intelligent search within Userloop redefines the way you interact with your data, offering a powerful, yet intuitive search functionality that allows you to navigate through your vast data landscape with ease. Benefit from instant access to the precise data points you're seeking, whether you're looking for specific user interactions, event trends, or anomalies.";

interface M_FeatureSearch_Props extends HTMLAttributes<HTMLDivElement> {}

export const M_FeatureSearch = ({}: M_FeatureSearch_Props) => (
	<div className='relative bg-grayscale-100 border-y border-grayscale-300 w-full py-12 flex flex-col gap-6 items-center overflow-hidden'>
		<div className='h-8 w-8 flex items-center justify-center rounded-full bg-indigo-500 text-grayscale-600 font-medium text-sm mb-3'>3</div>
		<div className='z-30 text-5xl text-grayscale-600 font-semibold tracking-tighter text-center px-6'>{apiHeader}</div>
		<div className='z-30 text-sm text-grayscale-500 font-normal max-w-2xl text-center leading-relaxed px-6'>{apiDescription}</div>
	</div>
);
