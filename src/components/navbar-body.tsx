import { motion } from 'framer-motion';
import Link from 'next/link';
import { blur, translate } from '@/lib/anim';

interface Link {
	title: string;
	href: string;
}

interface SelectedLink {
	isActive: boolean;
	index: number;
}

interface NavbarBodyProps {
	links: Link[];
	selectedLink: SelectedLink;
	setSelectedLink: React.Dispatch<React.SetStateAction<SelectedLink>>;
}

export default function NavbarBody({ links, selectedLink, setSelectedLink }: NavbarBodyProps) {
	const getChars = (word: string) => {
		let chars: JSX.Element[] = [];
		word.split('').forEach((char, i) => {
			chars.push(
				<motion.span custom={[i * 0.02, (word.length - i) * 0.01]} variants={translate} initial="initial" animate="enter" exit="exit" key={char + i}>
					{char === ' ' ? '\u00A0' : char}
				</motion.span>
			);
		});
		return chars;
	};

	return (
		<div className="flex flex-col gap-4 md:gap-6">
			{links.map((link, index) => {
				const { title, href } = link;
				return (
					<Link key={`l_${index}`} href={href}>
						<motion.p
							onMouseOver={() => {
								setSelectedLink({ isActive: true, index });
							}}
							onMouseLeave={() => {
								setSelectedLink({ isActive: false, index });
							}}
							className="flex overflow-hidden text-4xl md:text-8xl pr-8 uppercase"
							variants={blur}
							animate={selectedLink.isActive && selectedLink.index != index ? 'open' : 'closed'}
						>
							{getChars(title)}
						</motion.p>
					</Link>
				);
			})}
		</div>
	);
}
