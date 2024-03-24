import { HTMLAttributes } from 'react';

const apiHeader = 'Delightful Dashboards';
const apiDescription =
	"Transform your complex data into visual stories, making it easier than ever to understand the narratives hidden within your application's data. From real-time metrics to historical trends, every piece of data is presented with precision and elegance, allowing for quick decision-making and strategic planning.";

interface M_FeatureDashboard_Props extends HTMLAttributes<HTMLDivElement> {}

export const M_FeatureDashboard = ({}: M_FeatureDashboard_Props) => (
	<div className='relative bg-grayscale-100 border-y border-grayscale-300 w-full py-12 flex flex-col gap-6 items-center overflow-hidden'>
		<div className='h-8 w-8 flex items-center justify-center rounded-full bg-indigo-500 text-grayscale-600 font-medium text-sm mb-3'>2</div>
		<div className='z-30 text-5xl text-grayscale-600 font-semibold tracking-tighter text-center px-6'>{apiHeader}</div>
		<div className='z-30 text-sm text-grayscale-500 font-normal max-w-2xl text-center leading-relaxed px-6'>{apiDescription}</div>
	</div>
);
