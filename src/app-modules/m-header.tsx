import { HTMLAttributes } from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { Button } from '@/app-components/button';
import { SM_Waitlist } from './sm-waitlist';

const headerDim = 'Your Data';
const headerLit = 'in Focus';
const headerDescription =
	"Uncover the insights lurking within your application data. Intergrate with a simple Events API to effortlessly capture every event with precision. It's not just about collecting data; it's about discovering the stories they tell.";

interface M_Header_Props extends HTMLAttributes<HTMLDivElement> {}

export const M_Header = ({}: M_Header_Props) => (
	<div className='relative w-full flex flex-col items-center py-24 pt-16'>
		<div className='z-30 text-7xl md:text-9xl text-grayscale-500 font-semibold tracking-tighter max-w-xl text-center'>{headerDim}</div>
		<div className='z-30 text-7xl md:text-9xl text-grayscale-600 font-semibold tracking-tighter max-w-xl text-center mb-6'>{headerLit}</div>
		<div className='z-30 text-sm text-grayscale-500 font-normal max-w-xl text-center leading-relaxed mb-6 px-6'>{headerDescription}</div>

		<div className='z-30 flex flex-col md:flex-row gap-4 mt-4 '>
			{/* <Button variant='indigo' className='text-sm' onClick={() => (window.location.href = process.env.NEXT_PUBLIC_CREATE_ACCOUNT_LINK as string)}>
				Create an account
				<ArrowUpRight className='h-4 w-4' />
			</Button> */}

			{/* <Button variant='secondary' className='text-sm'>
				Watch a product demo
				<Play className='h-4 w-4' />
			</Button> */}

			<SM_Waitlist />
		</div>

		<div className='z-10 absolute pointer-events-none inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:50px_50px]'></div>
		<div className='z-20 absolute w-full h-full bg-gradient-to-b from-transparent to-grayscale-100' />
	</div>
);
