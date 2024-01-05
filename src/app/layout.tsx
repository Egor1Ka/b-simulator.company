import { Metadata } from 'next';
import AppLayout from './AppLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://simulator.company'),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: 1,
};

export default function RootLayout({
  children,
  params: { locale = 'en' },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
