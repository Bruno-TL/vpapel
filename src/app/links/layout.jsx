import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'VPapell',
  description:
    'Na nossa gráfica, entendemos o quão importante é personalizar seus itens de maneira única, seja para presentear alguém especial, organizar seus pertences ou simplesmente adicionar um toque pessoal aos seus objetos do dia a dia.',
  icons: {
    icon: '/issets/imageHeaders/vpapelicoAzul.png',
  },
  keywords: [
    'Cadernos',
    'cadernos',
    'caderno',
    'Caderno',
    'Capa personalizada',
    'gráfica',
    'etiqueta personalizada',
    'Etiqueta personalizada',
    'kit devocional',
    'biblia',
    'Bíblia',
    'Biblia',
    'capa personalizada',
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
