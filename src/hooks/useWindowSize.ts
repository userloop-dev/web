import { useEffect, useState } from 'react';

export const useWindowSize = () => {
	const [windowSize, setWindowSize]: any = useState({
		width: undefined,
		height: undefined,
	});

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowSize;
};
