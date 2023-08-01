import './globals.css';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import Header from '@/components/header';
import { cn } from '@/lib/utils';

import Loader from '@/components/loader';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});
const fontHeading = FontSans({
	subsets: ['latin'],
	variable: '--font-heading',
});

export const metadata: Metadata = {
	title: 'Informe Sostenibilidad Fanalca 2022',
	description: 'Informe de sostenibilidad de Fanalca año 2022',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es" className="relative flex flex-col min-h-screen">
			<body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
				<Header />
				{children}
				<Loader />
			</body>
		</html>
	);
}
