'use client';

import { cn } from '@/utils';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/app-components/navigation-menu';
import { forwardRef } from 'react';
import Link from 'next/link';
import { Button } from '@/app-components/button';

const platform: { title: string; href: string; description: string }[] = [
	{
		title: 'Event Storage and Search',
		href: '/docs/primitives/alert-dialog',
		description: 'Userloop offers robust data management and retrieval, securely storing any data in a scalable cluster.',
	},
	{
		title: 'Events API',
		href: '/docs/primitives/hover-card',
		description: 'Userloop offers robust data management and retrieval, securely storing any data in a scalable cluster.',
	},
	{
		title: 'Views',
		href: '/docs/primitives/progress',
		description: 'Userloop offers robust data management and retrieval, securely storing any data in a scalable cluster.',
	},
	{
		title: 'Workflows',
		href: '/docs/primitives/scroll-area',
		description: 'Userloop offers robust data management and retrieval, securely storing any data in a scalable cluster.',
	},
];

const solutions: { title: string; href: string; description: string }[] = [
	{
		title: 'Feedback Collection',
		href: '/docs/primitives/alert-dialog',
		description: 'Userloop offers robust data management and retrieval, securely storing any data in a scalable cluster.',
	},
	{
		title: 'API Monitoring',
		href: '/docs/primitives/hover-card',
		description: 'Userloop offers robust data management and retrieval, securely storing any data in a scalable cluster.',
	},
	{
		title: 'Revenue Tracking',
		href: '/docs/primitives/progress',
		description: 'Userloop offers robust data management and retrieval, securely storing any data in a scalable cluster.',
	},
	{
		title: 'Spend Management',
		href: '/docs/primitives/scroll-area',
		description: 'Userloop offers robust data management and retrieval, securely storing any data in a scalable cluster.',
	},
];

interface M_CommonNavigation_Props extends React.HTMLAttributes<HTMLDivElement> {}

export const M_CommonNavigation = ({ className }: M_CommonNavigation_Props) => {
	return (
		<div className={cn('z-50 flex flex-row items-center gap-2 p-2 bg-surface-light', className)}>
			<div className='flex-1 flex flex-row items-center'>
				<img src='logo.svg' alt='Userloop Logo' className='h-8' />
			</div>

			{/* <div className='flex-1 flex-row items-center justify-center hidden lg:flex'>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Platform</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className='grid w-[400px] gap-1 p-1 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
									{platform.map((p: any) => (
										<M_CommonNavigationListItem key={p.title} title={p.title} href={p.href}>
											{p.description}
										</M_CommonNavigationListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className='grid w-[400px] gap-1 p-1 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
									{solutions.map((solution: any) => (
										<M_CommonNavigationListItem key={solution.title} title={solution.title} href={solution.href}>
											{solution.description}
										</M_CommonNavigationListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href='/pricing' legacyBehavior passHref>
								<NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger>Company</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className='grid w-[400px] gap-1 p-1 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
									{solutions.map((solution: any) => (
										<M_CommonNavigationListItem key={solution.title} title={solution.title} href={solution.href}>
											{solution.description}
										</M_CommonNavigationListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div> */}

			<div className='flex-1 flex flex-row items-center justify-end gap-2'>
				<Button variant='muted' size='regular' className='whitespace-nowrap' onClick={() => window.open('https://app.userloop.dev/auth/sign-in')}>
					Sign in
				</Button>
				<Button variant='solid' size='regular' className='whitespace-nowrap' onClick={() => window.open('https://app.userloop.dev/auth/sign-up')}>
					Get Started for Free
				</Button>
			</div>
		</div>
	);
};

interface M_CommonNavigationListItem_Props extends React.HTMLAttributes<HTMLDivElement> {
	href: string;
}

const M_CommonNavigationListItem = ({ title, children, href }: M_CommonNavigationListItem_Props) => {
	return (
		<NavigationMenuLink asChild className='hover:bg-surface-medium rounded p-3 transition-all'>
			<Link href={href}>
				<div className='text-xs text-text-dark font-normal'>{title}</div>
				<div className='text-xs text-text-medium font-normal line-clamp-2 leading-relaxed'>{children}</div>
			</Link>
		</NavigationMenuLink>
	);
};
