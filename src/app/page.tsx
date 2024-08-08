'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { M_CommonApp } from '@/app-modules/m-common/m-common.app';
import { M_CommonHeader } from '@/app-modules/m-common/m-common.header';
import { M_CommonHeaderApi } from '@/app-modules/m-common/m-common.headerApi';
import { M_CommonHeaderStorage } from '@/app-modules/m-common/m-common.headerStorage';
import { M_CommonHeaderViews } from '@/app-modules/m-common/m-common.headerViews';
import { M_CommonHeaderWorkflows } from '@/app-modules/m-common/m-common.headerWorkflows';
import { M_CommonNavigation } from '@/app-modules/m-common/m-common.navigation';
import { M_CommonSummary } from '@/app-modules/m-common/m-common.summary';
import { M_CommonGrid } from '@/app-modules/m-common/m-common.grid';
import { M_CommonCTA } from '@/app-modules/m-common/m-common.cta';
import { M_CommonPricing } from '@/app-modules/m-common/m-common.pricing';
import { M_CommonWhy } from '@/app-modules/m-common/m-common.why';

export default function Page() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.5 });

	return (
		<div className='min-h-[100vh] bg-gradient-to-b from-surface-light to-background flex flex-col gap-2 items-center p-2'>
			<M_CommonNavigation className='z-50 w-full sticky top-0' />

			<M_CommonHeader />
			<M_CommonWhy />

			{/* <div className='grid grid-cols-2 gap-2'>
				<img src='app-home.png' alt='Userloop Home' className='w-full overflow-clip rounded-lg border border-border' />
				<img src='app-keys.png' alt='Userloop Keys' className='w-full overflow-clip rounded-lg border border-border' />
				<img src='app-events.png' alt='Userloop Events' className='w-full overflow-clip rounded-lg border border-border' />
				<img src='app-views.png' alt='Userloop Views' className='w-full overflow-clip rounded-lg border border-border' />
			</div> */}

			{/* <M_CommonApp /> */}
			{/* <M_CommonGrid /> */}

			{/* <M_CommonPricing /> */}
			{/* <M_CommonCTA /> */}
		</div>
	);
}
