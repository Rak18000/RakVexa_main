import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RakVexa | Digital Growth & Software Solutions',
  description:
    'RakVexa helps businesses grow digitally with websites, Google Business, WhatsApp, social media, lead generation and business software.',
  metadataBase: new URL('https://rakvexa.com'),
  keywords: [
    'RakVexa',
    'website development',
    'digital marketing',
    'business software',
    'Ludhiana',
  ],
  openGraph: {
    title: 'RakVexa | Digital Growth & Software Solutions',
    description: 'We Help Businesses Grow Digitally.',
    url: 'https://rakvexa.com',
    siteName: 'RakVexa',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
