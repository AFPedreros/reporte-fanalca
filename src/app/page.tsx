'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function Home() {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const thirdText = useRef(null);
	const slider = useRef(null);

	let xPercent = 0;
	let direction = -1;

	const animate = () => {
		xPercent += 0.1 * direction;
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}

		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		gsap.set(thirdText.current, { xPercent: xPercent });
		requestAnimationFrame(animate);
		xPercent += 0.05 * direction;
	};

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to([firstText.current, secondText.current, thirdText.current], {
			scrollTrigger: {
				trigger: document.documentElement,
				scrub: 0.25,
				start: 0,
				end: window.innerHeight,
				onUpdate: (e) => (direction = e.direction * -1),
			},
			x: '-500px',
		});
		requestAnimationFrame(animate);
	}, []);

	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<main className="relative flex-col min-h-screen overflow-hidden bg-primary">
			<section className="h-screen">
				<div className="absolute w-screen text-3x text-primary-foreground font-bold md:text-6xl top-[calc(100vh-150px)]">
					<div ref={slider} className="relative flex flex-nowrap">
						<p ref={firstText} className="relative m-0 whitespace-nowrap">
							EXPLORA LAS PRINCIPALES ESTRATEGIAS DE SOSTENIBILIDAD -
						</p>
						<p ref={secondText} className="pl-2 whitespace-nowrap">
							EXPLORA LAS PRINCIPALES ESTRATEGIAS DE SOSTENIBILIDAD -
						</p>
						<p ref={thirdText} className="pl-2 whitespace-nowrap">
							EXPLORA LAS PRINCIPALES ESTRATEGIAS DE SOSTENIBILIDAD -
						</p>
					</div>
				</div>
			</section>

			<section className="flex items-center justify-center h-screen bg-background">
				<p>Freelance Developer -</p>
			</section>
		</main>
	);
}
