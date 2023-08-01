'use client';
import { useRef, useEffect } from 'react';

export default function Home() {
	const loader = useRef<HTMLDivElement | null>(null);
	const path = useRef<SVGPathElement | null>(null);
	const initialCurve = 200;

	const duration = 600;
	let start: number | undefined;

	useEffect(() => {
		setPath(initialCurve);
		setTimeout(() => {
			requestAnimationFrame(animate);
		}, 500);
	}, []);

	const animate = (timestamp: number) => {
		if (start === undefined) {
			start = timestamp;
		}
		const elapsed = timestamp - start;

		const newCurve = easeOutQuad(elapsed, initialCurve, -200, duration);
		setPath(newCurve);

		if (loader.current) {
			loader.current.style.top = easeOutQuad(elapsed, 0, -loaderHeight(), duration) + 'px';
		}

		if (elapsed < duration) {
			requestAnimationFrame(animate);
		}
	};

	const easeOutQuad = (time: number, start: number, end: number, duration: number): number => {
		return -end * (time /= duration) * (time - 2) + start;
	};

	const loaderHeight = (): number => {
		const loaderBounds = loader.current?.getBoundingClientRect();
		return loaderBounds ? loaderBounds.height : 0;
	};

	const setPath = (curve: number) => {
		const width = window.innerWidth;
		const height = loaderHeight();
		path.current?.setAttributeNS(
			null,
			'd',
			`M0 0
    L${width} 0
    L${width} ${height}
    Q${width / 2} ${height - curve} 0 ${height}
    L0 0`
		);
	};

	return (
		<div ref={loader} className="fixed top-0 z-50 w-full h-[calc(100vh+200px)]">
			<svg className="w-full h-full fill-primary-foreground">
				<path className="stroke-1" ref={path}></path>
			</svg>
		</div>
	);
}
