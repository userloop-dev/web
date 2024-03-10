import { Avatar, AvatarFallback } from '@/app-components/avatar';
import { cn } from '@/utils';
import { Heart, Star, ThumbsUp } from 'lucide-react';
import { HTMLAttributes } from 'react';

const testimonialHeader = 'Hear it from our customers';
const testimonialDescription =
	"Dive into the experiences of businesses and innovators who've leveraged Userloop to transform their data analysis, decision-making, and growth strategies. From startups to global enterprises, see how our platform empowers teams to unlock their full potential, scale operations efficiently, and harness the power of data without complexity or prohibitive costs.";

const testimonials: TestimonialCard_Props[] = [
	{
		avatarLetter: 'M',
		testimonial:
			"Since integrating Userloop into our workflow, we've seen a dramatic improvement in our decision-making process. The ability to track events and visualize data in real-time has been a game-changer for our product development team.",
	},
	{
		avatarLetter: 'D',
		testimonial:
			'Userloop has transformed the way we approach data analysis. The flexibility of their pay-per-event model has allowed us to scale our operations without worrying about skyrocketing costs. A must-have tool for any data-driven organization!',
	},
	{
		avatarLetter: 'C',
		testimonial:
			'The collaboration features in Userloop have brought our remote team closer than ever. Being able to create and share dashboards without any additional cost has made our data more accessible and actionable.',
	},
	{
		avatarLetter: 'J',
		testimonial:
			'I was amazed at how easy it was to get started. The user-friendly interface and the robust support from their team helped us leverage the power of our data from day one.',
	},
	{
		avatarLetter: 'E',
		testimonial:
			'We were looking for a solution that could keep up with our rapid growth, and Userloop delivered. Their scalable pricing model and the unlimited free workspaces have made them an integral part of our expansion strategy.',
	},
	{
		avatarLetter: 'A',
		testimonial:
			"The affordability of their event-based pricing has empowered every department in our organization to harness the power of real-time analytics. It's rare to find a tool that so perfectly aligns with our needs and budget.",
	},
];

interface M_Testimonials_Props extends HTMLAttributes<HTMLDivElement> {}

export const M_Testimonials = ({}: M_Testimonials_Props) => (
	<div className='relative bg-grayscale-100 border-y border-grayscale-300 w-full pt-24 pb-12 flex flex-col gap-6 items-center'>
		<div className='flex flex-row gap-8'>
			<Star strokeLinecap='square' className='w-24 h-24 text-grayscale-400 -rotate-6' />
			<Heart strokeLinecap='square' className='w-24 h-24 text-grayscale-500 -translate-y-9' />
			<ThumbsUp strokeLinecap='square' className='w-24 h-24 text-grayscale-400 -translate-y-3 rotate-3' />
		</div>
		<div className='z-30 text-5xl text-grayscale-600 font-semibold tracking-tighter text-center px-6'>{testimonialHeader}</div>
		<div className='z-30 text-sm text-grayscale-500 font-normal max-w-2xl text-center leading-relaxed px-6'>{testimonialDescription}</div>

		<div className='z-30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mt-12 px-3'>
			{testimonials.map((props: TestimonialCard_Props, index: number) => (
				<TestimonialCard key={index} {...props} />
			))}
		</div>
	</div>
);

interface TestimonialCard_Props extends HTMLAttributes<HTMLDivElement> {
	avatarLetter: string;
	testimonial: string;
}

const TestimonialCard = ({ avatarLetter, testimonial, className }: TestimonialCard_Props) => (
	<div className={cn('relative col-span-1 p-4 flex flex-col gap-4 border border-grayscale-300 bg-grayscale-200 rounded', className)}>
		<Avatar>
			<AvatarFallback>{avatarLetter}</AvatarFallback>
		</Avatar>
		<div className='text-sm text-grayscale-500 font-normal leading-relaxed'>{testimonial}</div>
	</div>
);
