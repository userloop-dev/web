import { HTMLAttributes } from 'react';
import Image from 'next/image';
import { cn } from '@/utils';
import { Database, LucideIcon, PieChart, Search } from 'lucide-react';

const applicationCards: ApplicationCard_Props[] = [
	{
		Icon: Database,
		header: 'The Events API',
		content:
			"Uncover the insights lurking within your application data. Intergrate with a simple Events API to effortlessly capture every event with precision. It's not just about collecting data; it's about discovering the stories they tell.",
	},
	{
		Icon: PieChart,
		header: 'Delightful Dashboards',
		content:
			"Uncover the insights lurking within your application data. Intergrate with a simple Events API to effortlessly capture every event with precision. It's not just about collecting data; it's about discovering the stories they tell.",
	},
	{
		Icon: Search,
		header: 'Intelligent Search',
		content:
			"Uncover the insights lurking within your application data. Intergrate with a simple Events API to effortlessly capture every event with precision. It's not just about collecting data; it's about discovering the stories they tell.",
	},
];

interface M_Application_Props extends HTMLAttributes<HTMLDivElement> {}

export const M_Application = ({}: M_Application_Props) => (
	<div className='z-30 relative w-full px-3 pb-12 border-b border-grayscale-300 flex flex-col gap-6 items-center overflow-hidden bg-grayscale-100'>
		<div>
			<Image
				src='/graphics/application-screen.png'
				alt='Application Screen'
				width={2000}
				height={2000}
				className='col-span-3 border border-grayscale-400 rounded shadox-2xl'
			/>
		</div>

		<div className='flex flex-col md:flex-row gap-6'>
			{applicationCards.map((props: ApplicationCard_Props, index: number) => (
				<ApplicationCard key={index} {...props} />
			))}
		</div>
	</div>
);

interface ApplicationCard_Props extends HTMLAttributes<HTMLDivElement> {
	Icon: LucideIcon;
	header: string;
	content: string;
}

const ApplicationCard = ({ Icon, header, content, className }: ApplicationCard_Props) => (
	<div className={cn('relative col-span-1 p-4 flex flex-col gap-4 border border-grayscale-300 bg-grayscale-200 rounded', className)}>
		<Icon strokeWidth={1.75} className='w-5 h-5 text-indigo mb-4' />
		<div className='text-md text-grayscale-600 font-normal'>{header}</div>
		<div className='text-sm text-grayscale-500 font-normal leading-relaxed'>{content}</div>
	</div>
);
