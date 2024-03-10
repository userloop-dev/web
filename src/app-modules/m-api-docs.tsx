import { HTMLAttributes } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/app-components/button';

const apiHeader = 'The Events API';
const apiDescription =
	"At Userloop, we understand that your needs evolve as your business grows. That's why we've designed a flexible pricing model. Whether you're a startup getting off the ground or a well-established enterprise looking to dive deeper into your data, our pay-per-event pricing is tailored to fit your scale.";

interface M_ApiDocs_Props extends HTMLAttributes<HTMLDivElement> {}

export const M_ApiDocs = ({}: M_ApiDocs_Props) => (
	<div className='relative bg-grayscale-100 border-y border-grayscale-300 w-full py-12 flex flex-col gap-6 items-center overflow-hidden'>
		<div className='z-30 text-5xl text-grayscale-600 font-semibold tracking-tighter text-center px-6'>{apiHeader}</div>
		<div className='z-30 text-sm text-grayscale-500 font-normal max-w-xl text-center leading-relaxed mb-6 px-6'>{apiDescription}</div>
		<Button variant='secondary' className='z-30'>
			Read the docs
			<ArrowRight className='h-4 w-4' />
		</Button>
	</div>
);
