import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormReturn, useForm } from 'react-hook-form';
import { HTMLAttributes, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/app-components/button';
import { Input } from '@/app-components/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/app-components/form';

import { handleJoinWaitlist } from '../waitlist-form';

const formSchema = z.object({
	email: z.string(),
});

interface SM_Waitlist_Props extends HTMLAttributes<HTMLDivElement> {}

export const SM_Waitlist = ({}: SM_Waitlist_Props) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [success, setSuccess] = useState<boolean>(false);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setLoading(true);
		const response = await handleJoinWaitlist(values.email);
		if (response.ok) setSuccess(true);
		setLoading(false);
	};

	return (
		<div className='flex flex-row gap-4'>
			{success ? (
				<div className='text-sm text-grayscale-600'>Thanks for joining the waitlist. We'll be in touch shortly.</div>
			) : (
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-row gap-4'>
						<EmailFormField form={form} />
						<Button variant='indigo' className='text-sm'>
							{loading ? <Loader2 className='w-4 h-4 animate-spin' /> : 'Join Waitlist'}
						</Button>
					</form>
				</Form>
			)}
		</div>
	);
};

const EmailFormField = ({ form }: { form: UseFormReturn<z.infer<typeof formSchema>> }) => (
	<FormField
		control={form.control}
		name='email'
		render={({ field }) => (
			<FormItem>
				<FormControl>
					<Input type='email' {...field} placeholder='you@example.com' autoFocus inputClass='text-sm h-[38px]' />
				</FormControl>
				<FormMessage />
			</FormItem>
		)}
	/>
);
