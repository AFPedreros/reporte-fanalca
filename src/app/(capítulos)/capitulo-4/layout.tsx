import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Capítulo 4 - Informe de sostenibilidad de Fanalca 2022 ',
	description: 'Cuarto capítulo del informe de sostenibilidad de Fanalca año 2022',
};

export default function CapLayout({ children }: { children: React.ReactNode }) {
	return <main className="relative flex-col min-h-screen bg-primary">{children}</main>;
}
