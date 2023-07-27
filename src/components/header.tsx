'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { headerOpacity } from '@/lib/anim';
import { Icons } from '@/components/icons';
import NavBar from '@/components/navbar';

export default function index() {
	const [isActive, setIsActive] = useState(false);

	return (
		<header className="bg-primary text-primary-foreground sticky top-0 z-40 w-full p-2 md:p-5">
			<div className="flex justify-between items-center uppercase font-light relative container">
				<Link href="/">Logo Fanalca</Link>
				<div
					onClick={() => {
						setIsActive(!isActive);
					}}
					className="flex items-center justify-center space-x-2 cursor-pointer"
				>
					{isActive ? <Icons.close className="w-6 h-6" /> : <Icons.menu className="w-6 h-6" />}
					<div className="relative flex items-center h-full">
						<motion.p variants={headerOpacity} animate={!isActive ? 'open' : 'closed'}>
							Menu
						</motion.p>
						<motion.p variants={headerOpacity} animate={isActive ? 'open' : 'closed'} className="absolute">
							Close
						</motion.p>
					</div>
				</div>
				<motion.p variants={headerOpacity} animate={!isActive ? 'open' : 'closed'} className="hidden md:block">
					Página actual
				</motion.p>
			</div>
			<AnimatePresence mode="wait">{isActive && <NavBar />}</AnimatePresence>
		</header>
	);
}
