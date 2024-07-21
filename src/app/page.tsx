'use client';

import Image from 'next/image';
import { AlarmClock, Database, Tv2, Workflow } from 'lucide-react';
import { Button } from '@/app-components/button';

export default function Page() {
	return (
		<div className='bg-gradient-to-b from-surface-100 to-surface-200 relative flex flex-col justify-center items-center lg:flex-row gap-2 p-2 w-full h-full min-h-[100vh]'>
			<div className='z-50 absolute top-0 left-0 h-full ml-2 border-dashed border-l border-gray-300' />
			<div className='z-50 absolute top-0 right-0 h-full mr-2 border-dashed border-l border-gray-300' />
			<div className='z-50 absolute top-0 left-0 w-full mt-2 border-dashed border-t border-gray-300' />
			<div className='z-50 absolute bottom-0 left-0 w-full mb-2 border-dashed border-b border-gray-300' />

			<div className='absolute top-0 left-0 w-full h-full min-h-[100vh] z-40 bg-gradient-to-br from-gray-100 to-transparent opacity-50' />

			<div className='z-50 w-lg max-w-lg flex flex-col gap-2 p-4'>
				<div className='flex-1 flex flex-col gap-2 p-4 bg-gray-100 rounded'>
					<Image src='/logo_mark.svg' alt='Userloop Logo' width={30} height={30} className='mb-4' />
					<div className='text-2xl text-gray-1000 font-normal'>Userloop</div>
					<div className='text-xs text-gray-800 font-normal leading-relaxed'>
						Its time to centralize your teams intelligence. Userloop is an events system that empowers you to create powerful visualizations,
						alarms, workflows, and more. Your first 100 events per month are free so get started today.
					</div>
					<div className='flex-1 w-fit mt-2 flex flex-row gap-2'>
						<Button variant='tertiary' className='flex-1' onClick={() => window.open(process.env.NEXT_PUBLIC_CREATE_ACCOUNT_LINK)}>
							Get Started for Free
						</Button>
						<Button variant='secondary' onClick={() => window.open(process.env.NEXT_PUBLIC_SIGN_IN_LINK)}>
							Watch a Demo
						</Button>
					</div>
				</div>

				<div className='flex flex-col gap-2 p-4 bg-gray-100 bg-opacity-50 rounded'>
					<Database strokeWidth={1.75} className='h-4 w-4 text-gray-600 mb-1' />
					<div className='text-sm text-gray-900 font-normal'>Events Ingestion</div>
					<div className='text-xs text-gray-800 font-normal leading-relaxed'>
						Ingesting events in Userloop is as simple as creating an API key and sending a POST request. Userloop provides a general structure for
						an event, but the data you emit is up to you.
					</div>
				</div>

				<div className='flex flex-col gap-2 p-4 bg-gray-100 rounded'>
					<Tv2 strokeWidth={1.75} className='h-4 w-4 text-gray-600 mb-1' />
					<div className='text-sm text-gray-900 font-normal'>Views</div>
					<div className='text-xs text-gray-800 font-normal leading-relaxed'>
						Have some events in Userloop? Userloop provides drag-and-drop components to help you quickly and easily construct beautiful dashboards.
						Creating dashboards is simple and accessible to your entire team.
					</div>
				</div>

				<div className='flex flex-col gap-2 p-4 bg-gray-100 rounded'>
					<Workflow strokeWidth={1.75} className='h-4 w-4 text-gray-600 mb-1' />
					<div className='text-sm text-gray-900 font-normal'>Workflows</div>
					<div className='text-xs text-gray-800 font-normal leading-relaxed'>
						Looking to trigger workflows? Userloop can help. Workflows are a series of actions that are triggered by events. Workflows can be used
						to automate tasks, send notifications, or trigger logic specific to your application.
					</div>
				</div>

				{/* <div className='flex flex-col gap-2 p-4 bg-gray-100 rounded'>
					<AlarmClock strokeWidth={1.75} className='h-4 w-4 text-gray-600 mb-1' />
					<div className='text-sm text-gray-900 font-normal'>Alarms</div>
					<div className='text-xs text-gray-800 font-normal leading-relaxed'>
						Emitting some mission critical data? Set up alarms to alert when certain conditions are met. When combined with dashboards, Userloop is
						a powerful tool for your oncall team.
					</div>
				</div> */}

				<Button variant='secondary' onClick={() => window.open(process.env.NEXT_PUBLIC_SIGN_IN_LINK)}>
					Sign In
				</Button>

				<div className='mt-8 flex items-center justify-center text-center'>
					<div className='text-xs text-gray-800 font-normal opacity-50 hover:opacity-100 transition-all w-fit'>Made with 🩵 in Vancouver</div>
				</div>
			</div>
		</div>
	);
}
