import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@radix-ui/themes/styles.css';
import './globals.scss';
import { Theme } from '@radix-ui/themes';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Max-Clean',
  description: 'Max-Clean',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ua" className={montserrat.className}>
      <body>
        <Theme className="mainWrapper">{children}</Theme>
      </body>
    </html>
  );
}
