import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Capítulo 1 - Informe de sostenibilidad de Fanalca 2022 ',
	description: 'Primer capítulo del informe de sostenibilidad de Fanalca año 2022',
};

export default function CapLayout({ children }: { children: React.ReactNode }) {
	return <main className="relative flex-col min-h-screen bg-background">{children}</main>;
}
