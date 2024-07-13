'use client';

import Image from 'next/image';
import { AlarmClock, Database, Play, Tv2, Waypoints } from 'lucide-react';
import { Button } from '@/app-components/button';

export default function Page() {
	return (
		<div className='bg-surface-200 relative flex flex-col lg:flex-row gap-2 p-2 w-[100vw] h-[100vh]'>
			<div className='z-50 absolute top-0 left-0 h-full ml-2 border-dashed border-l border-gray-300' />
			<div className='z-50 absolute top-0 right-0 h-full mr-2 border-dashed border-l border-gray-300' />
			<div className='z-50 absolute top-0 left-0 w-full mt-2 border-dashed border-t border-gray-300' />
			<div className='z-50 absolute bottom-0 left-0 w-full mb-2 border-dashed border-b border-gray-300' />

			<div className='flex flex-row gap-2 w-full h-full'>
				<div className='w-md max-w-md flex flex-col gap-2 overflow-y-scroll no-scrollbar'>
					<div className='flex-1 flex flex-col gap-2 p-4 bg-gray-100 rounded'>
						<Image src='/logo_mark.svg' alt='Userloop Logo' width={30} height={30} className='mb-4' />
						<div className='text-2xl text-gray-1000 font-normal'>Userloop</div>
						<div className='text-xs text-gray-800 font-normal leading-relaxed'>
							Userloop is an events system. Easily ingest events via the Events API to power visualizations, alarms, workflows, and more. Its time
							to centralize your teams intelligence.
						</div>
					</div>

					<div className='flex flex-col gap-2 p-4 bg-surface-100 rounded'>
						<Database strokeWidth={1.75} className='h-4 w-4 text-gray-600 mb-1' />
						<div className='text-sm text-gray-900 font-normal'>Events Ingestion</div>
						<div className='text-xs text-gray-800 font-normal leading-relaxed'>
							Stream your events to Userloop via the Events API. Userloop provides a general structure for an event, but the data you emit is up
							to you. Userloop is designed to be flexible and work with any event structure.
						</div>
					</div>

					<div className='flex flex-col gap-2 p-4 bg-surface-100 rounded'>
						<Tv2 strokeWidth={1.75} className='h-4 w-4 text-gray-600 mb-1' />
						<div className='text-sm text-gray-900 font-normal'>Views</div>
						<div className='text-xs text-gray-800 font-normal leading-relaxed'>
							Have some events in Userloop? Create dashboards to visualize your data. Userloop provides preset UI components to help you visually
							construct dashboards. We are always expanding the capabilities of our dashboards.
						</div>
					</div>

					<div className='flex flex-col gap-2 p-4 bg-surface-100 rounded'>
						<Waypoints strokeWidth={1.75} className='h-4 w-4 text-gray-600 mb-1' />
						<div className='text-sm text-gray-900 font-normal'>Workflows</div>
						<div className='text-xs text-gray-800 font-normal leading-relaxed'>
							Looking to trigger workflows? Userloop can help. Workflows are a series of actions that are triggered by events. Workflows can be
							used to automate tasks, send notifications, or trigger logic specific to your application.
						</div>
					</div>

					<div className='flex flex-col gap-2 p-4 bg-surface-100 rounded'>
						<AlarmClock strokeWidth={1.75} className='h-4 w-4 text-gray-600 mb-1' />
						<div className='text-sm text-gray-900 font-normal'>Alarms</div>
						<div className='text-xs text-gray-800 font-normal leading-relaxed'>
							Emitting some mission critical data? Set up alarms to alert you when certain conditions are met. When combined with dashboards,
							Userloop is a powerful tool for your oncall engineers.
						</div>
					</div>
				</div>

				<div className='relative w-full flex flex-col gap-2 p-4 bg-gradient-to-t from-surface-200 to-surface-100 rounded group cursor-pointer overflow-clip'>
					<div className='flex flex-row gap-4 ml-auto z-50'>
						<Button variant='secondary' onClick={() => window.open(process.env.NEXT_PUBLIC_SIGN_IN_LINK)}>
							Sign In
						</Button>
						<Button variant='primary' onClick={() => window.open(process.env.NEXT_PUBLIC_CREATE_ACCOUNT_LINK)}>
							Try for Free
						</Button>
					</div>

					<Image
						src='/screenshot.png'
						alt='Screenshot'
						width={1000}
						height={1000}
						className='w-full absolute -bottom-10 -right-40 z-40 transition-all border border-gray-300 rounded'
					/>
				</div>
			</div>
		</div>
	);
}
