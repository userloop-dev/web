import { useEffect, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';

export const useInterval = (callback: () => void, delay: number) => {
	const savedCallback = useRef(callback);

	// Remember the latest callback if it changes.
	useIsomorphicLayoutEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	useEffect(() => {
		savedCallback.current();
		const id = setInterval(() => savedCallback.current(), delay);
		return () => clearInterval(id);
	}, [delay]);
};
