'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { headerOpacity } from '@/lib/anim';
import { Icons } from '@/components/icons';
import NavBar from '@/components/navbar';
import { convertSlugToTitle } from '@/lib/utils';

export default function index() {
	const [isActive, setIsActive] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setIsActive(false);
	}, [pathname]);

	return (
		<header className="fixed top-0 z-40 w-full border-b bg-primary text-primary-foreground">
			<div className="container flex items-center justify-between h-16 font-light uppercase">
				<Link href="/">
					<Image src="/logo-blanco.svg" width={150} height={40} alt="Logo Fanalca" />
				</Link>
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
					{convertSlugToTitle(pathname)}
				</motion.p>
			</div>
			<AnimatePresence mode="wait">{isActive && <NavBar />}</AnimatePresence>
		</header>
	);
}
