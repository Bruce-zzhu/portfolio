import 'public/styles/globals.css';
import 'public/styles/main.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Bruce's Portfolio",
  description: "Bruce's Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} m-0`}>{children}</body>
    </html>
  );
}
