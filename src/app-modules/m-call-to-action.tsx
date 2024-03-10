import { HTMLAttributes } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/app-components/button';

const ctaHeader = 'Get Started Today';
const ctaDescription =
	"Unlock the hidden stories in your application data. Seamlessly integrate through our straightforward Events API to capture every event with unmatched accuracy. This journey goes beyond mere data collection; it's about unveiling the narratives your data holds.";

interface M_CallToAction_Props extends HTMLAttributes<HTMLDivElement> {}

export const M_CallToAction = ({}: M_CallToAction_Props) => (
	<div className='relative z-20 w-full flex flex-col items-center py-24 bg-gradient-to-b from-indigo to-indigo-dark'>
		<Image src='/graphics/branding/logo_icon.svg' alt='Userloop Logo' width={28} height={28} className='mb-6' />
		<div className='z-40 text-6xl text-grayscale-600 font-semibold tracking-tighter text-center mb-6 px-6'>{ctaHeader}</div>
		<div className='z-40 text-sm text-grayscale-600 font-normal max-w-2xl text-center leading-relaxed mb-6 px-6'>{ctaDescription}</div>
		<div className='z-40 flex flex-row gap-4 mt-4 '>
			<Button variant='indigo' className='text-sm' onClick={() => (window.location.href = process.env.NEXT_PUBLIC_CREATE_ACCOUNT_LINK as string)}>
				Create your account
				<ArrowUpRight className='h-4 w-4' />
			</Button>
		</div>

		<div className='z-30 absolute pointer-events-none inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:50px_50px]'></div>
	</div>
);
