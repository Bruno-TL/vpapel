import { Headers } from '@/components/Headers/Headers';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Footer from '@/components/footer/Footer';

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
  openGraph: {
    title: 'VPapell',
    description:
      'Explore nosso site e descubra o poder da personalização. Deixe sua criatividade fluir e confie em nós para fornecer produtos personalizados de alta qualidade que farão toda a diferença.',
    url: 'https://vpapell.com',
    siteName: 'VPapell',
    images: [
      {
        url: 'https://vpapell.com/imgSEO',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
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
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={jakarta.className}>
        <Headers />
        {children}
        <Footer />
      </body>
    </html>
  );
}
