'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
	const background = useRef(null);

	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const timeline = gsap.timeline({
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: true,
				start: 'top',
				end: '+=500px',
			},
		});

		timeline.from(background.current, { clipPath: 'inset(15%)' });
	}, []);

	return (
		<>
			<section className="relative flex justify-center w-full h-[140vh] overflow-hidden">
				<div ref={background} className="absolute inset-0 bg-primary">
					<Image src={'/images/img-cap-1.png'} alt="Imagen de capítulo 1" layout="fill" priority={true} className="object-cover" />
				</div>
				<div className="relative z-10 flex justify-center mt-[35vh]">
					<h1 data-scroll data-scroll-speed="0.7" className="text-3xl font-bold text-center whitespace-nowrap text-primary-foreground md:text-6xl">
						Capítulo 1
					</h1>
				</div>
			</section>
			<section className="flex items-center justify-center h-screen bg-red-200">
				<p>Freelance Developer -</p>
			</section>
		</>
	);
}
