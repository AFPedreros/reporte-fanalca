'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '@/lib/anim';
import NavbarBody from './navbar-body';

const links = [
	{
		title: 'Inicio',
		href: '/',
	},
	{
		title: 'Capítulo 1',
		href: '/capitulo-1',
	},
	{
		title: 'Capítulo 2',
		href: '/capitulo-2',
	},
	{
		title: 'Capítulo 3',
		href: '/capitulo-3',
	},
	{
		title: 'Capítulo 4',
		href: '/capitulo-4',
	},
];

export default function NavBar() {
	const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

	return (
		<motion.div variants={height} initial="initial" animate="enter" exit="exit">
			<div className="flex md:h-[calc(99.9vh-64px)] h-[calc(50vh-64px)]  px-8 md:px-12">
				<NavbarBody links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
			</div>
		</motion.div>
	);
}
