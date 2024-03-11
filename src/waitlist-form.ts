export const handleJoinWaitlist = async (email: string) => {
	const formBody = `email=${encodeURIComponent(email)}`;

	const response = await fetch(process.env.NEXT_PUBLIC_LOOPS_FORM_ENDPOINT as string, {
		method: 'POST',
		body: formBody,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});
	return response;
};
