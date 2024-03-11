'use client';

import Image from 'next/image';

import { M_Testimonials } from '@/app-modules/m-testimonials';
import { M_Pricing } from '@/app-modules/m-pricing';
import { M_FeatureAPI } from '@/app-modules/m-feature-api';
import { M_Application } from '@/app-modules/m-application';
import { M_CallToAction } from '@/app-modules/m-call-to-action';
import { M_Header } from '@/app-modules/m-header';
import { M_FeatureDashboard } from '@/app-modules/m-feature-dashboard';
import { M_FeatureSearch } from '@/app-modules/m-feature-search';

export default function Page() {
	return (
		<div className='flex flex-col items-center bg-grayscale-200 min-h-[100vh]'>
			<div className='z-50 flex flex-row gap-4 p-4 bg-[#20212E]/25 backdrop-blur-sm border-b border-grayscale-300 w-full sticky top-0'>
				<Image src='/graphics/branding/logo.svg' alt='Userloop Logo' width={28} height={28} className='mr-auto' />
				{/* <Button variant='secondary' onClick={() => (window.location.href = process.env.NEXT_PUBLIC_SIGN_IN_LINK as string)}>
					Sign in
				</Button> */}
			</div>

			<M_Header />

			<div className='flex flex-col gap-6'>
				<M_Application />
				<M_FeatureAPI />
				<M_FeatureDashboard />
				<M_FeatureSearch />
				<M_Pricing />
				<M_Testimonials />
				<M_CallToAction />
			</div>

			<div className='z-50 w-full flex flex-col md:flex-row md:items-center gap-4 p-4 bg-grayscale-100 border-t border-grayscale-300'>
				<Image src='/graphics/branding/logo_muted.svg' alt='Userloop Logo' width={28} height={28} />
				<div className='text-xs text-grayscale-500 mr-auto leading-relaxed'>
					We're always available to chat. Reach out at matt@userloop.dev with any questions or requests.
				</div>

				<div className='text-xs text-grayscale-500'>© Userloop, Inc. {new Date().getFullYear()}</div>
			</div>
		</div>
	);
}
