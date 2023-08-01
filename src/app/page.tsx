'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Card, Title, Text, ScatterChart, BarChart } from '@tremor/react';
import { Color } from '@tremor/react';

const chartdata2 = [
	{
		name: 'Topic 1',
		'Group A': 890,
		'Group B': 338,
		'Group C': 538,
		'Group D': 396,
		'Group E': 138,
		'Group F': 436,
	},
	{
		name: 'Topic 2',
		'Group A': 289,
		'Group B': 233,
		'Group C': 253,
		'Group D': 333,
		'Group E': 133,
		'Group F': 533,
	},
];

const dataFormatter = (number: number) => {
	return '$ ' + Intl.NumberFormat('us').format(number).toString();
};

export default function Home() {
	const firstText = useRef(null);
	const secondText = useRef(null);
	const slider = useRef(null);

	let xPercent = 0;
	let direction = -1;

	let animateId: number;

	const animate = () => {
		xPercent += 0.1 * direction;
		if (xPercent < -100) {
			xPercent = 0;
		} else if (xPercent > 0) {
			xPercent = -100;
		}

		gsap.set(firstText.current, { xPercent: xPercent });
		gsap.set(secondText.current, { xPercent: xPercent });
		animateId = requestAnimationFrame(animate);
		xPercent += 0.05 * direction;
	};

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (firstText.current && secondText.current) {
			const animation = gsap.to([firstText.current, secondText.current], {
				scrollTrigger: {
					trigger: document.documentElement,
					scrub: 0.25,
					start: 0,
					end: window.innerHeight,
					onUpdate: (e) => (direction = e.direction * -1),
				},
				x: '-500px',
			});
			animateId = requestAnimationFrame(animate);

			return () => {
				animation.kill();
				cancelAnimationFrame(animateId);
			};
		}
	}, []);

	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll')).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<main className="relative flex-col min-h-screen overflow-hidden text-primary-foreground bg-primary">
			<section className="container flex justify-between h-screen gap-4 pt-6 pb-8 md:pb-12 md:pt-10 lg:py-32">
				<div className="flex max-w-[64rem] justify-center flex-col items-star gap-4 text-left">
					<h1 className="text-3xl font-heading sm:text-5xl md:text-6xl lg:text-7xl">INFORME DE SOSTENIBILIDAD</h1>
					<p className="max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
						Una mirada al 2021, a través de la organización Fanalca Esta página te permitirá explorar las principales estrategias de sostenibilidad que implementamos en nuestra
						organización el año pasado; si buscas profundizar alguna, puedes contactarnos mediante el correo electrónico <span className="font-bold">comunicaciones9@fanalca.com</span>
					</p>
				</div>
				<div className="flex flex-col items-center justify-center w-full">
					<div className="w-full">
						<Title>Writing Contest: Entries</Title>
						<BarChart
							className="mt-6"
							data={chartdata2}
							index="name"
							categories={['Group A', 'Group B', 'Group C', 'Group D', 'Group E', 'Group F']}
							colors={['blue', 'teal', 'amber', 'rose', 'indigo', 'emerald']}
							valueFormatter={dataFormatter}
							yAxisWidth={48}
						/>
					</div>
				</div>
				<div className="absolute w-screen text-3x md:text-6xl top-[calc(100vh-150px)]">
					<div ref={slider} className="relative flex flex-nowrap">
						<p ref={firstText} className="relative m-0 whitespace-nowrap">
							EXPLORA LAS PRINCIPALES ESTRATEGIAS DE SOSTENIBILIDAD -
						</p>

						<p ref={secondText} className="whitespace-nowrap">
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
