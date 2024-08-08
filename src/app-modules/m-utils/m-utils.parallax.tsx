import React, { useState, useEffect } from 'react';

const ParallaxElement = ({ children, speed = 0.5 }: any) => {
	const [offsetY, setOffsetY] = useState(0);
	const handleScroll = () => setOffsetY(window.pageYOffset);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div
			style={{
				position: 'absolute',
				transform: `translateY(${offsetY * speed}px)`,
				transition: 'transform 0.1s cubic-bezier(0,0,0,1)',
			}}
		>
			{children}
		</div>
	);
};

export default ParallaxElement;
