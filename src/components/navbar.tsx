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
		href: '/',
	},
	{
		title: 'Capítulo 2',
		href: '/',
	},
	{
		title: 'Capítulo 3',
		href: '/',
	},
	{
		title: 'Capítulo 3',
		href: '/',
	},
];

export default function NavBar() {
	const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

	return (
		<motion.div variants={height} initial="initial" animate="enter" exit="exit" className="overflow-hidden">
			<div className="flex space-x-12 my-10 md:py-16 md:justify-between">
				<NavbarBody links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
			</div>
		</motion.div>
	);
}
