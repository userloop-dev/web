import { useEffect, useState } from 'react';

export const useScrollPosition = () => {
	const [scrollPositionY, setScrollPositionY] = useState<number>(0);

	useEffect(() => {
		function handleScroll() {
			setScrollPositionY(window.scrollY);
		}
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return scrollPositionY;
};
