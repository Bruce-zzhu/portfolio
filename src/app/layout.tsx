import type { Metadata } from 'next';
import '@/styles/globals.css';
import { AppLayout } from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Bruce | Portfolio',
  description: 'Passionate software engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
