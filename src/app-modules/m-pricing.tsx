import { HTMLAttributes } from 'react';
import { cn } from '@/utils';
import { LucideIcon, JapaneseYen, DollarSign, Euro, CreditCard, Layout } from 'lucide-react';

const pricingHeader = 'Pricing that scales with you';
const pricingDescription =
	"At Userloop, we understand that your needs evolve as your business grows. That's why we've designed a flexible pricing model. Whether you're a startup getting off the ground or a well-established enterprise looking to dive deeper into your data, our pay-per-event pricing is tailored to fit your scale.";

const prices: PricingCard_Props[] = [
	{
		Icon: CreditCard,
		tag: '$2 USD / Month + $0.0001 USD / Event',
		header: 'Event-Based Pricing',
		content:
			'With Userloop, enjoy the simplicity of our pay-per-event pricing. Start with a fixed monthly fee of just $2 USD, and for each event pay only $0.0001 USD. This model ensures you only pay for the value you extract, making it perfect for businesses of all sizes looking to scale efficiently without unnecessary costs. Dive into data-driven decision-making, knowing your investment grows directly with your success.',
	},
	{
		Icon: Layout,
		tag: '',
		header: 'Unlimited Members, Views, API Keys, Workspaces, and More',
		content:
			"We believe in empowering your team to achieve its full potential without worrying about escalating costs. That's why our unique approach ensures you're never charged for expanding your team, creating custom views, or accessing more workspaces. We're committed to fostering collaboration, innovation, and scalability by making these essential features completely free.",
	},
];

interface M_Pricing_Props extends HTMLAttributes<HTMLDivElement> {}

export const M_Pricing = ({}: M_Pricing_Props) => (
	<div className='relative bg-grayscale-100 border-y border-grayscale-300 w-full pt-24 pb-12 flex flex-col gap-6 items-center'>
		<div className='flex flex-row gap-8'>
			<JapaneseYen strokeLinecap='square' className='w-24 h-24 text-grayscale-400 -rotate-6 -translate-y-3' />
			<DollarSign strokeLinecap='square' className='w-24 h-24 text-grayscale-500 -translate-y-9' />
			<Euro strokeLinecap='square' className='w-24 h-24 text-grayscale-400 rotate-6' />
		</div>
		<div className='z-30 text-5xl text-grayscale-600 font-semibold tracking-tighter text-center px-6'>{pricingHeader}</div>
		<div className='z-30 text-sm text-grayscale-500 font-normal max-w-2xl text-center leading-relaxed px-6'>{pricingDescription}</div>

		<div className='z-30 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mt-12 px-3'>
			{prices.map((props: PricingCard_Props, index: number) => (
				<PricingCard key={index} {...props} />
			))}
		</div>
	</div>
);

interface PricingCard_Props extends HTMLAttributes<HTMLDivElement> {
	Icon: LucideIcon;
	tag: string;
	header: string;
	content: string;
}

const PricingCard = ({ Icon, tag, header, content, className }: PricingCard_Props) => (
	<div className={cn('relative col-span-1 p-4 flex flex-col gap-4 border border-grayscale-300 bg-grayscale-200 rounded', className)}>
		<div className='flex flex-row gap-4'>
			<Icon strokeWidth={1.75} className='w-5 h-5 text-indigo mb-4' />
			{tag && <div className='text-xs text-indigo-light font-normal mt-[3px]'>{tag}</div>}
		</div>
		<div className='text-md text-grayscale-600 font-normal'>{header}</div>
		<div className='text-sm text-grayscale-500 font-normal leading-relaxed'>{content}</div>
	</div>
);
